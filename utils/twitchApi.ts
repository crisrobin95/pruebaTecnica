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

      return res.access_token
    } catch (error) {
      throw error
    }
  }

  public async fetch<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      const token = await this.getToken()
      const url = `https://api.twitch.tv/helix/${endpoint}`

      const res = await $fetch<T>(url, {
        params,
        headers: {
          'Client-ID': this.clientId,
          Authorization: `Bearer ${token}`,
        },
      })

      return res
    } catch (error) {
      console.error(`Twitch API error (${endpoint}):`, error)
      throw error
    }
  }
}

export const twitchAPIClient = new TwitchAPI()
