<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-blue-grey-4">
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
        <q-card flat class="col bg-transparent">
          <div class="text-italic text-h4 text-bold text-center text-black">
            MSU HRDO Management Information System with Graphical Reporting
          </div>
        </q-card>

        <q-img src="~assets/ForLogo.gif" style="width: 100px"></q-img>
      </q-toolbar>
    </q-header>
<!--
    <q-drawer show-if-above v-model="drawer" side="left" bordered-content-class="bg-grey-3"
        show-if-above:width="200" :breakpoint="500"> 
          <q-list q-pt-md>
            <q-item clickable v-ripple to="/AdminHomePage/ManageAccount">
            </q-item>

            <q-item clickable v-ripple to="/AdminHomePage/ManageEmployee">
            </q-item>

            <q-item clickable v-ripple to="/AdminHomePage/GenerateReport">
            </q-item>
    </q-drawer>
-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
