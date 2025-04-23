<script setup lang="ts">
import { useTwitchUser } from '~/composables/useTwitch'

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
  <div class="stream-info">
    <div v-if="loading">Cargando información...</div>
    <div v-if="error">Error al cargar la información: {{ error.message }}</div>
    <aside class="stream-info__box-img" v-if="userData">
      <img
        :src="userData.profile_image_url?.replace('{width}x{height}', '70x70')"
        :alt="userData.display_name"
        class="stream-info__avatar"
      />
    </aside>
    <section class="stream-info__box-info" v-if="userData">
      <div class="stream-info__first-line">
        <h3 class="stream-info__name">{{ userData.display_name }}</h3>
        <aside class="stream-info__buttons">
          <SvgIconFollow />
          <SvgIconSub />
        </aside>
      </div>
      <div class="stream-info__status-viewes" v-if="streamData">
        <span class="stream-info__status">{{ streamData.title }}</span>
        <span class="stream-info__viewers"
          ><SvgIconRed />{{ streamData.viewer_count }}</span
        >
        <span class="stream-info__time">{{ liveTime }}</span>
        <span><SvgIconShare /></span>
      </div>
      <section class="stream-info__game-name">{{ streamData?.game_name }}</section>
      <div class="stream-info__tags-box">
        <span
          v-for="tag in streamData?.tags"
          :key="tag"
          class="stream-info__tags-box--tags"
        >
          {{ tag }}</span
        >
      </div>
      <section class="stream-info__footer">
        <article class="stream-info__footer--about">
          About {{ userData.display_name }}
        </article>
        <section class="stream-info__footer--box" v-if="userData">
          <p class="stream-info__footer--follows" v-if="userData">
            {{ userData.view_count }}Follow
          </p>
          <p class="stream-info__footer--description" v-if="userData">
            {{ userData.description }}
          </p>
        </section>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.stream-info {
  display: flex;
  padding: 0.3em;
  width: 51.625rem;

  &__name {
    @include fontChannels;
    color: white;
  }
  &__box-info {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
  }

  &__first-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: auto;
  }
  &__avatar {
    width: 4em;
    height: 4em;
    border-radius: 50%;
  }
  &__box-info {
    width: 100%;
  }
  &__status-viewes {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }
  &__status {
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.1em;
    @include font-medium;
  }
  &__viewers {
    display: flex;
    color: rgba(255, 130, 128, 1);
    @include font-medium;
  }

  &__time {
    @include font-small;
    font-family: Helvetica Neue;
  }
  &__game-name {
    color: rgba(25, 154, 252, 1);
    text-decoration: underline;
    @include font-small;
  }

  &__tags-box {
    display: flex;
    width: 45.8125rem;
    height: 2.5625rem;
    gap: 0.3125rem;

    &--tags {
      @include tag;
      @include font-medium;
      height: fit-content;
    }
  }
  &__footer {
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    &--about {
      width: 50.375rem;
      height: 1.375rem;
      margin-bottom: 3em;
    }
    &--box {
      display: flex;
      flex-direction: column;
      gap: 1em;
      width: 46.5781rem;
      background-color: rgba(24, 24, 27, 1);
      padding: 1em;
    }
  }
}
</style>
