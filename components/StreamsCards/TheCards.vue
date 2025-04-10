<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User, Streams } from '~/types/typesPoryect.ts'
import { twitchAPIClient } from '~/utils/twitchApi'
const userData = ref<User[] | null>(null)
const streamData = ref<Streams[] | null>(null)
const error = ref<Error | null>(null)
const limit = 4
onMounted(async () => {
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
  } catch (err: any) {
    error.value = err
  }
})
</script>

<template>
  <section
    v-for="(users, index) in userData?.slice(0, limit)"
    :key="users.id"
    class="users"
  >
    <img
      v-if="streamData && streamData[index]"
      :src="streamData[index].thumbnail_url.replace('{width}x{height}', '125x125')"
      :alt="`Stream thumbnail of ${users.display_name}`"
      class="users__img-stream"
    />

    <article class="users__article">
      <img
        :src="users.profile_image_url.replace('{width}x{height}', '100x100')"
        :alt="`Thumbnail of ${users.display_name}'s stream`"
        class="users__img"
      />
      <p class="users__name">{{ users.display_name }}</p>
      <div v-if="streamData && streamData[index] && streamData[index].tags">
        <p class="users__title">
          {{ streamData[index].title }}
        </p>
        <button
          v-for="tag in streamData[index].tags.slice(0, 4)"
          :key="tag"
          class="users__tags"
        >
          {{ tag }}
        </button>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.users {
  @include responsive;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 15em;
  &__img-stream {
    width: 10em;
    height: 10em;
  }
  &__article {
    align-items: center;
    justify-content: space-around;
    width: auto;
    height: auto;
  }
  &__img {
    width: 2.68em;
    height: 2.68em;
    border-radius: 62499.93em;
    margin-right: 1em;
  }

  &__tags {
    width: auto;
    background-color: transparent;
    height: auto;
    border: solid 0.05em white;
    padding: 0.5em;
    margin-left: 0.5em;
    border-radius: 1em;
    background-color: rgba(137, 122, 122, 0.704);
  }
}
</style>
