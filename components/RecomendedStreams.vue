<script setup lang = "ts" >

import { twitchAPIClient } from '~/utils/twitchApi';
import { ref, onMounted } from 'vue';
import type { User } from '~/types/typesPoryect.ts';
const userData = ref<User[] | null>(null);
const error = ref<Error | null>(null);
const limit = 3;

const isPanelVisible = ref(true);

const togglePanelVisibility = () => {
    isPanelVisible.value = !isPanelVisible.value;
};

onMounted(async () => {
  try {
    
    const streamsData = await twitchAPIClient.fetch<any>(`streams?first=${limit}`);
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

<aside class="recomended-streams" >
  <button class="ocult" @click="togglePanelVisibility" >
  <SvgIconOcult class="recomended-streams__ocult--button" > </SvgIconOcult>
  </button>
  <div v-if="isPanelVisible">
    <p>Recommended Channels</p>
    <section v-for="users in userData?.slice(0, limit)" :key="users.id" >
      <img
        :src="users.profile_image_url.replace('{width}x{height}', '1x1')"
        :alt="`Thumbnail of ${users.display_name}'s stream`"
        class="recomended-streams__img"
      />
      <p class="recomended-streams__name">{{ users.display_name }}</p>
      <p class="recomended-streams__viewrs">{{ users.view_count }}</p>
      <div v-if= "error" >
        <p class= "recomended-streams__error" > Error: {{ error.message }} </p>
      </div>
      </section>
  </div>
  </aside>
</template>

<style lang="scss" scoped >
  .ocult{
    display: flex;
    background-color: transparent;

  }
  .recomended-streams {
    @include responsive;
    display: flex;
    background-color: #121212;
    padding: 1em;
    width: 16.25em;
    border-radius: 0.5em;
    overflow: hidden;
    width: auto;

    &__img{
     
      width: 2.5em;
      height: 2.5em;
    }

    &__message{
     
    }


}
    
  

</style>