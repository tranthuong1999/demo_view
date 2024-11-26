<template>
  <div>
    <router-view></router-view>
    <router-view name="slogan"></router-view>
    <router-view name="courseDesc"></router-view>
    <router-view name="counter"></router-view>
    <router-view name="mentor"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
