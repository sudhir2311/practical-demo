<template>

  <div>
    <vue-confirm-dialog></vue-confirm-dialog>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>

</style>
