<template>
  <q-page class="bg-image">
    <q-card class="my-card bg-transparent">
      <q-card-section>
        <img src="~assets/images/HRDO.jpg" style="height: 300px" />
      </q-card-section>
      <q-card
          class="
            q-pt-md
            text-center
            absolute-center
            bg-transparent
            text-black text-h6
          "
          style="q-float-right"
        >
          {{ message }}
        </q-card>
      <q-card-section>
        <div class="q-pa-md q-gutter-sm absolute-bottom-right">
          <q-btn
            color="blue-grey-2"
            text-color="black"
            label="login"
            to="LoginPage"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message:
        "It is focuses on analyzing employee’s information using graphical presentation that may possibly be useful to come up with decision making to develop strategies for the future situations. It is intended to help and to provide a management information system attached with an automated graphical reporting that can handle and measure large amount of data for the Human Resource Development Office in Mindanao State University Main Campus, Marawi City.",
    };
  },
};
</script>
