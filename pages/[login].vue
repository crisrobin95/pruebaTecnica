<script setup lang="ts">
const route = useRoute()
const login = route.params.login as string
</script>

<template>
  <div class="stream-page">
    <main class="stream-page__live">
      <iframe
        v-if="login"
        :src="`https://player.twitch.tv/?channel=${login}&parent=prueba-tecnica-cyan-omega.vercel.app`"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
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
        :src="`https://www.twitch.tv/embed/${login}/chat?parent=prueba-tecnica-cyan-omega.vercel.app&darkpopout=true`"
        class="stream-page__chat-box"
      >
      </iframe>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.stream-page {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
    width: fit-content;
    height: fit-content;
  }
  &__chat-box {
    width: 21.3125rem;
    height: 54.3125rem;
  }

  @media (max-width: 900px) {
    .stream-page {
      &__live-player {
        align-items: center;
        max-width: 100%;
        height: 28rem;
      }
    }
  }
}
</style>
