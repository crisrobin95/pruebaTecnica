<script setup lang="ts">
import { useTwitchData } from '@/composables/useTwitch'

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1920)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const limit = computed(() => {
  if (windowWidth.value < 1098) return 3
  if (windowWidth.value > 1920) return 4
  if (windowWidth.value < 1430) return 2
  return 3
})
const { userData, streamData, error, loading } = useTwitchData(limit)
</script>

<template>
  <section
    class="streams-items"
    v-if="!loading && userData && streamData"
    v-for="(users, index) in userData?.slice(0, limit)"
    :key="users.id"
  >
    <NuxtLink :to="`/${users.login}`" class="streams-items__link">
      <img
        class="streams-items__stream-img"
        v-if="streamData && streamData[index]"
        :src="streamData[index].thumbnail_url.replace('{width}x{height}', '125x125')"
        :alt="`Stream thumbnail of ${users.display_name}`"
      />
      <section class="streams-items__info">
        <img
          :src="users.profile_image_url.replace('{width}x{height}', '20x20')"
          :alt="`Thumbnail of ${users.display_name}'s stream`"
          class="streams-items__icon-channel"
        />
        <article class="streams-items__details">
          <h1 class="streams-items__title">
            {{ streamData[index].title.slice(0, 40) }}
          </h1>
          <p class="streams-items__name-channel">
            {{ users.display_name }}<SvgIconVerified />
          </p>
          <p class="streams-items__category">
            {{ streamData[index].game_name }}
          </p>

          <div class="buttons">
            <button
              v-for="tag in streamData[index]?.tags.slice(0, 3)"
              :key="tag"
              class="streams-items__tags"
            >
              {{ tag }}
            </button>
          </div>
        </article>
      </section>
    </NuxtLink>
  </section>

  <div v-if="loading" class="recomended-streams__loading">Loading...</div>
  <div v-if="error">
    <p class="recomended-streams__error">Error: {{ error.message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 0.625rem;
}
.streams-items {
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
  border: 0.125rem solid transparent;
  &:hover {
    border: 0.125rem solid var(--c-icon-main);
  }

  &__link {
    padding: 0.125rem;
    cursor: pointer;
  }
  &__title {
    @include main.font-medium;
  }
  &__details {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 0.3125rem;
  }

  &__stream-img {
    width: 23.875rem;
    height: 13.1512rem;
  }
  &__info {
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 0.75rem;
  }
  &__name-channel {
    color: rgba(173, 173, 184, 1);
    @include main.font-small;
  }

  &__icon-channel {
    height: 2.68em;
    width: 2.68em;
    border-radius: 50%;
  }
  &__category {
    @include main.flex(row, flex-start, flex-start, wrap, 1rem);
    color: rgba(173, 173, 184, 1);
    @include main.font-small;
  }
  &__tags {
    @include main.tag;
  }
  @include main.responsive {
    @include main.flex(row, flex-start);
    &__category {
      @include main.flex(column);
    }
    &__stream-img {
      width: 15rem;
      height: 12rem;
    }
  }
}
</style>
