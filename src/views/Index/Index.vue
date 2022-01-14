<template>
  <div>
    <Header></Header>
    <transition
      name="fade"
      mode="out-in"
      class="animate__animated animate__bounce"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
  
  },
  methods: {},
};
</script>
