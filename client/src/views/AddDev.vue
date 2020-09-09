<template>
   <div class="addDev">
      <h1>{{ title }}</h1>
      <form @submit.prevent="createDev">
         <div class="formControl">
            <label for="name">Name:</label>
            <input placeholder="Enter Name" type="text" v-model="formValues.name" name="name" id="name" required />
         </div>
         <div class="formControl">
            <label for="team">Team:</label>
            <select v-model="formValues.team" name="team" id="team" required>
               <option v-for="(team, idx) in teams" :key="idx" :value="team.id">{{ team.name }}</option>
            </select>
         </div>
         <div class="button-group">
            <button type="reset">Clear form</button>
            <button type="submit">Create Dev!</button>
         </div>
      </form>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { fetchTeams, saveDeveloper } from "@/lib/API";

@Component
export default class AddDev extends Vue {
   title = "Add Developer";
   teams = [];
   formValues = {
      team: "",
      name: ""
   };

   async created() {
      this.teams = await fetchTeams();
   }

   async createDev() {
      const { team, name } = this.formValues;
      console.log("submit");
      await saveDeveloper({ team, name });
   }
}
</script>

<style lang="scss" scoped>
.addDev {
   text-align: left;
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
}
.formControl {
   margin: 10px 0;
}
button {
   margin-right: 5px;
}
label {
   margin-bottom: 5px;
}
input,
label,
select {
   display: block;
}
.button-group {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
</style>
