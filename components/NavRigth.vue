<script setup lang="ts"></script>
<template>
  <div class="notification">
    <button class="notification__icon">
      <SvgIconNotification class="notification__icon-notify" />
    </button>
    <button class="notification__log">Log In</button>
    <button class="notification__sing">Sign Up</button>
    <button class="notification__profile">
      <SvgIconProfile />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  display: flex;
  align-items: center;
  gap: 0.625rem;

  &__icon {
    width: fit-content;
    height: fit-content;
    padding-right: 0.3125rem;
    padding-left: 0.3125rem;
    background-color: transparent;
  }

  &__log {
    background-color: #2f2f35;
    color: white;
    @include font-medium;
    border-radius: 0.2em;
    width: auto;
    padding: 0.5em;
  }

  &__sing {
    background-color: #199afc;
    color: white;
    @include font-medium;
    border-radius: 0.2em;
    width: auto;
    padding: 0.5em;
  }
  &__profile {
    background-color: transparent;
  }
}
@media (max-width: 750px) {
  .notification {
    display: none;
  }
}
</style>
