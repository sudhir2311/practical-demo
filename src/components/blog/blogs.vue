<template>
     <div class="col-md-3 mb-3">
        <div class="card">
          <div class="card-body">
            <p class="card-title">{{ blog.name }}</p>
          </div>
          <div class="card-footer">
            <small class="font10 pull-right"
              ><i class="fa fa-clock"></i> {{ blog.createdAt }}</small
            >
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        props: ["blog"],
    }
</script>
