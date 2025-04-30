<script setup lang="ts">
const props = defineProps<{
  login: string
}>()
const { userData, streamData, startTime, error, loading } = useTwitchUser(props.login)
</script>
<template>
  <head class="user-name" v-if="userData">
    {{
      userData.display_name
    }}
  </head>
</template>

<style lang="scss" scoped></style>
