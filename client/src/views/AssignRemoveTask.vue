<template>
   <div class="assignRemoveTask">
      <h1>{{ title }}</h1>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AssignRemoveTask extends Vue {
   title = "Assign / Remove Task";
}
</script>
