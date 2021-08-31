<template>
  <div>
    <q-card class="my-card">
      <q-responsive :ratio="16 / 9" class="col" style="max-height: 350px">
        <q-card-section class="column">
          <img class="col dimmed" src="~assets/images/msu.jpg" />
        </q-card-section>
      </q-responsive>
      <q-card
        class="
          q-pt-md q-pb-md q-pl-md q-pr-md
          text-center text-subtitle2
          absolute-center
          text-black text-italic
          bg-grey-4
        "
      >
        {{ message }}
      </q-card>
    </q-card>

    <q-page>
      <q-card-section class="absolute-center">
        <div
          class="text-center text-bold text-h4 q-pt-md"
        >
          Sample Dashboard!
          <img src="~assets/images/trylangg.jpg" width="720" height="440" />
        </div>
      </q-card-section>

      <div class="q-gutter-sm q-pt-md absolute-right">
        <q-btn
          color="blue-grey-4"
          style="border: 1px solid"
          text-color="black"
          label="login"
          to="LoginPage"
        />
      </div>
    </q-page>
  </div>
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
