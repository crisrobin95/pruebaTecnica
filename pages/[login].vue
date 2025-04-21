<script setup lang="ts">
const route = useRoute()
const login = route.params.login as string
const limit = 1
const { userData, streamData, error, loading } = useTwitchData(limit)
const isPanelVisible = ref(true)
const togglePanelVisibility = () => {
  isPanelVisible.value = !isPanelVisible.value
}
</script>

<template>
  <div class="stream-page">
    <section class="stream-page__stream-box">
      <iframe
        v-if="login"
        :src="`https://player.twitch.tv/?channel=${login}&parent=localhost`"
        height="826"
        width="474"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
        class="stream-page__stream-box--stream"
      >
      </iframe>
    </section>
    <section class="stream-page__chat-box">
      <aside class="stream-page__chat-box--bar">
        <button class="stream-page__chat-box--button" @click="togglePanelVisibility">
          <SvgIconOcultRigth />
        </button>
        <h4 class="stream-page__chat-box--button--title" v-if="isPanelVisible">
          Stream Chat
        </h4>
        <button v-if="isPanelVisible" class="stream-page__chat-box--button">
          <SvgIconPeople />
        </button>
      </aside>
      <iframe
        :src="`https://www.twitch.tv/embed/${login}/chat?parent=localhost`"
        height="341"
        width=" 869"
        class="stream-page__chat-box--chat"
        v-if="isPanelVisible"
      >
      </iframe>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.stream-page {
  display: flex;
  width: auto;
  height: 54.31em;
  padding-right: 0.62em;
  padding-left: 0.62em;
  gap: 0.18em;

  &__stream-box {
    display: flex;
    width: 51.62em;
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

    &--button {
      background: transparent;
    }

    &--bar {
      display: flex;
      justify-content: space-between;
      width: auto;
      height: 3em;
      padding: 0.56em 0.62em 0.56em 0.62em;
      gap: 5.18em;
      border-bottom: 0.06em solid rgba(83, 83, 95, 0.48);
    }
    &--chat {
      width: 21.31em;
      height: 51.31em;
      padding-right: 0.56em;
      padding-left: 0.56em;
      gap: 0.62rem;
    }
  }
}
</style>
