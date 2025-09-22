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
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 120rem;
  margin-right: 0.5em;
}
.sugerens {
  align-content: center;
  width: auto;
  max-width: 120rem;
}
</style>
