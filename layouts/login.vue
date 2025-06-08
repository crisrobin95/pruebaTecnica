<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
function handleLogin() {
  if (username.value === 'admin' && password.value === '1234') {
    error.value = ''

    router.push('/')
  } else {
    error.value = 'Usuario o contraseña incorrectos'
  }
}
</script>
<template>
  <section class="login">
    <div class="login__box">
      <h1 class="login__title">Iniciar Sesión</h1>
      <form class="login__form" @submit.prevent="handleLogin">
        <label class="login__label">
          Usuario
          <input
            class="login__input"
            v-model="username"
            type="text"
            required
            placeholder="Nombre de usuario"
          />
        </label>
        <label class="login__label">
          Contraseña
          <input
            class="login__input"
            v-model="password"
            type="password"
            required
            placeholder="Contraseña"
          />
        </label>
        <button class="login__button" type="submit">Entrar</button>
        <p v-if="error" class="login__error">{{ error }}</p>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #18181b;

  &__box {
    background: #23232b;
    padding: 2rem 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    min-width: 320px;
  }
  &__title {
    color: #fff;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
  }
  &__label {
    color: #ccc;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  &__input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background: #2d2d37;
    color: #fff;
    font-size: 1rem;
  }
  &__button {
    margin-top: 1rem;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    background: #9147ff;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #772ce8;
    }
  }
  &__error {
    color: #ff4d4f;
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
