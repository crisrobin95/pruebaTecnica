export type Streams = {
  id: string
  user_id: string
  user_login: string
  user_name: string
  game_id: string
  game_name: string
  type: string
  title: string
  tags: []
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids: []
  is_mature: string
}

export type User = {
  id: string
  login: string
  display_name: string
  type: string
  broadcaster_type: string
  description: string
  profile_image_url: string
  offline_image_url: string
  view_count: number
  email: string
  created_at: string
}

export type Games = {
  id: string
  name: string
  box_art_url: string
  igdb_id: string
}

export type Category = {
  id: string
  name: string
  box_art_url: string
}

export type Channels = {
  broadcaster_id: string
  broadcaster_login: string
  broadcaster_name: string
  broadcaster_language: string
  game_id: string
  game_name: String
  title: String
  delay: 0
  tags: []
  content_classification_labels: []
  is_branded_content: boolean
}

export type ChannelsTotal = {
  total: number
  data: []
  pagination: object
}
