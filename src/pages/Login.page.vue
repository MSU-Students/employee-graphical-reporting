<template>
  <q-page class="bg-image">
    <div class="absolute-center">
      <q-card class="card text-center">
        <div class="login-box text-center text-h4 text-bold q-pt-md">
          Login Page
        </div>

        <div class="q-pt-md">
          <div class="q-pa-md">
            <div>
              <q-input
                v-model="Username"
                filled
                :type="Username"
                label="Username"
                style="width: 300px"
                color="black"
              />
            </div>

            <q-input
              class="q-pt-md"
              v-model="Password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Password"
              color="black"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                  color="black"
                />
              </template>
            </q-input>
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-sm">
            <q-radio v-model="shape" val="Admin" label="Admin" color="black"/>
            <q-radio v-model="shape" val="Director" label="Director" color="black"/>
          </div>
          <div class="q-px-sm">
            Your selection is: <strong>{{ shape }}</strong>
          </div>
        </div>

        <div class="q-pa-md">
          <q-btn
            class="center text-bold"
            label="login"
            style="width: 250px"
            to="HomeAdmin"
          />
        </div>
      </q-card>

    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LoginPage extends Vue {
  Username = "";
  Password = "";
  isPwd = true;
  shape = "";
}
</script>
