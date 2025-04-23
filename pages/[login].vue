<script setup lang="ts">
const route = useRoute()
const login = route.params.login as string
</script>

<template>
  <div class="stream-page">
    <section class="stream-page__stream-box">
      <iframe
        v-if="login"
        :src="`https://player.twitch.tv/?channel=${login}&parent=prueba-tecnica-cyan-omega.vercel.app`"
        height="826"
        width="474"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
        class="stream-page__stream-box--stream"
      >
      </iframe>
      <section class="stream-page__stream-box--info">
        <StreamsCardsInfoStreams :login="login" />
      </section>
    </section>
    <section class="stream-page__chat-box">
      <iframe
        :src="`https://www.twitch.tv/embed/${login}/chat?parent=prueba-tecnica-cyan-omega.vercel.app&darkpopout=true`"
        height="341"
        width=" 869"
        class="stream-page__chat-box--chat"
      >
      </iframe>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.stream-page {
  display: flex;
  justify-content: space-between;
  width: 51.6em;
  height: 54.3em;
  gap: 1.25em;
  margin-top: 1em;

  &__stream-box {
    display: flex;
    flex-direction: column;
    width: 51.65em;
    height: 54.31em;
    gap: 1.25em;

    &--stream {
      background: rgba(25, 154, 252, 0.23);
      width: 51.6em;
      height: 29.6em;
    }
  }
  &__chat-box {
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;

    &--chat {
      width: 26em;
      height: 40em;
      padding-right: 0.56em;
      padding-left: 0.56em;
      gap: 0.62rem;
    }
  }
}
</style>
