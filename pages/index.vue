<script setup lang="ts"></script>

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
    <section class="page__box-types">
      <StreamsCardsTheBoxe />
    </section>
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
      <StreamsCardsTheTittle :title="'Live channels'" />
    </section>
    <article class="page__cards">
      <StreamsCardsTheCards />
    </article>
    <section class="page__division">
      <StreamsCardsTheDivider />
    </section>
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
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    gap: 0.625rem;
  }
  &__category {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
  }

  &__box-types {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    align-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 90rem) {
    .page {
      &__cards {
        display: flex;
        justify-content: start;
      }
    }
  }
}
</style>
