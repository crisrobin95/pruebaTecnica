import { ref, onMounted } from 'vue'
import type { User, Streams, Games, Channels } from '~/types/typesPoryect'
import { twitchAPIClient } from '~/utils/twitchApi'

export function useTwitchData(limit: number) {
  const userData = ref<User[]>([])
  const streamData = ref<Streams[]>([])
  const channelData = ref<Channels[]>([])
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(true)

  onMounted(async () => {
    loading.value = true
    try {
      const streamsData = await twitchAPIClient.fetch<any>(
        `streams?first=${limit}&language=es`,
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
  })

  return {
    userData,
    streamData,
    channelData,
    error,
    loading,
  }
}

export function useTwitchTopCategories(limit: number = 4) {
  const topCategories = ref<Games[]>([])
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(true)

  onMounted(async () => {
    loading.value = true
    try {
      const categoriesData = await twitchAPIClient.fetch<any>(`games/top?first=${limit}`)
      topCategories.value = categoriesData.data.map((game: any) => ({
        id: game.id,
        name: game.name,
        box_art_url: game.box_art_url,
      }))
      loading.value = false
    } catch (err: any) {
      error.value = err
      loading.value = false
    }
  })

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
