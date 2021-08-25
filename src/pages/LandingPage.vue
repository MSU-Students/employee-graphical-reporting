<template>
  <q-page>

    <div class="col">
      <q-card>
        <img
          class="col text-center q-pt-md"
          src="~assets/images/HRDO.jpg"
          style="height: 500px"
        />
      </q-card>
    </div>
    </q-page>

    <div class="text-center text-bold text-h3 text-italic q-pt-xxs-xxs">
      MSU HRDO Management Information System with Graphical Reporting
    </div>

    <div class="col q-pt-xl">
      <q-card class="bg-grey text-center" flat>
        <q-card-section>
          {{ message }}
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md q-gutter-sm">
    <q-btn color="grey-5" text-color="black" label="login" to="LoginPage"/>
    </div>

</template>

<script>
export default {
  data() {
    return {
      message:
        "Is a system that focuses on analyzing employee’s information using graphical presentation that may possibly be useful to come up with decision making to develop strategies for the future situations. It is intended to help and to provide a management information system attached with graphical reporting for the Human Resource Development Office in Mindanao State University Main Campus, Marawi City with the help of an automated graphical reporting that can handle and measure large amount of data to provide any graphical presentation.",
    };
  },
};
</script>
