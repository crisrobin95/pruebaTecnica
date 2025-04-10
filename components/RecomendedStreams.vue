<script setup lang="ts">
import { twitchAPIClient } from '~/utils/twitchApi'
import { ref, onMounted } from 'vue'
import type { Streams, User } from '~/types/typesPoryect.ts'

const streamData = ref<Streams[] | null>(null)
const userData = ref<User[] | null>(null)
const error = ref<Error | null>(null)
const limit = 4

const isPanelVisible = ref(true)

const togglePanelVisibility = () => {
  isPanelVisible.value = !isPanelVisible.value
}

onMounted(async () => {
  try {
    const streamsData = await twitchAPIClient.fetch<{ data: Streams[] }>(
      `streams?first=${limit}&language=es`,
    )
    streamData.value = streamsData.data

    if (streamData.value) {
      const logins = streamData.value.map((stream) => stream.user_login)
      const query = logins.map((login) => `login=${login}`).join('&')
      const usersData = await twitchAPIClient.fetch<{ data: User[] }>(`users?${query}`)
      userData.value = usersData.data
    }
  } catch (err: any) {
    error.value = err
  }
})
</script>

<template>
  <aside class="recomended-streams">
    <section class="mains">
      <p class="title" v-if="isPanelVisible">Recommended Channels</p>
      <button class="ocult" @click="togglePanelVisibility">
        <SvgIconOcult class="recomended-streams__ocult--button"></SvgIconOcult>
      </button>
    </section>
    <div v-if="isPanelVisible">
      <section
        v-if="userData && streamData"
        v-for="(user, index) in userData.slice(0, limit)"
        :key="user.id"
        class="recomended-streams__box"
      >
        <img
          :src="user.profile_image_url.replace('{width}x{height}', '1x1')"
          :alt="`Thumbnail of ${user.display_name}'s stream`"
          class="recomended-streams__img"
        />
        <p class="recomended-streams__name">{{ user.display_name }}</p>
        <p
          class="recomended-streams__viewrs"
          v-if="streamData[index] && streamData[index].viewer_count"
        >
          <SvgIconOnline class="recomended-streams__online" />{{
            streamData[index].viewer_count
          }}
        </p>
      </section>
      <div v-if="error">
        <p class="recomended-streams__error">Error: {{ error.message }}</p>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.mains {
  display: flex;
  justify-content: space-between;
}
.title {
  @include responsive;
}
.ocult {
  display: inline;
  justify-content: flex-end;
  background-color: transparent;
}
.recomended-streams {
  @include responsive;
  display: flex;
  flex-direction: column;
  background-color: #121212;
  padding: 1em;
  width: auto;
  border-radius: 0.5em;
  height: auto;

  &__box {
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    width: auto;
    height: auto;
    justify-content: space-between;
  }

  &__img {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
  }
  &__viewrs {
    display: flex;
    align-items: center;
  }
}
</style>
