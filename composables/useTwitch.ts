import { ref, onMounted } from 'vue'
import type { User, Streams, Games } from '~/types/typesPoryect'
import { twitchAPIClient } from '~/utils/twitchApi'

export function useTwitchData(limit: number) {
  const userData = ref<User[]>([])
  const streamData = ref<Streams[]>([])
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
      loading.value = false
    } catch (err: any) {
      error.value = err
      loading.value = false
    }
  })

  return {
    userData,
    streamData,
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
