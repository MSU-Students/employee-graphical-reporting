<template>
  <q-page>
    <div class="q-pt-xl flex flex-center">
      <q-avatar size="200px" class="q-mb-sm">
        <img src="~assets/images/director2.jpg" />
      </q-avatar>
    </div>
    <div
      class="flex flex-center q-pa-sm text-weight-bold text-body1 text-white"
    >
      DIRECTOR
    </div>

    <div class="q-pa-md flex flex-center">
      <q-table
        :rows="rows"
        :columns="columns"
        grid
        hide-bottom
        :rows-per-page-options="[0]"
      >
        <template v-slot:item="props">
          <div
            class="
              q-pa-xs
              col-lg-12 col-sm-6 col-md-4 col-lg-3
              grid-style-transition
            "
            :style="props.selected ? 'transform: scale(0.95);' : ''"
          >
            <q-card dark bordered>
              <div class="q-pa-md">
                <q-list>
                  <q-item
                    v-for="col in props.cols.filter(
                      (col) => col.name !== 'desc'
                    )"
                    :key="col.name"
                  >
                    <q-item-section>
                      <q-item-label>
                        <div class="q-pl-md text-h7">
                          {{ col.label }}
                        </div>
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label caption>
                        <div class="q-pr-md text-bold text-white text-italic">
                          {{ col.value }}
                        </div>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      filter: ref(""),
      selected: ref([]),
      columns,
      rows,
    };
  },
};

const columns = [
  { name: "Name", label: "Name:", field: "Name" },
  {
    name: "Department",
    align: "center",
    label: "Department:",
    field: "Department",
    sortable: true,
  },
  { name: "Email", label: "E-mail:", field: "Email", sortable: true },
  { name: "Address", label: "Address:", field: "Address" },
  { name: "Mobile_Number", label: "Mobile Number:", field: "Mobile_Number" },
  { name: "Designation", label: "Designation:", field: "Designation" },
];

const rows = [
  {
    Name: "Riza B. Maruhom",
    Department: "HRDO",
    Email: "rizamaruhom@gmail.com",
    Address: "5th Street",
    Mobile_Number: "09300938968",
    Designation: "Director",
  },
];
</script>
