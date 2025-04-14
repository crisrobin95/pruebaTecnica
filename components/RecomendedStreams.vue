<script setup lang="ts">
import { useTwitchData } from '~/composables/useTwitch'

const limit = 6
const { userData, streamData, error, loading } = useTwitchData(limit)

const isPanelVisible = ref(true)

const togglePanelVisibility = () => {
  isPanelVisible.value = !isPanelVisible.value
}
</script>

<template>
  <aside class="recomended-streams">
    <section class="mains">
      <p class="title" v-if="isPanelVisible">Recommended Channels</p>
      <button class="ocult" @click="togglePanelVisibility">
        <SvgIconOcult class="recomended-streams__ocult--button"></SvgIconOcult>
      </button>
    </section>

    <section
      v-if="!loading && userData && streamData"
      v-for="(user, index) in userData.slice(0, limit)"
      :key="user.id"
      class="recomended-streams__box"
    >
      <img
        :src="user.profile_image_url.replace('{width}x{height}', '1x1')"
        :alt="`Thumbnail of ${user.display_name}'s stream`"
        class="recomended-streams__img"
      />
      <p class="recomended-streams__name" v-if="isPanelVisible">
        {{ user.display_name.slice(0, 10) }}
      </p>
      <section v-if="isPanelVisible" class="recomended-streams__point-viewers">
        <SvgIconOnline class="recomended-streams__point-viewers--point-red" />
        <p
          class="recomended-streams__point-viewers--count"
          v-if="streamData[index] && streamData[index].viewer_count && isPanelVisible"
        >
          {{ String(streamData[index].viewer_count).slice(0, 5) }}
        </p>
      </section>
    </section>
    <div v-if="loading">Loading...</div>
    <div v-if="error">
      <p class="recomended-streams__error">Error: {{ error.message }}</p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.mains {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

.ocult {
  background-color: transparent;
}
.title {
  display: flex;
}
.recomended-streams {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #121212;
  padding: 0.5em;
  width: auto;
  border-radius: 0.5em;
  height: auto;
  margin-right: 1em;

  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: auto;
    height: auto;
    margin-top: 1em;
  }
  &__name {
    width: auto;
    margin: 0.5em;
  }

  &__img {
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    justify-content: center;
  }
  &__viewrs {
    display: flex;
    justify-content: flex-end;
  }
  &__point-viewers {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }
}
</style>
