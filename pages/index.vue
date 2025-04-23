<script setup></script>

<template>
  <div class="page">
    <section class="page__streams">
      <StreamsCardsTheTittle :title="'Live channels'" />
      <article class="page__cards">
        <StreamsCardsTheCards />
      </article>
      <div class="page__division">
        <StreamsCardsTheDivider />
      </div>
      <section class="page__category">
        <StreamsCardsTheTittle :title="'Category'" />
        <StreamsCardsTheCategory />
      </section>
      <StreamsCardsTheBoxe />
    </section>
    <StreamsCardsTheTittle :title="'Live channels'" />
    <article class="page__cards">
      <StreamsCardsTheCards />
    </article>
    <div class="page__division">
      <StreamsCardsTheDivider />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  gap: 1.25em;

  &__streams {
    width: fit-content;
    margin-top: 1em;
  }

  &__cards {
    display: flex;
    align-self: start;
    justify-content: space-between;
    width: fit-content;
    padding-right: 0.5em;
  }
  &__category {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (min-width: 1281px) {
  .page {
    width: 100%;
  }

  .page__cards {
    width: 100%;
  }
  .page__streams {
    width: 100%;
  }
  .page__category {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
