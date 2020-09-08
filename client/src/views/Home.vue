<template>
   <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>{{ title }}</h1>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {
   title!: string;
}
</script>
