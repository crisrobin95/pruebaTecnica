<script setup lang="ts"></script>
<template>
  <article class="type">
    <span class="type__game">Games <SvgIconGame /></span>
    <span class="type__micro">IRL <SvgIconMicro /></span>
    <span class="type__music">Music & Djs <SvgIconMusic /></span>
    <span class="type__creative">Creative <SvgIconCreative /></span>
    <span class="type__esports">Esport <SvgIconPrice /></span>
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

  &__game {
    @include styleBoxes;
    border: 0.125rem solid transparent;

    &:hover {
      background-color: var(--c-red);
    }
  }
  &__icon {
    @include imgBoxes;
    border: 0.125rem solid transparent;

    &:hover {
      background-color: var(--c-red);
    }
  }

  &__micro {
    @include styleBoxes;
    border: 0.125rem solid transparent;

    &:hover {
      background-color: var(--c-red);
    }
  }
  &__music {
    @include styleBoxes;
    border: 0.125rem solid transparent;

    &:hover {
      background-color: var(--c-red);
    }
  }

  &__creative {
    @include styleBoxes;
    border: 0.125rem solid transparent;

    &:hover {
      background-color: var(--c-red);
    }
  }
  &__esports {
    @include styleBoxes;
    border: 0.125rem solid transparent;

    &:hover {
      background-color: var(--c-red);
    }
  }
}
</style>
