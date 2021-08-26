<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.bg-image {
    background-image: url(../assets/images/ForLoginPage.jpg);
    background-blend-mode: overlay;
    background-position: center;
    background-size: 100%;
}
</style>