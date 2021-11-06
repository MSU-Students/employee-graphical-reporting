<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-blue-2">

        <q-btn dense flat round icon="menu" @click="left = !left" color="black"/>

        <q-card flat class="col bg-transparent">
          <div class="text-italic text-h4 text-bold text-center text-black">
            MSU HRDO Management Information System with Graphical Reporting
          </div>
        </q-card>

        <q-img src="~assets/HRDOLogo.png" style="width: 200px"></q-img>
        <div class="q-pr-md"/>
        <q-img src="~assets/ForLogo.gif" style="width: 100px"></q-img>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="bg-image">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomeAdminLayout extends Vue {
  left = false;
}
</script>
