<script setup lang="ts">
import { useTwitchData } from '~/composables/useTwitch'

const limit = 6
const { userData, streamData, error, loading } = useTwitchData(limit)

const isPanelVisible = ref(true)

const togglePanelVisibility = () => {
  isPanelVisible.value = !isPanelVisible.value
}
const formatViewers = (viewCount: number | undefined): string => {
  if (viewCount === undefined) {
    return ''
  }
  if (viewCount >= 1000) {
    const thousands = (viewCount / 1000).toFixed(1)
    return `${thousands}k`
  }
  return String(viewCount)
}
</script>

<template>
  <aside class="recomended-streams">
    <section class="mains">
      <p class="title" v-if="isPanelVisible">Recommended Channels</p>
      <button class="ocult" @click="togglePanelVisibility">
        <SvgIconOcult class="recomended-streams__ocult--button"></SvgIconOcult>
      </button>
    </section>

    <section
      v-if="!loading && userData && streamData"
      v-for="(user, index) in userData.slice(0, limit)"
      :key="user.id"
      class="recomended-streams__box"
    >
      <img
        :src="user.profile_image_url.replace('{width}x{height}', '1x1')"
        :alt="`Thumbnail of ${user.display_name}'s stream`"
        class="recomended-streams__img"
      />
      <NuxtLink :to="`/${user.login}`" class="recomended-streams__link">
        <p class="recomended-streams__name" v-if="isPanelVisible">
          {{ user.display_name.slice(0, 8) }}
        </p>
      </NuxtLink>
      <section v-if="isPanelVisible" class="recomended-streams__point-viewers">
        <SvgIconOnline class="recomended-streams__point-viewers--point-red" />
        <p
          class="recomended-streams__point-viewers--count"
          v-if="streamData[index] && streamData[index].viewer_count"
        >
          {{ formatViewers(streamData[index].viewer_count) }}
        </p>
      </section>
    </section>
    <div v-if="loading">Loading...</div>
    <div v-if="error">
      <p class="recomended-streams__error">Error: {{ error.message }}</p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.mains {
  display: flex;
  width: max-content;
  gap: 0.5em;
}
.title {
  display: flex;
  width: 100%;
}

.ocult {
  background-color: transparent;
}

.recomended-streams {
  display: flex;
  flex-direction: column;
  background-color: #121212;
  padding: 0.5em;
  width: fit-content;
  height: 24.94em;
  border-radius: 0.5em;
  margin-right: 1em;

  &__box {
    display: flex;
    width: auto;
    height: 2.5em;
    justify-content: space-between;
    padding-top: 0.3125rem;
    padding-right: 0.625rem;
    padding-bottom: 0.3125rem;
    padding-left: 0.625rem;
  }
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: Inter;
    font-weight: 600;
    font-size: 0.87em;
    line-height: 1.05em;
    align-items: center;
  }
  &__img {
    display: flex;
    align-items: center;
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    justify-content: flex-start;
  }

  &__viewrs {
    display: flex;
    justify-content: flex-end;
  }
  &__point-viewers {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.2em;
    &--count {
      display: flex;

      font-family: Inter;
      font-weight: 400;
      font-size: 0.81rem;
      line-height: 1.21em;
      letter-spacing: 0%;
      vertical-align: middle;
    }
  }
}
</style>
