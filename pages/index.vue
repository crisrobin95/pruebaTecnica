<script setup></script>

<template>
  <div class="page">
    <section class="page__title">
      <StreamsCardsTheTittle :title="'Live channels'" />
    </section>
    <article class="page__cards">
      <StreamsCardsTheCards />
    </article>
    <section class="page__division">
      <StreamsCardsTheDivider />
    </section>
    <section class="page__title">
      <StreamsCardsTheTittle :title="'Category'" />
    </section>
    <section class="page__category">
      <StreamsCardsTheCategory />
    </section>
    <!-- <StreamsCardsTheBoxe /> -->
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 132.6875rem;
  gap: 1.25rem;

  &__title {
    display: flex;
    width: 100%;
    height: fit-content;
    padding-top: 1rem;
  }
  &____division {
    display: flex;
    width: 100%;
    height: 2.5rem;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.3125rem;
    width: fit-content;
    height: fit-content;
  }
  &__category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 76.25rem;
    height: 20.2638rem;
  }
}
</style>
