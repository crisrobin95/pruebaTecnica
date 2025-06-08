<script setup lang="ts">
interface Props {
  title?: string
  description?: String
}

const props = defineProps<Props>()
const descriptionDefault = 'we think you’ll like'
</script>
<template>
  <section class="container">
    <p class="channels">{{ props.title }}</p>
    <p class="sugerens">{{ props.description || descriptionDefault }}</p>
  </section>
</template>

<style lang="scss" scoped>
.container {
  @include fontChannels;
  display: flex;
  align-items: center;
  width: 100dvw;
  height: auto;
}
.channels {
  @include fontChannels;
  width: 13rem;
  max-width: 120rem;
  margin-right: 0.5em;
}
.sugerens {
  width: 100%;
  max-width: 120rem;
}
</style>
