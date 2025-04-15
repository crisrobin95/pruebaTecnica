<script setup></script>

<template>
  <div class="page">
    <aside class="page__box">
      <RecomendedStreams />
    </aside>
    <section class="page__streams">
      <StreamsCardsTheTittle :title="'Live channels'" />
      <article class="page__cards">
        <StreamsCardsTheCards />
      </article>
      <StreamsCardsTheDivider />
      <StreamsCardsTheTittle :title="'Category'" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  padding: 0.5em;
  width: 10em;
  height: 137.31em;
  gap: 0.62em;

  &__cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 23.8em;
    height: 19.9em;
    gap: 0.625em;
  }
}
@media (min-width: 1281px) {
  .page {
    width: 100%;
  }

  .page__cards {
    width: 100%;
  }
}
</style>
