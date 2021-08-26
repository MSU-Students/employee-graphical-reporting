<template>
  <q-page>
    <div class="col">
      <q-card>
        <img
          class="absolute-center q-pt-md abso"
          src="~assets/images/ForLandingPage.jpeg"
          style="height: 500px"
        />
      </q-card>
    </div>
</q-page>
    <div class="text-center text-bold text-h3 text-italic">
      MSU HRDO Management Information System with Graphical Reporting
    </div>

    <div class="col q-pt-xl">
      <q-card class="text-center bg-blue-grey-4" flat>
        <q-card-section>
          {{ message }}
        </q-card-section>
      </q-card>
    </div>

    <q-page>
      <div class="col">
        <q-card>
          <img
            class="col flex flex-center q-pt-md"
            src="~assets/images/try.png"
            style="height: 500px"
          />
        </q-card>
      </div>
    </q-page>

    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="blue-grey-4"
        text-color="black"
        label="login"
        to="LoginPage"
      />
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      message:
        "It is focuses on analyzing employee’s information using graphical presentation that may possibly be useful to come up with decision making to develop strategies for the future situations. It is intended to help and to provide a management information system attached with graphical reporting for the Human Resource Development Office in Mindanao State University Main Campus, Marawi City with the help of an automated graphical reporting that can handle and measure large amount of data to provide any graphical presentation.",
    };
  },
};
</script>
