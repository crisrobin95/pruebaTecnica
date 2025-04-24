<script setup lang="ts">
import { useTwitchTopCategories } from '~/composables/useTwitch'

const limit = 6
const { topCategories, error, loading } = useTwitchTopCategories(limit)
</script>

<template>
  <div v-if="loading">Loading...</div>
  <section class="category-cards">
    <img
      v-for="category in topCategories"
      :key="category.id"
      class="category-cards__port"
      :src="category.box_art_url.replace('{width}x{height}', '285x380')"
      alt="category port"
    />

    <div v-if="error">{{ error }}</div>
  </section>
</template>

<style lang="scss" scoped>
.category-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 20.2638rem;
  gap: 0.625rem;
  &__port {
    display: flex;
    width: 11.3542rem;
    height: 15.1388rem;
  }
}
</style>
