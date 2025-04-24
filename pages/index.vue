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
    <!-- <section class="page__category">
      <StreamsCardsTheTittle :title="'Category'" />
      <StreamsCardsTheCategory />
    </section>
    <StreamsCardsTheBoxe /> -->
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2123px;
  gap: 20px;

  &__title {
    display: flex;
    width: 100%;
    height: fit-content;
    padding-top: 1em;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 37px;
    width: fit-content;
    height: fit-content;
  }
  &__category {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
