<script setup lang="ts">
const props = defineProps<{
  login: string
}>()
const now = ref(new Date())

const liveTime = computed(() => {
  if (startTime.value) {
    const difference = now.value.getTime() - startTime.value.getTime()
    const hours = Math.floor(difference / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }
  return ''
})

const intervalId = ref<NodeJS.Timeout | null>(null)

onMounted(() => {
  intervalId.value = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
})
const { userData, streamData, startTime, error, loading } = useTwitchUser(props.login)
</script>

<template>
  <div v-if="loading">Cargando información...</div>
  <div v-if="error">Error al cargar la información: {{ error.message }}</div>
  <main class="stream-info">
    <aside>
      <img
        v-if="userData"
        :src="userData.profile_image_url?.replace('{width}x{height}', '40x40')"
        :alt="userData.display_name"
        class="stream-info__img"
      />
    </aside>
    <section class="stream-info__header">
      <header class="stream-info__contents" v-if="userData">
        <span class="stream-info__name-user">{{ userData.display_name }}</span>
        <span class="stream-info__buttons"> <SvgIconFollow /> <SvgIconSub /></span>
      </header>
      <section class="stream-info__first-line" v-if="streamData">
        <span class="stream-info__title">{{ streamData.title }}</span>
        <article class="stream-info__time-viewer">
          <span class="stream-info__viewers"
            ><SvgIconRed />{{ streamData.viewer_count }}</span
          >
          <span class="stream-info__time">{{ liveTime }}</span>
          <span><SvgIconShare /></span>
        </article>
        <span class="stream-info__game-name">{{ streamData.game_name }}</span>
      </section>
      <section class="stream-info__tags-box">
        <button
          class="stream-info__tag"
          v-for="tag in streamData?.tags.slice(0, 3)"
          :key="tag"
        >
          <span>{{ tag }}</span>
        </button>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.stream-info {
  display: flex;
  width: 100%;
  height: fit-content;
  padding-right: 0.625rem;
  gap: 1rem;

  &__header {
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    gap: 0.625rem;
  }
  &__contents {
    display: flex;
    justify-content: space-between;
  }
  &__img {
    width: 4.0625rem;
    height: 4.0625rem;
    border-radius: 62499.9375rem;
  }
  &__name-user {
    display: flex;
    flex-wrap: wrap;

    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.35rem;
    letter-spacing: 0%;
    vertical-align: middle;
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
  }
  &__time-viewer {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    justify-content: flex-end;
    gap: 0.625rem;
    align-items: center;
  }
  &__first-line {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
  }
  &__title {
    width: 60%;
    @include font-medium;
  }
  &__time {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 1.2188rem;
    letter-spacing: 0%;
    vertical-align: middle;
  }
  &__viewers {
    @include font-small;
    color: rgba(255, 130, 128, 1);
  }
  &__tags-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.3125rem;
  }
  &__game-name {
    width: fit-content;
    @include font-small;
    color: rgba(25, 154, 252, 1);
    text-decoration: underline;
  }
  &__tag {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3125rem;
    @include tag;
  }
  @media (max-width: 720px) {
    .stream-info {
      &__buttons {
        display: none;
      }
    }
  }
}
</style>
