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
  height: 50px;
  justify-content: space-between;
  padding-top: 5px;
  padding-right: 20px;
  padding-bottom: 5px;
  padding-left: 20px;
}

.main {
  display: flex;
  width: 100%;
  height: 2197px;
  gap: 10px;
  &__recomended {
    display: flex;
    height: 356px;
    padding: 0.2rem;
  }
  &__streams {
    display: flex;
    width: 100%;
    height: 2123px;
    gap: 20px;
  }
}
</style>
