<script setup lang="ts">
import { useTwitchTopCategories } from '~/composables/useTwitch'

const limit = 6
const { topCategories, error, loading } = useTwitchTopCategories(limit)
</script>

<template>
  <div v-if="loading">Loading...</div>
  <section class="category-cards">
    <div v-for="category in topCategories" :key="category.id">
      <img
        class="category-cards__port"
        :src="category.box_art_url.replace('{width}x{height}', '285x380')"
        alt="category port"
      />
      <h3>{{ category.name }}</h3>
    </div>
    <div v-if="error">{{ error }}</div>
  </section>
</template>

<style lang="scss" scoped>
.category-cards {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 0.3em;
  &__port {
    width: 11.35em;
    height: 15.1em;
  }
}
</style>
