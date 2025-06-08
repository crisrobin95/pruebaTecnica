import type { User, Streams, Games, Channels } from '~/types/typesPoryect'
import { twitchAPIClient } from '~/utils/twitchApi'

export function useTwitchData(limit: Ref<number>) {
  const userData = ref<User[]>([])
  const streamData = ref<Streams[]>([])
  const channelData = ref<Channels[]>([])
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(true)

  const fetchData = async () => {
    loading.value = true
    try {
      const streamsData = await twitchAPIClient.fetch<any>(
        `streams?first=${limit.value}&language=es`,
      )
      const streams = streamsData.data
      streamData.value = streams
      const logins = streams.map((stream: any) => stream.user_login)
      const query = logins.map((login: string) => `login=${login}`).join('&')
      const datos = await twitchAPIClient.fetch<any>(`users?${query}`)
      userData.value = datos.data
      const userIds = userData.value.map((user) => user.id)
      const channelsQuery = userIds.map((id) => `broadcaster_id=${id}`).join('&')
      const channelsResponse = await twitchAPIClient.fetch<{ data: Channels[] }>(
        `channels?${channelsQuery}`,
      )
      channelData.value = channelsResponse.data
      loading.value = false
    } catch (err: any) {
      error.value = err
      loading.value = false
    }
  }

  onMounted(fetchData)
  watch(limit, fetchData)

  return {
    userData,
    streamData,
    channelData,
    error,
    loading,
  }
}

export function useTwitchTopCategories(limit: Ref<number>) {
  const topCategories = ref<
    {
      id: string
      name: string
      box_art_url: string
      viewer_count: number | null
      tags: string[] | null
    }[]
  >([])
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(true)

  const fetchCategories = async () => {
    loading.value = true
    try {
      const categoriesData = await twitchAPIClient.fetch<any>(
        `games/top?first=${limit.value}`,
      )
      const games = categoriesData.data

      const categoriesWithStreamInfo = await Promise.all(
        games.map(async (game: any) => {
          const streamsData = await twitchAPIClient.fetch<any>(
            `streams?game_id=${game.id}&first=1`,
          )
          return {
            id: game.id,
            name: game.name,
            box_art_url: game.box_art_url.replace('{width}x{height}', '100x140'),
            viewer_count: streamsData.data[0]?.viewer_count || 0,
            tags: streamsData.data[0]?.tags || null,
          }
        }),
      )

      categoriesWithStreamInfo.sort(
        (a, b) => (b.viewer_count || 0) - (a.viewer_count || 0),
      )

      topCategories.value = categoriesWithStreamInfo
      loading.value = false
    } catch (err: any) {
      error.value = err
      loading.value = false
    }
  }

  onMounted(fetchCategories)
  watch(limit, fetchCategories)

  return {
    topCategories,
    error,
    loading,
  }
}

export function useTwitchUser(login: string) {
  const userData = ref<User | null>(null)
  const streamData = ref<Streams | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(true)
  const startTime = ref<Date | null>(null)

  onMounted(async () => {
    loading.value = true
    error.value = null
    try {
      const usersData = await twitchAPIClient.fetch<any>(`users?login=${login}`)
      if (usersData.data.length > 0) {
        userData.value = usersData.data[0]

        const streamsData = await twitchAPIClient.fetch<any>(
          `streams?user_login=${login}`,
        )

        if (streamsData.data.length > 0) {
          streamData.value = streamsData.data[0]
          startTime.value = new Date(streamsData.data[0].started_at)
        } else {
          streamData.value = null
          startTime.value = null
        }
      } else {
        userData.value = null
        streamData.value = null
        startTime.value = null
      }
      loading.value = false
    } catch (err: any) {
      error.value = err
      loading.value = false
    }
  })

  return {
    userData,
    streamData,
    startTime,
    error,
    loading,
  }
}
