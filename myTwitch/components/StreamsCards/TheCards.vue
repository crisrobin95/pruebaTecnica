<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { twitchAPIClient } from '~/utils/twitchApi';
const userData = ref<any[] | null>(null);
const error = ref<Error | null>(null);
const limit = 3;


onMounted(async () => {
  try {
    
    const streamsData = await twitchAPIClient.fetch<any>('streams');
    const streams = streamsData.data;
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
    <section v-for="users in userData?.slice(0, limit)" :key="users.id" class="users">
        <img :src="users.profile_image_url.replace('{width}x{height}', '125x125')" 
        :alt="`Thumbnail of ${users.display_name}'s stream`" class="users__img">
        <p class="users__name">{{ users.display_name }}</p>

    </section>
</template>

<style lang="scss" scoped>
  .users{
    @include responsive;
    margin-left: 1em;
  }
</style>