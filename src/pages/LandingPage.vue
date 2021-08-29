<template>
  <q-page class="bg-image">
    <q-card class="my-card bg-transparent">
      <q-card-section>
        <img src="~assets/images/HRDO.jpg" style="height: 300px" />
      </q-card-section>
      <q-card class="q-pt-md q-pb-md q-pl-md q-pr-md text-center text-weight-medium text-subtitle1 absolute-center text-black bg-grey-3">
        {{ message }}
      </q-card>
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
