<script setup lang="ts"></script>

<template>
  <NuxtLink :to="`/`" class="link">
    <div class="nav">
      <SvgIconMain class="nav__icon" />
      <h1 class="nav__title">MIDTUCH</h1>
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

  &__icon {
    width: 1.75rem;
    height: 1.7498rem;
    margin-right: 1rem;
  }
  &__title {
    font-family: Roobert;
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 0.975rem;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
  }
}
</style>
