<script setup lang="ts"></script>

<template>
  <div class="page">
    <section class="page__title">
      <StreamsCardsTheTittle
        :title="'Canales en directo'"
        :description="'cocina en directo'"
      />
    </section>
    <article class="page__cards">
      <StreamsCardsTheCards />
    </article>
    <section class="page__division">
      <StreamsCardsTheDivider />
    </section>
    <section class="page__title">
      <StreamsCardsTheTittle :title="'Categoria'" :description="'cocina en directo'" />
    </section>
    <section class="page__category">
      <StreamsCardsTheCategory />
    </section>
    <section class="page__box-types">
      <StreamsCardsTheBoxe />
    </section>
    <section class="page__title">
      <StreamsCardsTheTittle
        :title="'Canales en Directo'"
        :description="'cocina en directo'"
      />
    </section>
    <article class="page__cards">
      <StreamsCardsTheCards />
    </article>
    <section class="page__division">
      <StreamsCardsTheDivider />
    </section>
    <section class="page__title">
      <StreamsCardsTheTittle
        :title="'Canales en Directo'"
        :description="'cocina en directo'"
      />
    </section>
    <article class="page__cards">
      <StreamsCardsTheCards />
    </article>
    <section class="page__division">
      <StreamsCardsTheDivider />
    </section>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 120rem;
  height: 100%;
  gap: 1.25rem;

  &__title {
    display: flex;
    width: 100%;
    max-width: 50rem;
    height: fit-content;
    padding-top: 1rem;
  }
  &__division {
    display: flex;
    width: 100%;
    height: 2.5rem;
  }
  &__cards {
    @include flex(row, flex-start, flex-start, wrap, 1rem);
  }

  &__category {
    display: flex;
    gap: 1rem;
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
  @include responsive {
    @include flex(column, center, center, wrap, 1rem);
    &__box-types {
      @include flex(column, center, center, wrap, 0);
    }
  }
}
</style>
