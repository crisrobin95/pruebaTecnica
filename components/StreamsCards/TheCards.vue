<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { twitchAPIClient } from '~/utils/twitchApi';
const userData = ref<any[] | null>(null);
const streamData = ref<any[] | null>(null);
const error = ref<Error | null>(null);
const limit = 3;


onMounted(async () => {
  try {
    
    const streamsData = await twitchAPIClient.fetch<any>(`streams?first=${limit}`);
    const streams = streamsData.data;
    streamData.value = streams;
    const logins = streams.map((stream: any) => stream.user_login);
    const query = logins.map((login: string) => `login=${login}`).join('&');
    const datos = await twitchAPIClient.fetch<any>(`users?${query}`);
    userData.value = datos.data;

  } catch (err: any) {
    error.value = err;
  }
});
</script>

<template>

  <section v-for="(users, index) in userData?.slice(0, limit)" :key="users.id" class="users">
    <img v-if="streamData && streamData[index]" 
      :src="streamData[index].thumbnail_url.replace('{width}x{height}', '125x125')"
      :alt="`Stream thumbnail of ${users.display_name}`" class="users__stream-thumbnail"/>
    <img
      :src="users.profile_image_url.replace('{width}x{height}', '125x125')"
      :alt="`Thumbnail of ${users.display_name}'s stream`"
      class="users__img"
    />
    <p class="users__name">{{ users.display_name }}</p>
    <button class="users__tags">{{ users.tags }}</button>
    
  </section>
  
</template>

<style lang="scss" scoped>
  .users{
    @include responsive;
    margin-left: 1em;
    display: flex;
    
   

    &__img{
      width: 2.68em;
      height: 2.68em;
      border-radius: 62499.93em;
      margin-right: 1em;
    }
    
    &__button{
      background-color: grey;
      border-radius: 0.5em;
      width: auto;
      height: 1.5em;
    }
  }
</style>