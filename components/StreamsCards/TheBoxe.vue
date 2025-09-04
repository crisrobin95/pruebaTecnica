<script setup lang="ts"></script>
<template>
  <article class="type">
    <span class="type__game">España <SvgIconGame /></span>
    <span class="type__micro">Italia <SvgIconMicro /></span>
    <span class="type__music">Francia <SvgIconMusic /></span>
    <span class="type__creative">Japón <SvgIconCreative /></span>
    <span class="type__esports">Ecuador <SvgIconPrice /></span>
  </article>
</template>

<style lang="scss" scoped>
.type {
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0.625rem;
  gap: 0.625rem;

  &__game,
  &__icon,
  &__micro,
  &__music,
  &__creative,
  &__esports {
    @include main.styleBoxes;
    border: 0.125rem solid transparent;
    &:hover {
      border: 0.125rem solid rgb(52, 249, 26);
    }
  }

  @include main.responsive {
    @include main.flex(column, center, center, wrap, 1rem);
  }
}
</style>
