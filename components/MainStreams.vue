<script setup lang="ts"></script>

<template>
  <section class="main-cards">
    <aside>
      <StreamsCardsTheTittle class="cards__tittle" />
    </aside>
    <section class="cards">
      <StreamsCardsTheCards class="cards__users" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: 100%;
}
</style>
