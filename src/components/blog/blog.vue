<template>
  <div class="p-xl-5 p-4 rounded">
    <div class="row">
      <div class="col-md-12  mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="pull-left">Add Blog</h5>
            <h6>
              <span class="badge badge-secondary pull-right"
                >Added Blog : {{ getBlogs.length }}</span
              >
            </h6>
          </div>
          <div class="card-body">
            <ValidationObserver ref="observer">
              <div class="row">
                <div class="col-md-12">
                  <label for="" class="label-control"
                    >Your Blog <span class="text-danger">*</span>
                  </label>
                  <ValidationProvider
                    name="Blog"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                  >
                    <div class="input-group">
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Enter Blog"
                        v-model="blog.name"
                      >
                      </textarea>

                    </div>
                    <small class="error text-left">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
              </div>
            </ValidationObserver>
          </div>
          <div class="card-footer">
          
            <button
              class="btn btn-primary  pull-right"
              type="button"
              id="button-addon2"
              @click="saveBlog"
            >
              <i class="fa fa-plus"></i> Add Blog
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="getBlogs.length <= 0">
      <div class="col-md-12 text-center mt-5">
        <h3 class="card-title">Blogs not available</h3>
      </div>
    </div>
    <div v-else class="row">
      <blogs v-for="(blog, index) in getBlogs" :key="index" :blog="blog"></blogs>
    </div>
  </div>
</template>

<script>
import { required } from "vee-validate/dist/rules";
import { extend, setInteractionMode } from "vee-validate";
import blogs from "../blog/blogs.vue";

import { mapActions, mapGetters } from "vuex";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
export default {
  components:{
blogs
  },
  data() {
    return {
      blog: {
        name: "",
      },
    };
  },
  computed: {
    ...mapGetters("blog", ["getBlogs"]),
  },

  methods: {
    ...mapActions("blog", ["addBlog"]),
    saveBlog() {
      this.$refs.observer.validate().then((valid) => {
        if (valid) {
          this.addBlog({ name: this.blog.name });
          this.reset();
        }
      });
    },
    reset() {
      this.blog.name = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped></style>
