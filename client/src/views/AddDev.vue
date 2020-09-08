<template>
   <div class="addDev">
      <h1>{{ title }}</h1>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AddDev extends Vue {
   title = "Add Developer";
}
</script>
