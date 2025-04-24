<script setup lang="ts"></script>

<template>
  <header class="menu">
    <NavLeft />
    <NavCenter />
    <NavRigth />
  </header>
  <main class="main">
    <aside class="main__recomended">
      <RecomendedStreams />
    </aside>
    <section class="main__streams">
      <slot></slot>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  background-color: var(--c-blackNavy);
  width: 100%;
  height: 3.125rem;
  justify-content: space-between;
  padding-top: 0.3125rem;
  padding-right: 1.25rem;
  padding-bottom: 0.3125rem;
  padding-left: 1.25rem;
}

.main {
  display: flex;
  width: 100%;
  height: 137.3125rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  gap: 0.625rem;

  &__recomended {
    display: flex;
    height: 22.25rem;
    padding: 0.2rem;
  }
  &__streams {
    display: flex;
    width: 100%;
    height: 132.6875rem;
    gap: 1.25rem;
  }
}
</style>
