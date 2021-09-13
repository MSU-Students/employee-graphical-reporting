<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-blue-grey-4">
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-card flat class="col bg-transparent">
          <div class="text-italic text-h4 text-bold text-center text-black">
            MSU HRDO Management Information System with Graphical Reporting
          </div>
        </q-card>

        <q-img src="~assets/ForLogo.gif" style="width: 100px"></q-img>
      </q-toolbar>
    </q-header>

<q-drawer v-model="left"
        show-if-above
        bordered
>
<q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple to="ManageAccount">
              <q-item-section avatar>
                <q-icon name="how_to_reg" />
              </q-item-section>
              <q-item-section> Manage Account </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="ManageEmployee">
              <q-item-section avatar>
                <q-icon name="perm_identity" />
              </q-item-section>
              <q-item-section> Manage Employee </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="GenerateReport">
              <q-item-section avatar>
                <q-icon name="" />
              </q-item-section>
              <q-item-section> Generate Report </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple to="/LoginPage">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section> Logout </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
    };
  },
};
</script>
