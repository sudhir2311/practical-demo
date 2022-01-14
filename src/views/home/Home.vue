<template>
 
  
    <blog></blog>
   
</template>

<script>
import { mapActions } from "vuex";
import Blog from '../../components/blog/blog.vue';
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {Blog },
  methods: {
   checkLoader() {
      this.addLoader(true);
      setTimeout(() => {
        this.addLoader(false);
      }, 1000);
    },
    ...mapActions("loader", ["addLoader"]),
  },
};
</script>
<style scoped>
body.modal-open .background-container {
  -webkit-filter: blur(4px);
  -moz-filter: blur(4px);
  -o-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px);
}
</style>
