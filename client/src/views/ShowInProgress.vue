<template>
   <div class="showInProgress">
      <h1>{{ title }}</h1>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ShowInProgress extends Vue {
   title = "Show in Progress";
}
</script>
