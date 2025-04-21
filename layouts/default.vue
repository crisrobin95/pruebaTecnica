<script setup lang="ts"></script>

<template>
  <nav class="menu">
    <NavLeft />
    <NavCenter />
    <NavRigth />
  </nav>
  <section class="page">
    <aside class="page__recomended">
      <RecomendedStreams />
    </aside>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  background-color: var(--c-blackNavy);
  height: 2em;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em;
}
.page {
  display: flex;
  &__recomended {
    display: flex;
    width: fit-content;
    height: 24.94em;
    padding: 0.5em;
  }
}
</style>
