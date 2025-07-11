<script setup lang="ts"></script>

<template>
  <NuxtLink :to="`/home`" class="link">
    <div class="nav">
      <NuxtImg class="nav__img" src="/logo.png" />
      <h1 class="nav__title">DIRECT CHEF'S</h1>
      <SvgIconPoints class="nav__points" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  display: flex;
  text-decoration: none;
  align-items: center;
}
.nav {
  display: flex;
  align-items: center;

  &__points {
    margin-left: 0.9em;
    width: 1.875rem;
    height: 1.875rem;
    cursor: pointer;
  }

  &__img {
    background-color: var(--c-static-white);
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }
  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 0.975rem;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
  }
  @include responsive {
    &__points {
      display: none;
    }
  }
}
</style>
