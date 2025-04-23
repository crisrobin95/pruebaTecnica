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
  width: 16.5em;
  height: 1.37em;
  padding-top: 0.2em;
  padding-bottom: 0.6em;
}
.channels {
  @include fontChannels;
  width: auto;
  margin-right: 0.5em;
}
.sugerens {
  width: auto;
}
</style>
