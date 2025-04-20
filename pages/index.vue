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
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 76.25em;
  height: 132.6em;
  gap: 1.25em;

  &__streams {
    width: fit-content;
  }

  &__cards {
    display: flex;
    align-self: start;
    justify-content: space-between;
    width: fit-content;
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
