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
  height: fit-content;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  gap: 0.1875rem;
  padding: 0.625rem 0.625rem 1rem 0.625rem;

  &__recomended {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    height: auto;
    padding: 0.2rem;
  }
  &__streams {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    gap: 1.25rem;
  }
  @include responsive {
    flex-direction: column;

    &__recomended {
      @include flex(row, center, center, nowrap, 0);
      width: 100%;
      order: -1;
      margin-bottom: 1rem;
    }
    &__streams {
      width: 100%;
    }
  }
}
</style>
