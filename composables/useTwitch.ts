import { ref, onMounted } from 'vue'
import type { User, Streams } from '~/types/typesPoryect'
import { twitchAPIClient } from '~/utils/twitchApi'

export function useTwitchData(limit: number) {
  const userData = ref<User[] | null>(null)
  const streamData = ref<Streams[] | null>(null)
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
