export class TwitchAPI {
  private clientId = import.meta.env.VITE_TWITCH_CLIENT_ID
  private clientSecret = import.meta.env.VITE_TWITCH_CLIENT_SECRET

  private async getToken() {
    try {
      const res = await $fetch<{ access_token: string }>(
        'https://id.twitch.tv/oauth2/token',
        {
          method: 'POST',
          params: {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: 'client_credentials',
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      console.log('Salida de ', res)
      return res.access_token
    } catch (error) {
      console.error('Error getting Twitch token:', error)
      throw error
    }
  }

  public async fetch<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      const token = await this.getToken()
      const url = `https://api.twitch.tv/helix/${endpoint}`

      console.log('Parameters:', params)
      console.log('URL:', url)

      const res = await $fetch<T>(url, {
        params,
        headers: {
          'Client-ID': this.clientId,
          Authorization: `Bearer ${token}`,
        },
      })

      console.log('API Response:', res)

      return res
    } catch (error) {
      console.error(`Twitch API error (${endpoint}):`, error)
      throw error
    }
  }
}

export const twitchAPIClient = new TwitchAPI()
