<template>
<q-card class="my card bg-blue-grey-14">
    <q-card-section>
      <img src="~assets/images/HRDO.jpg" style="height: 300px" />
      <q-card-section class="q-pt-md text-center absolute-center bg-blue-grey-2">
      {{ message }}
    </q-card-section>
    </q-card-section>

      <div class="q-pa-md q-gutter-sm absolute-bottom-right">
    <q-btn
      color="blue-grey-2"
      text-color="black"
      label="login"
      to="LoginPage"
    />
  </div>
</q-card>

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
