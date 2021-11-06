<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-blue-2">

        <q-btn dense round icon="menu" @click="left = !left" color="black"/>

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

    <q-drawer v-model="left" show-if-above class="bg-blue-2">
      <q-scroll-area class="fit">
        <q-list padding>

          <q-item clickable v-ripple to="/ManageEmployee" class="q-pa-md">
            <q-item-section avatar>
              <q-icon name="people" color="black"/>
            </q-item-section>
            <q-item-section> Manage Employee </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/GenerateReportAdmin" class="q-pa-md">
            <q-item-section avatar>
              <q-icon name="analytics" color="black"/>
            </q-item-section>
            <q-item-section> Generate Report </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/ManageAccount" class="q-pa-md">
            <q-item-section avatar>
              <q-icon name="how_to_reg" color="black"/>
            </q-item-section>
            <q-item-section color="black"> Manage Account </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/" class="q-pa-md">
            <q-item-section avatar>
              <q-icon name="exit_to_app" />
            </q-item-section>

            <q-item-section> Logout </q-item-section>

          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

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

<style>
.bg-image {
  background-image: url(~assets/images/admin.jpg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}
</style>
