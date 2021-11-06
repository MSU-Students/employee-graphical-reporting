<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-blue-2">
        <q-img src="~assets/ForLogo.gif" style="width: 100px"></q-img>
        <div class="q-pl-md"/>
        <q-img src="~assets/HRDOLogo.png" style="width: 200px"></q-img>
        <q-card flat class="col bg-transparent">
          <div class=" text-h4 text-bold text-center text-black">
            MSU HRDO Management Information System with Graphical Reporting
          </div>
        </q-card>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { Vue, Options } from "vue-class-component";

@Options({
  components: { EssentialLink },
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksList;
  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }
}
</script>

<style>
.bg-image {
  background-image: url(~assets/images/ForLandingPage.jpeg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.login-box {
  border-bottom: 2px solid;
}
.card {
  position: relative;
  width: 100%;
  max-width: 380px;
  padding: 40px 20px 20px;
  background: rgba(255, 255, 255, 0.836);
  border-radius: 10px;
}
</style>
