    <script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { twitchAPIClient } from '~/utils/twitchApi';
    const streamData = ref<any[] | null>(null); 
    const error = ref<Error | null>(null);
    
    onMounted(async () => {
      try {
        const datos = await twitchAPIClient.fetch<any>('streams')
        // const users= await twitchAPIClient.fetch<any>('users')
          streamData.value = datos.data 

      } catch (err: any) {
        error.value = err;
      }
    });
   
</script>

<template>
 
  <div class="recomended-streams">
    <div v-if="streamData && streamData.length > 0">
      <div v-for="stream in streamData.slice(0, 5)" :key="stream.id">
        <img class="recomended-streams__img" :src="stream.thumbnail_url.replace('{width}x{height}', '10x10')" alt="Stream Thumbnail" />
        <p class="recomended-streams__text"> {{ stream.user_name }}</p>
        <p class="recomended-streams__text"> {{ stream.viewer_count }}</p>
        <hr />
      </div>
    </div>
    <div v-else-if="streamData && streamData.length === 0">
      <p>No streams available.</p>
    </div>
    <div v-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
 
  .recomended-streams {
    @include responsive;    
    display: flex;
    color: white;
    height: 22.25rem;
    padding: 0 1.25em;
    width: 16.25em;
    margin: 0.5em;
    padding: 0.5em;
    
    

      &__img {
        border-radius: 50%;
        margin-right: 0.5em;
      }
  }

</style>