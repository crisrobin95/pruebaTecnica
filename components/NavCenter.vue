<script setup lang="ts"></script>
<template>
  <div class="search-bar">
    <input type="text" class="search-bar__text" placeholder="Buscar canal o juego" />
    <button class="search-bar__button">
      <SvgIconSearch class="search-bar__button-icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;

  &__text {
    display: flex;
    border: solid 0.2em #67676b;
    background-color: var(--c-blackNavy);
    width: 100%;
    height: 2.5rem;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    padding: 1rem;
  }

  &__button {
    display: flex;
    background-color: #2f2f35;
    width: 2.125rem;
    height: 2.5rem;
    padding-right: 0.3125rem;
    padding-left: 0.3125rem;
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    align-items: center;
  }
  &__button-icon {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
  }
  @include main.responsive {
    .search-bar {
      display: none;
    }
  }
}
</style>
