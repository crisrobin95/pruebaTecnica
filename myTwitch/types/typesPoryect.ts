export interface TokenResponse {
    access_token: string
    refresh_token: string
    expires_in: number
    scope: string []
    token_type: string
  }

  export interface Data {
    broadcaster_type: string,
      created_at: string,
      description: string,
      display_name: string,
      id: string,
      login: string,
      offline_image_url: string,
      profile_image_url: string,
      view_count: string
  }

  export interface Stream {
    id: string;
    user_id: string;
    user_name: string;
    title: string;
    game_name: string;
    thumbnail_url: string;
    viewer_count: number;
    profile_image_url: string;
    tags: string[];
  }

  export interface ApiResponse {
    status: 'success' | 'error'
    tokenPreview?: string
    message?: string
  }