<template>
<q-page padding class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-primary">
        <q-card-section class="text-black">
          <div class="text-h6 text-white">
            <q-icon name="analytics" color="black" size="50px" />
            Generate Report
          </div>
        </q-card-section>
      </q-card>
      <div class="q-pt-xl" />
      <q-select
        v-model="axis"
        filled
        :options="options"
        label="X-axis"
        style="width: 300px"
        color="black"
        />
        <div class="q-pt-xl" />
      <q-select
        v-model="axis"
        filled
        :choices="choices"
        label="Y-axis"
        style="width: 300px"
        color="black"
        />
        <div class="q-pt-xl" />
      <q-select
        v-model="axis"
        filled
        :options1="options2"
        label="Types of Reports"
        style="width: 300px"
        color="black"
        />
        </div>
</q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class GenerateReportAmdmin extends Vue {
  axis = "";
  options = ["Department", "People"];
  choices = ["Age", "Gender"];
  options2 = ["Bar Graph", "Line Graph", "Pie Graph"];
}
</script>

<style>

</style>
