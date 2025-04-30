<script setup lang="ts">
const limit = 6
const { topCategories, error, loading } = useTwitchTopCategories(limit)
</script>

<template>
  <div v-if="loading">Loading...</div>
  <section class="category-cards" v-for="category in topCategories" :key="category.id">
    <img
      class="category-cards__port"
      :src="category.box_art_url.replace('{width}x{height}', '285x380')"
      alt="category port"
    />
    <!-- <section
      class="category-cards__info"
      v-for="category in topCategories"
      :key="category.id"
    >
      <p>{{ category.name }}</p>
    </section> -->
    <div v-if="error">{{ error }}</div>
  </section>
</template>

<style lang="scss" scoped>
.category-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 11.3544rem;
  height: fit-content;
  gap: 0.625rem;
  &__port {
    display: flex;
    width: 11.3542rem;
    height: 15.1388rem;
  }
}
</style>
