<script setup lang="ts">
import { useTwitchData } from '~/composables/useTwitch'

const limit = 3
const { userData, streamData, error, loading } = useTwitchData(limit)
</script>

<template>
  <section
    class="streams-items"
    v-if="!loading && userData && streamData"
    v-for="(users, index) in userData?.slice(0, limit)"
    :key="users.id"
  >
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
          {{ users.display_name }}
        </p>
        <p lcass="streams-items__category">
          {{ streamData[index].game_name }}
        </p>
        <button
          v-for="tag in streamData[index].tags.slice(0, 4)"
          :key="tag"
          class="streams-items__tags"
        >
          {{ tag }}
        </button>
      </article>
    </section>
  </section>

  <div v-if="loading">Loading...</div>
  <div v-if="error">
    <p class="recomended-streams__error">Error: {{ error.message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.streams-items {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 23.8rem;
  height: 19.9em;
  gap: 1em;

  &__stream-img {
    width: 20em;
    height: 13.15em;
  }
  &__info {
    display: flex;
    align-items: flex-start;
    gap: 1em;
  }

  &__icon-channel {
    height: 2.68em;
    width: 2.68em;
    border-radius: 50%;
  }
  &__tags {
    background-color: #8a7b7bb4;
    border-radius: 1em;
    height: auto;
    margin-left: 0.5em;
    padding: 0.5em;
    width: auto;
  }
}
</style>
