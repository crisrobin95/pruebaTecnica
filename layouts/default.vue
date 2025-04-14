<script setup lang="ts"></script>

<template>
  <nav class="menu">
    <NavLeft />
    <NavCenter />
    <NavRigth />
  </nav>
  <div class="page">
    <aside class="page__box">
      <RecomendedStreams />
    </aside>
    <section class="page__streams">
      <StreamsCardsTheTittle />
      <article class="page__cards">
        <StreamsCardsTheCards />
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  background-color: var(--c-blackNavy);
  height: 2em;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em;
}

.page {
  display: flex;
  padding: 0.5em;
  width: 95.62em;
  height: 137.31em;
  gap: 0.62em;

  &__cards {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 19.9em;
    gap: 0.5em;
  }
}
</style>
