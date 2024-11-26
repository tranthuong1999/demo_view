<template>
  <div>
    <router-view></router-view>
    <router-view name="courseDesc"></router-view>
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
