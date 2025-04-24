<script setup lang="ts">
import { useTwitchData } from '~/composables/useTwitch'

const limit = 6
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
}
.streams-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  height: 318.41998291015625px;
  gap: 2.3125rem;

  &__link {
    text-decoration: none;
  }
  &__title {
    @include font-medium;
  }
  &__details {
    display: flex;
    flex-direction: column;
    padding: 1px;
  }

  &__stream-img {
    width: 382px;
    height: 210.4199981689453px;
  }
  &__info {
    display: flex;
    width: 382px;
    height: 98px;
    gap: 12px;
  }
  &__name-channel {
    color: rgba(173, 173, 184, 1);
    @include font-medium;
  }

  &__icon-channel {
    height: 2.68em;
    width: 2.68em;
    border-radius: 50%;
  }
  &__tags {
    @include tag;
  }
}
</style>
