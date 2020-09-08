<template>
   <div class="home">
      <h1>{{ title }}</h1>
   </div>
</template>

<script lang="ts">
import { wakeupBackend } from "@/lib/API";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {
   title = "Webformat CRM";

   async created() {
      await wakeupBackend();
   }
}
</script>
