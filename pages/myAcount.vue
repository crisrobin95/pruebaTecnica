<script setup lang="ts">
import { useTwitchData } from '@/composables/useTwitch'
import { ref, computed } from 'vue'

const limit = ref(1)
const { userData, streamData, error, loading } = useTwitchData(limit)

const user = computed(() => {
  const userInfo = userData.value && userData.value.length > 0 ? userData.value[0] : null
  return userInfo
})

const cv = [
  {
    date: '2024-06-01',
    title: 'Receta de lasaña',
    description: 'Enseñando la clasica receta pero en un ambiente profesional.',
  },
  {
    date: '2024-05-28',
    title: 'Tarta de queso',
    description: 'Se enseña una nueva receta con trucos de los mas profesionales.',
  },
  {
    date: '2024-05-28',
    title: 'Sushi fácil para todos',
    description: 'Sushi moderno y facil.',
  },
]

const streams = [
  { title: 'Receta de lasaña', date: '2024-06-01', viewers: 320 },
  { title: 'Tarta de queso en directo', date: '2024-05-28', viewers: 210 },
  { title: 'Sushi fácil para todos', date: '2024-05-25', viewers: 180 },
]
</script>

<template>
  <section class="profile">
    <div v-if="loading">Cargando...</div>
    <div v-else-if="user" class="profile__header" v-for="user in userData">
      <img :src="user.profile_image_url" alt="Avatar" class="profile__avatar" />
      <div>
        <h2 class="profile__name">{{ user.display_name }}</h2>
        <p class="profile__username">@{{ user.login }}</p>
        <p class="profile__bio">
          {{
            user.description ||
            'Streamer de cocina en vivo. ¡Aprende recetas y trucos en directo!'
          }}
        </p>
        <div class="profile__stats">
          <span>{{ user.view_count }} visualizaciones</span>
          <span>{{ user.id }} ID</span>
        </div>
      </div>
    </div>
    <div class="profile__streams">
      <h3>Últimos directos</h3>
      <ul>
        <li v-for="stream in streams" :key="stream.title" class="profile__stream">
          <span class="profile__stream-title">{{ stream.title }}</span>
          <span class="profile__stream-date">{{ stream.date }}</span>
          <span class="profile__stream-viewers">{{ stream.viewers }} espectadores</span>
        </li>
      </ul>
    </div>
    <div class="profile__cv">
      <h3>CV de Recetar</h3>
      <ul>
        <li v-for="item in cv" :key="item.title" class="profile__cv-item">
          <span class="profile__cv-year">{{ item.date }}</span>
          <span class="profile__cv-title">{{ item.title }}</span>
          <span class="profile__cv-desc">{{ item.description }}</span>
        </li>
      </ul>
    </div>
    <div v-if="error" class="profile__error">{{ error.message }}</div>
  </section>
</template>

<style scoped lang="scss">
.profile {
  max-width: 37.5rem;
  margin: 2rem auto;
  background: #23232b;
  border-radius: 1rem;
  padding: 2rem;
  color: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);

  &__header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #9147ff;
  }
  &__name {
    font-size: 2rem;
    margin: 0;
  }
  &__username {
    color: #aaa;
    margin-bottom: 0.5rem;
  }
  &__bio {
    margin-bottom: 1rem;
  }
  &__stats {
    display: flex;
    gap: 1.5rem;
    font-size: 1rem;
    color: #bdbdbd;
  }
  &__streams {
    margin-top: 2rem;
    h3 {
      margin-bottom: 1rem;
      color: #9147ff;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  }
  &__stream {
    display: flex;
    justify-content: space-between;
    background: #18181b;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    align-items: center;
    font-size: 1rem;
  }
  &__stream-title {
    font-weight: bold;
    color: #fff;
  }
  &__stream-date {
    color: #aaa;
    font-size: 0.95em;
  }
  &__stream-viewers {
    color: #9147ff;
    font-weight: bold;
  }
  &__cv {
    margin-top: 2rem;
    h3 {
      margin-bottom: 1rem;
      color: #9147ff;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  }
  &__cv-item {
    display: flex;
    flex-direction: column;
    background: #18181b;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }
  &__cv-year {
    font-weight: bold;
    color: var(--c-white);
  }
  &__cv-title {
    color: #9147ff;
    font-weight: bold;
    margin-top: 0.2rem;
  }
  &__cv-desc {
    color: #bdbdbd;
    margin-top: 0.2rem;
    font-size: 0.95em;
  }
  &__error {
    color: #ff4d4f;
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
