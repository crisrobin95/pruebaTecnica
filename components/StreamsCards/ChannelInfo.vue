<script setup lang="ts">
import { SvgIconTwitter } from '#components'

const props = defineProps<{
  login: string
}>()
const { userData, streamData, error, loading } = useTwitchUser(props.login)
</script>
<template>
  <div v-if="loading">Cargando información...</div>
  <div v-if="error">Error al cargar la información: {{ error.message }}</div>
  <main class="footer-stream" v-if="userData">
    <header class="footer-stream__user-name">
      About
      {{ userData.display_name }}
    </header>
    <section class="footer-stream__info">
      <p class="footer-stream__followers">350K Followers</p>
      <p class="footer-stream__description">{{ userData.description }}</p>
      <section class="footer-stream__social-networks">
        <span class="footer-stream__box-social"
          ><SvgIconYouTube />
          <p class="footer-stream__text-social">YouTube</p></span
        >
        <span class="footer-stream__box-social"
          ><SvgIconInstagram />
          <p class="footer-stream__text-social">Instagram</p></span
        >
        <span class="footer-stream__box-social"
          ><SvgIconTwitter />
          <p class="footer-stream__text-social">Twitter</p></span
        >
        <span class="footer-stream__box-social"
          ><SvgIconTikTok />
          <p class="footer-stream__text-social">TikTok</p></span
        >
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.footer-stream {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &__user-name {
    @include main.font-medium;
  }
  &__info {
    display: flex;
    flex-direction: column;
    background: rgba(24, 24, 27, 1);
    width: 100%;
    height: fit-content;
    gap: 1.375rem;
    padding: 1.25rem;
  }
  &__description {
    @include main.font-small;
  }
  &__social-networks {
    display: flex;
    width: 100%;
    gap: 1rem;
    align-items: inherit;
    height: fit-content;
    border-top-width: 0.0625rem;
    border-top: 0.0625rem solid rgba(83, 83, 95, 0.48);
    padding-top: 3rem;
  }
  &__box-social {
    display: flex;
    align-items: center;
  }
  &__text-social {
    display: flex;
    align-items: center;
    @include main.font-medium;
  }
}
</style>
