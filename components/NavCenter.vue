<script setup lang="ts"></script>
<template>
  <div class="search">
    <input type="text" class="search__text" placeholder="Buscar canal o juego" />
    <button class="search__button">
      <SvgIconSearch class="search__button--icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;

  &__text {
    border: solid 0.2em #67676b;
    padding: 0.5em;
    background-color: var(--c-blackNavy);
    margin-left: 1em;
  }

  &__button {
    background-color: #2f2f35;
    border-radius: 0.2em;
    cursor: pointer;
  }
}
</style>
