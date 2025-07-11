<script setup lang="ts">
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
  if (windowWidth.value <= 1024) return 3
  if (windowWidth.value <= 1280) return 4
  if (windowWidth.value < 1490) return 5
  if (windowWidth.value <= 1600) return 6
  if (windowWidth.value <= 1920) return 7
  if (windowWidth.value > 1920) return 8
  return 4
})
const { topCategories, error, loading } = useTwitchTopCategories(limit)
</script>

<template>
  <div v-if="loading">Loading...</div>
  <section
    class="category-cards"
    v-for="category in (topCategories || []).slice(0, limit)"
    :key="category.id"
  >
    <img
      class="category-cards__port"
      :src="category.box_art_url.replace('{width}x{height}', '285x380')"
      alt="category port"
    />
    <header class="category-cards__info">
      {{ category.name }}
    </header>
    <section class="category-cards__viewers">{{ category.viewer_count }} viewer</section>

    <div v-if="error">{{ error }}</div>
  </section>
</template>

<style lang="scss" scoped>
.category-cards {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 11.3544rem;
  height: fit-content;
  gap: 0.625rem;
  transition: border 0.3s ease-in-out;
  border: 0.125rem solid transparent;

  &:hover {
    border: 0.125rem solid var(--c-icon-main);
  }

  &__port {
    display: flex;
    width: 11.3542rem;
    height: 15.1388rem;
  }
  &__info {
    display: flex;
    justify-content: left;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    letter-spacing: 0%;
  }
  &__viewers {
    display: flex;

    font-weight: 400;
    font-size: 13px;
    line-height: 19.5px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: rgba(173, 173, 184, 1);
  }
  &__tag {
    @include tag;
  }
  @include responsive {
    @include flex(column, flex-start, flex-start, wrap, 1rem);
  }
}
</style>
