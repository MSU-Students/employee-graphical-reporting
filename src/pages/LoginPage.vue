<template>
  <q-page class="bg-image">
    <div class="absolute-center">
      <q-card class="text-center bg-transparent">
        <div class="login-box text-center text-h5 text-white q-pt-md">
          Login Page
        </div>

        <div class="q-pt-md">
          <div class="q-pa-md">
            <div class="q-gutter-md row items-start">
              <q-input
                v-model="Username"
                filled
                :type="Username"
                label="Username"
                style="width: 300px"
              />
            </div>

            <q-input
              class="q-pt-md"
              v-model="Password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Password"
              style="width: 300px"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
        </div>

        <div class="q-pa-md" color="black">
          <div class="q-gutter-sm">
            <q-radio v-model="shape" val="Admin" label="Admin" />
            <q-radio v-model="shape" val="Director" label="Director" />
          </div>
          <div class="q-px-sm">
            Your selection is: <strong>{{ shape }}</strong>
          </div>
        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-btn
            class="btn"
            label="login"
            style="width: 250px"
            to="HomePageAdmin"
          />
        </div>
      </q-card>

      <div class="q-pa-md q-gutter-sm">
        <q-btn color="blue-grey-3" text-color="black" label="cancel" to="/" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      Username: "",
      Password: "",
      isPwd: true,
      shape: "",
    };
  },
};
</script>
