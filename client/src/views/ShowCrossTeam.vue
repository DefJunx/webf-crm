<template>
   <div class="showCrossTeam">
      <h1>{{ title }}</h1>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ShowCrossTeam extends Vue {
   title = "Show Cross Team";
}
</script>
