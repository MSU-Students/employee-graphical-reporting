<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated="q-px-lg q-py-md">
        <q-toolbar class="bg-blue-grey-4">
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
      
  <div class="q-gutter-sm absolute">
        <q-btn
        color="blue-grey-2"
        text-color="black"
        label="login"
        to="LoginPage"
      />
      </div>
    </q-layout>
  </div>
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
  background-image: url(~assets/images/msu.jpg);
  background-blend-mode: Chrome 35;
  background-size: cover;
  background-position: center;
}
</style>