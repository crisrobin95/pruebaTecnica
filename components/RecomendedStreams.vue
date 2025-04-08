<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { twitchAPIClient } from '~/utils/twitchApi';
  const streamData = ref<any[] | null>(null);
  const error = ref<Error | null>(null);
  const limit = 5;
  const isPanelVisible = ref(true); 

  const togglePanelVisibility = () => {
    isPanelVisible.value = !isPanelVisible.value;
  };


  onMounted(async () => {
    try {
      const datos = await twitchAPIClient.fetch<any>('streams');
      streamData.value = datos.data;
    } catch (err: any) {
      error.value = err;
    }
  });
</script>

<template>
  
  <aside class="recomended-streams">
    <button class="ocult" @click="togglePanelVisibility">
      <SvgIconOcult class="recomended-streams__ocult--button" ></SvgIconOcult>
    </button>
    
    <section v-if="isPanelVisible"> 
    <h2 class="recomended-streams__title" >Recommended Streams</h2>
    <div v-if="streamData && streamData.length > 0">
      <article v-for="stream in streamData.slice(0, limit)" :key="stream.id" class="recomended-streams__item">
        <img
          class="recomended-streams__img"
          :src="stream.thumbnail_url.replace('{width}x{height}', '30x30')"
          :alt="`Thumbnail of ${stream.user_name}'s stream`"
        />
        <div class="recomended-streams__info">
          <h3 class="recomended-streams__user-name">{{ stream.user_name }}</h3>
          <p class="recomended-streams__viewers">{{ stream.viewer_count }}</p>
        </div>
      </article>
    </div>
    <div v-else-if="streamData && streamData.length === 0">
      <p class="recomended-streams__message">No streams available.</p>
    </div>
    <div v-if="error">
      <p class="recomended-streams__error">Error: {{ error.message }}</p>
    </div>
    </section>
  </aside>
</template>

<style lang="scss" scoped>
  .ocult{
    display: flex;
    background-color: transparent;

  }
.recomended-streams {
  @include responsive;
  display: flex;
  background-color: #121212; 
  color: white;
  padding: 1em;
  width: 16.25em; 
  border-radius: 0.5em; 
  overflow: hidden; 
  width: auto;


  &__title {
    font-size: 0.8125em;
    margin-bottom: 0.5em;
    font-weight: bold;
    flex-grow: 1;
  }

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }

  &__img {
    width: 2.5em; 
    height: 2.5em;
    border-radius: 2em;
    margin-right: 1em;
    object-fit: cover; 
  }

  &__info {
    flex-grow: 1;
  }

  &__user-name {
    font-weight: bold;
    margin-bottom: 0.2em;
    font-size: 0.8125em;
  }

  &__viewers {
    font-size: 0.8125em;
    color: #999; 

  &__viewer-count {
    margin-left: auto;
    color: #f00;
    font-weight: bold;
    display: flex;
    align-items: center;

  
  }

  &__message,
  &__error {
    text-align: center;
  }
}
}
</style>