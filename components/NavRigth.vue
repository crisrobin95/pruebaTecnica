<template>
  <div class="notification">
    <button class="notification__icon">
      <SvgIconNotification />
    </button>
    <button class="notification__log">Log In</button>
    <button class="notification__sing">Sign Up</button>
    <button class="notification__profile">
      <SvgIconProfile />
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.notification {
  display: flex;

  &__icon {
    margin-left: 0.5em;
    background-color: transparent;
    cursor: pointer;
  }

  &__log {
    margin-left: 0.5em;
    background-color: #2f2f35;
    color: white;
    border-radius: 0.2em;
    width: auto;
    padding: 0.5em;
    cursor: pointer;
  }

  &__sing {
    margin-left: 0.5em;
    background-color: #199afc;
    color: white;
    border-radius: 0.2em;
    width: auto;
    padding: 0.5em;
    cursor: pointer;
  }
  &__profile {
    margin-left: 0.5em;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
