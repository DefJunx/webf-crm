<template>
   <div class="showOverdue">
      <h1>{{ title }}</h1>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ShowOverdue extends Vue {
   title = "Show Overdue";
}
</script>
