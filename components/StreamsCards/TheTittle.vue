<script setup lang="ts">
interface Props {
  title?: string
  description?: String
}

const props = defineProps<Props>()
const descriptionDefault = 'we think you’ll like'
</script>
<template>
  <span class="channels">{{ props.title }}</span>
  <span class="sugerens">{{ props.description || descriptionDefault }}</span>
</template>

<style lang="scss" scoped>
.channels {
  @include main.fontChannels;
  width: 11rem;
  max-width: 120rem;
  margin-right: 0.5em;
}
.sugerens {
  align-content: center;
  width: 100%;
  max-width: 120rem;
}
</style>
