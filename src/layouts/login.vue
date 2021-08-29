<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated="q-px-lg q-py-md">
      <q-toolbar class="bg-grey-4">
        <q-card flat class="col bg-transparent">
          <div class="text-italic text-h4 text-bold text-center text-black">
            MSU HRDO Management Information System with Graphical Reporting
          </div>
        </q-card>

        <q-img src="~assets/ForLogo.gif" style="width: 100px"></q-img>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.bg-image {
  background-image: url(~assets/images/tryagain.jpg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}
.login-box {
  border-bottom: 2px solid;
}
</style>
