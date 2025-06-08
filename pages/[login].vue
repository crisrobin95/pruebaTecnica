<script setup lang="ts">
const route = useRoute()
const login = route.params.login as string
// prueba-tecnica-cyan-omega.vercel.app
</script>

<template>
  <div class="stream-page">
    <main class="stream-page__live">
      <iframe
        v-if="login"
        :src="`https://player.twitch.tv/?channel=${login}&parent=localhost`"
        height="720"
        width="1280"
        allowfullscreen
        class="stream-page__live-player"
      >
      </iframe>
      <article class="stream-page__live-info">
        <StreamsCardsInfoStreams :login="login" />
      </article>
      <section><StreamsCardsChannelInfo :login="login" /></section>
    </main>
    <aside class="stream-page__chat">
      <iframe
        :src="`https://www.twitch.tv/embed/${login}/chat?parent=localhost&darkpopout=true`"
        class="stream-page__chat-box"
      >
      </iframe>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.stream-page {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: fit-content;
  gap: 1.25rem;
  &__live {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: fit-content;
    gap: 1.25rem;
  }
  &__live-player {
    width: 100%;
    height: 29.625rem;
  }
  &__live-info {
    display: flex;
    width: 100%;
    height: auto;
    padding-right: 0.625rem;
    padding-left: 0.625rem;
    gap: 1.25rem;
  }
  &__chat {
    display: flex;
    flex-wrap: wrap;
    width: 25%;
    min-height: 25rem;
  }
  &__chat-box {
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 720px) {
    .stream-page {
      display: flex;
      flex-wrap: wrap;
      &__live-player {
        align-items: center;
        max-width: 100%;
        height: 28rem;
      }
      &__live {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: fit-content;
        gap: 1.25rem;
      }
      &__chat {
        width: 100%;
      }
      &__live-info {
        flex-wrap: wrap;
        width: 100%;
      }
    }
  }
}
</style>
