<template>
  <q-page>
    <div class="q-pt-xl flex flex-center q-pb-xl">
      <div class="flex flex-center q-pt-md text-weight-bold text-h3">
        <q-icon name="perm_identity" />
        View Employee
      </div>
    </div>

    <div class="q-pa-md">
      <q-table
        class="flex flex-center"
        title="Employee Lists:"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[0]"
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
              <div class="q-pr-xl q-pl-xl">
                {{ col.label }}
              </div>
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <div></div>

            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ViewEmployeePage extends Vue {
  loading = false;

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
      align: "left",
      label: "Name",
      field: "name",
    },
    { name: "address", align: "left", label: "Address", field: "address" },
    { name: "age", align: "left", label: "Age", field: "age" },
    {
      name: "appointment",
      align: "left",
      label: "Appointment",
      field: "appointment",
    },
    {
      name: "citizenship",
      align: "left",
      label: "Citizenship",
      field: "citizenship",
    },
    { name: "status", align: "left", label: "Status", field: "status" },
    { name: "position", align: "left", label: "Position", field: "position" },
    { name: "religion", align: "left", label: "Religion", field: "religion" },
    { name: "salary", align: "left", label: "Salary", field: "salary" },
    { name: "sex", align: "left", label: "Sex", field: "sex" },
    {
      name: "work_status",
      align: "left",
      label: "Work Status",
      field: "work_status",
    },
    {
      name: "department",
      align: "left",
      label: "Department",
      field: "department",
    },
    {
      name: "bank_membership",
      align: "left",
      label: "Bank Membership",
      field: "bank_membership",
    },
  ];
  rows = [
    {
      id: "201812500",
      name: "Reshyl B. Maruhom",
      address: "5th Street, MSU-MC, LDS",
      age: "23",
      appointment: "October 06, 2021",
      citizenship: "Filipino",
      status: "Active",
      position: "Manager I",
      religion: "Islam",
      salary: "20,000.00",
      sex: "Female",
      work_status: "Daily Wage",
      department: "HRDO",
      bank_membership: "GSIS, PAG-IBIG, PHILHEALTH",
    },
    {
      id: "201812505",
      name: "Rohma S. Carim",
      address: "Saguiaran, LDS",
      age: "22",
      appointment: "October 06, 2021",
      citizenship: "Filipino",
      status: "Active",
      position: "Manager IV",
      religion: "Islam",
      salary: "20,000.00",
      sex: "Female",
      work_status: "Contructual",
      department: "Alumni Relation",
      bank_membership: "GSIS, PAG-IBIG, PHILHEALTH",
    },
    {
      id: "201813850",
      name: "Azimah Ampuan",
      address: "Sarimanok, MC, LDS",
      age: "22",
      appointment: "October 06, 2021",
      citizenship: "Filipino",
      status: "Active",
      position: "Manager V",
      religion: "Islam",
      salary: "20,000.00",
      sex: "Female",
      work_status: "Item",
      department: "Registrar",
      bank_membership: "GSIS, PAG-IBIG, PHILHEALTH",
    },
    {
      id: "201813674",
      name: "Inshidar P. Panganting",
      address: "Saguiaran, LDS",
      age: "22",
      appointment: "October 06, 2021",
      citizenship: "Filipino",
      status: "Active",
      position: "Manager II",
      religion: "Islam",
      salary: "20,000.00",
      sex: "Female",
      work_status: "Contructual",
      department: "HRDO",
      bank_membership: "GSIS, PAG-IBIG, PHILHEALTH",
    },
    {
      id: "201811169",
      name: "Norol Izzah Abdulrahim",
      address: "Bacolod Chico, MC, LDS",
      age: "20",
      appointment: "October 06, 2021",
      citizenship: "Filipino",
      status: "Active",
      position: "Manager III",
      religion: "Islam",
      salary: "20,000.00",
      sex: "Female",
      work_status: "Item",
      department: "OVCAA",
      bank_membership: "GSIS, PAG-IBIG, PHILHEALTH",
    },
  ];
}
</script>
