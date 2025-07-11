<script setup lang="ts">
import { useTwitchData } from '~/composables/useTwitch'

const rotationAngle = ref(0)

const isPanelVisible = ref(true)

const togglePanelVisibility = () => {
  isPanelVisible.value = !isPanelVisible.value
  rotationAngle.value = isPanelVisible.value ? 0 : 180
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
const handleResize = () => {
  isPanelVisible.value = window.innerWidth > 750
  rotationAngle.value = isPanelVisible.value ? 0 : 180
}
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1920)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onBeforeMount(() => {
  if (typeof window !== 'undefined') {
    isPanelVisible.value = window.innerWidth > 750
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', updateWidth)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('resize', updateWidth)
})
const limit = computed(() => {
  if (windowWidth.value < 500) return 7
  if (windowWidth.value <= 1024) return 4
  if (windowWidth.value > 1024) return 8
  return 4
})
const { userData, streamData, channelData, error, loading } = useTwitchData(limit)
</script>

<template>
  <aside class="recomended-streams">
    <section class="mains">
      <p class="title" v-if="isPanelVisible">Canales Recomendados</p>
      <button class="ocult" @click="togglePanelVisibility">
        <SvgIconOcult
          class="recomended-streams__ocult--button"
          :style="{ transform: `rotate(${rotationAngle}deg)` }"
        ></SvgIconOcult>
      </button>
    </section>

    <section
      v-if="!loading && userData && streamData && channelData"
      v-for="(user, index) in userData?.slice(0, limit)"
      :key="user.id"
      class="recomended-streams__box"
    >
      <NuxtLink :to="`/${user.login}`">
        <img
          :src="user.profile_image_url.replace('{width}x{height}', '1x1')"
          :alt="`Thumbnail of ${user.display_name}'s stream`"
          :class="{ rotated: props.collapsed }"
          class="recomended-streams__img"
        />
      </NuxtLink>
      <NuxtLink :to="`/${user.login}`" class="recomended-streams__name">
        <p class="recomended-streams__name-channel" v-if="isPanelVisible">
          {{ user.display_name.slice(0, 8) }}
        </p>
        <p
          class="recomended-streams__info-chanel"
          v-if="isPanelVisible && userData && streamData && streamData[index]"
        >
          {{ streamData.find((stream) => stream.user_id === user.id)?.game_name }}
        </p>
      </NuxtLink>
      <section v-if="isPanelVisible" class="recomended-streams__point-viewers">
        <SvgIconOnline class="recomended-streams__point-viewers--point-red" />
        <p
          class="recomended-streams__count"
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
  padding: 0.625rem 0.3125rem 0.625rem 0.3125rem;
}
.title {
  width: 100%;
  height: 1rem;
  @include font-medium;
}

.ocult {
  width: 0.9999rem;
  height: 0.75rem;
  background-color: transparent;
  &:hover {
    background-color: var(--c-icon-main);
  }
}

.recomended-streams {
  @include flex(column, flex-start, flex-start);
  width: fit-content;
  transition: width 0.3s ease-in-out;
  &.collapsed {
    width: auto;
    .mains .title {
      display: none;
    }
  }
  &__box {
    display: flex;
    width: fit-content;
    height: 2.5rem;
    justify-content: space-between;
    gap: 0.5rem;
  }

  &__img {
    display: flex;
    align-items: center;
    width: 1.875rem;
    height: 1.875rem;
    max-width: 1.875rem;
    border-radius: 62499.9375rem;
  }
  &__name-channel {
    width: 8.75rem;
    height: 0.9375rem;

    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.05rem;
    letter-spacing: 0%;
    vertical-align: middle;
  }
  &__name {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    gap: 0.3rem;
  }
  &__info-chanel {
    width: 8.75rem;
    height: 0.9375rem;

    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 0.975rem;
    letter-spacing: 0%;
    vertical-align: middle;
    color: rgba(173, 173, 184, 1);
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
  }
  &__count {
    display: flex;
    align-items: flex-start;
    font-weight: 400;

    line-height: 1.21em;
    vertical-align: middle;
  }
  &__ocult--button {
    transition: transform 0.3s ease-in-out;
    transform: rotate(0deg);
  }
  @include responsive {
    .mains {
      display: none;
    }
    @include flex(row, center, center, nowrap, 0);
    width: 50%;

    &__count,
    &__point-viewers,
    &__viewrs,
    &__info-chanel,
    &__name,
    &__name-channel {
      display: none;
    }
  }
}
</style>
