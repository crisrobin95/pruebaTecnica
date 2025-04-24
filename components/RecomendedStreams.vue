<script setup lang="ts">
import { useTwitchData } from '~/composables/useTwitch'

const limit = 8
const { userData, streamData, channelData, error, loading } = useTwitchData(limit)

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
const props = defineProps<{ collapsed?: boolean }>()
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
      v-if="!loading && userData && streamData && channelData"
      v-for="(user, index) in userData.slice(0, limit)"
      :key="user.id"
      class="recomended-streams__box"
    >
      <img
        :src="user.profile_image_url.replace('{width}x{height}', '1x1')"
        :alt="`Thumbnail of ${user.display_name}'s stream`"
        :class="{ rotated: props.collapsed }"
        class="recomended-streams__img"
      />
      <NuxtLink :to="`/${user.login}`" class="recomended-streams__name">
        <p class="recomended-streams__name--name-channel" v-if="isPanelVisible">
          {{ user.display_name.slice(0, 8) }}
        </p>
        <p
          class="recomended-streams__name--info-chanel"
          v-if="isPanelVisible && channelData[index]"
        >
          {{ channelData[index].game_name.slice(0, 10) }}
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
  width: 100%;
  height: 2.25rem;
  justify-content: space-between;
  padding-top: 0.625rem;
  padding-right: 0.3125rem;
  padding-bottom: 0.625rem;
  padding-left: 0.3125rem;
}
.title {
  width: 100%;
  height: 1rem;
  font-family: Inter;
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 0.975rem;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
}

.ocult {
  width: 0.9999rem;
  height: 0.75rem;
  background-color: transparent;
}

.recomended-streams {
  display: flex;
  flex-direction: column;
  width: fit-content;
  &__box {
    display: flex;
    width: fit-content;
    height: 2.5rem;
    justify-content: space-between;
    gap: 0.5rem;
    padding-top: 0.3125rem;
    padding-right: 0.625rem;
    padding-bottom: 0.3125rem;
    padding-left: 0.625rem;
  }

  &__img {
    display: flex;
    align-items: center;
    width: 1.875rem;
    height: 1.875rem;
    max-width: 1.875rem;
    border-radius: 62499.9375rem;
  }
  &__name {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    &--name-channel {
      width: 8.75rem;
      height: 0.9375rem;
      font-family: Inter;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.05rem;
      letter-spacing: 0%;
      vertical-align: middle;
    }

    &--info-chanel {
      width: 8.75rem;
      height: 0.9375rem;
      font-family: Inter;
      font-weight: 400;
      font-size: 0.8125rem;
      line-height: 0.975rem;
      letter-spacing: 0%;
      vertical-align: middle;
      color: rgba(173, 173, 184, 1);
    }
  }

  &__viewrs {
    display: flex;
    justify-content: flex-start;
    width: 2.5rem;
    height: 1.875rem;
    gap: 0.3125rem;
  }
  &__point-viewers {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &--count {
      display: flex;
      align-items: flex-start;
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
