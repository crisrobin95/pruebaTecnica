<script setup lang="ts"></script>
<template>
  <section class="container">
    <p class="channels">Live channels</p>
    <p class="sugerens">we think you’ll like</p>
  </section>
</template>

<style lang="scss" scoped>
.container {
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
