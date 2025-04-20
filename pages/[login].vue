<script setup lang="ts">
const route = useRoute()
const login = route.params.login as string
console.log('el valor de login es: ', login)
</script>

<template>
  <div class="stream-page">
    <h1>Viendo el stream de {{ login }}</h1>
    <iframe
      v-if="login"
      :src="`https://player.twitch.tv/?channel=${login}&parent=prueba-tecnica-cyan-omega.vercel.`"
      height="715"
      width="100%"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
    >
    </iframe>
    <p v-else>No se especificó ningún canal.</p>
  </div>
</template>

<style lang="scss" scoped>
.stream-page {
  padding: 2em;
  width: 51.625em;
  height: 29.625 em;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  h1 {
    margin-bottom: 1em;
  }

  iframe {
    margin-bottom: 2em;
  }
}
</style>
