<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold flex flex-center">
      <q-icon name="perm_identity" />
      View Employee
    </div>

    <br />

      <q-table
        title="Employee Lists:"
        :rows="employee"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[0]"
        :filter="filter"
      >
        <template v-slot:top-right>
          <div class="q-pa-md q-gutter-sm row">
            <q-input
              color="brown"
              outlined
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </template>

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
            </q-th>
          </q-tr>
        </template>
      </q-table>
  </div>
</template>

<script lang="ts">
import { Info } from "src/store/employee/state";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState("employee", ["employee", "activeEmployee"]),
  },
})
export default class ViewEmployeePage extends Vue {
  employee!: Info[];

  filter = "";
  selected = [];
  columns = [
    {
      name: "id",
      required: true,
      label: "ID",
      align: "left",
      field: "id",
    },
    {
      name: "name",
      required: true,
      label: "Name",
      align: "left",
      field: (row: Info) => row.fName + row.mName + row.lName,
      format: (val: string) => `${val}`,
    },
    {
      name: "membership",
      align: "left",
      label: "Membership",
      field: "membership",
    },
    { name: "address", align: "left", label: "Address", field: "address" },
    { name: "age", align: "left", label: "Age", field: "age" },
    {
      name: "appointmentDate",
      align: "left",
      label: "Appointment Date",
      field: "appointmentDate",
    },
    {
      name: "citizenship",
      align: "left",
      label: "Citizenship",
      field: "citizenship",
    },
    { name: "religion", align: "left", label: "Religion", field: "religion" },
    { name: "status", align: "left", label: "Status", field: "status" },
    { name: "position", align: "left", label: "Position", field: "position" },
    { name: "salary", align: "left", label: "Salary", field: "salary" },
    { name: "gender", align: "left", label: "Gender", field: "gender" },
    {
      name: "workStatus",
      align: "left",
      label: "Work Status",
      field: "workStatus",
    },
    {
      name: "department",
      align: "left",
      label: "Department",
      field: "department",
    },
  ];
}
</script>
