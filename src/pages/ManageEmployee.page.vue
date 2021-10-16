<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold flex flex-center">
      <q-icon name="how_to_reg" />
      Manage Account
    </div>

    <br />

    <q-table
      title="List of Employees:"
      title-class=""
      :rows="rows"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
      hide-bottom
    >
      <template v-slot:top>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            color="brown"
            outlined
            dense
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-btn
            label="Add New Profile"
            color="brown-10"
            icon="add"
            @click="addUser = true"
          />
          <q-dialog v-model="addUser">
            <q-card style="width: 600px">
              <q-card-section class="row">
                <div class="text-h6">Form:</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-y-sm">
                <q-input
                  v-model="id"
                  dense
                  outlined
                  label="ID"
                >
                </q-input>
                <q-input
                  v-model="name"
                  dense
                  outlined
                  label="Name"
                >
                </q-input>
                <q-select
                  outlined
                  v-model="membership"
                  :options="options"
                  label="Mambership"
                />
                <q-input
                  v-model="address"
                  dense
                  outlined
                  label="Address"
                />
                <q-input v-model="age" dense outlined label="Age" />
                <q-input v-model="appointmentDate" dense outlined label="Appointment Date" />
                <q-input v-model="citizenship" dense outlined label="Citizenship" />
                <q-input
                  v-model="status"
                  dense
                  outlined
                  label="Status"
                />
                <q-input
                  v-model="position"
                  dense
                  outlined
                  label="Position"
                />
                <q-input
                  v-model="religion"
                  dense
                  outlined
                  label="Religion"
                />
                <q-input
                  v-model="salary"
                  dense
                  outlined
                  label="Salary"
                />
                <q-input
                  v-model="gender"
                  dense
                  outlined
                  label="Gender"
                />
                <q-input
                  v-model="workStatus"
                  dense
                  outlined
                  label="Work Status"
                />
                <q-input
                  v-model="department"
                  dense
                  outlined
                  label="Department"
                />
              </q-card-section>
              <q-card-actions align="center">
                <q-btn flat label="Cancel" color="red" v-close-popup />
                <q-btn flat label="Add" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
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

      <template v-slot:body="props">
        <q-tr :props="props">
          <div>
            <q-td>
              <q-btn
                square
                color="grey-6"
                icon="edit"
                size="sm"
                @click="editRow = true"
              />
              <q-dialog v-model="editRow">
                <q-card style="width: 600px">
                  <q-card-section class="row">
                    <div class="text-h6">Edit Profile:</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-y-sm">
                <q-input
                  v-model="id"
                  dense
                  outlined
                  label="ID"
                >
                </q-input>
                <q-input
                  v-model="name"
                  dense
                  outlined
                  label="Name"
                >
                </q-input>
                <q-select
                  outlined
                  v-model="membership"
                  :options="options"
                  label="Mambership"
                />
                <q-input
                  v-model="address"
                  dense
                  outlined
                  label="Address"
                />
                <q-input v-model="age" dense outlined label="Age" />
                <q-input v-model="appointmentDate" dense outlined label="Appointment Date" />
                <q-input v-model="citizenship" dense outlined label="Citizenship" />
                <q-input
                  v-model="status"
                  dense
                  outlined
                  label="Status"
                />
                <q-input
                  v-model="position"
                  dense
                  outlined
                  label="Position"
                />
                <q-input
                  v-model="religion"
                  dense
                  outlined
                  label="Religion"
                />
                <q-input
                  v-model="salary"
                  dense
                  outlined
                  label="Salary"
                />
                <q-input
                  v-model="gender"
                  dense
                  outlined
                  label="Gender"
                />
                <q-input
                  v-model="workStatus"
                  dense
                  outlined
                  label="Work Status"
                />
                <q-input
                  v-model="department"
                  dense
                  outlined
                  label="Department"
                />
              </q-card-section>

                  <q-card-actions align="center">
                    <q-btn flat label="Cancel" color="red" v-close-popup />
                    <q-btn flat label="Add" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-td>
          </div>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

interface IRow {
  name: string;
}

@Options({})
export default class ManageAccount extends Vue {
  columns = [
    {
      name: "id",
      required: true,
      label: "ID",
      align: "left",
      field: 'id',
    },
    {
      name: "name",
      required: true,
      label: "Name",
      align: "left",
      field: 'name',
    },
    {
      name: "membership",
      align: "center",
      label: "Membership",
      field: "membership",
    },
    { name: "address", align: "center", label: "Address", field: "address" },
    { name: "age", align: "center", label: "Age", field: "age" },
    { name: "appointmentDate", align: "center", label: "Appointment Date", field: "appointmentDate" },
    { name: "citizenship", align: "center", label: "Citizenship", field: "citizenship" },
    { name: "religion", align: "center", label: "Religion", field: "religion" },
    { name: "status", align: "center", label: "Status", field: "status" },
    { name: "position", align: "center", label: "Status", field: "status" },
    { name: "salary", align: "center", label: "Salary", field: "salary" },
    { name: "gender", align: "center", label: "Gender", field: "gender" },
    { name: "workStatus", align: "center", label: "Work Status", field: "workStatus" },
    { name: "department", align: "center", label: "Department", field: "department" },
  ];
  rows = [
    {
      id: "201812500",
      name: "Reshyl B. Maruhom",
      membership: "",
      address: "5th Street",
      age: "23",
      appointmentDate: "October 11, 2021",
      citizenship: "Filipino",
      religion: "Islam",
      status: "Deactive",
      position: "Manager I",
      salary: "16,000.00",
      gender: "Female",
      workStatus: "Contructual",
      department: "DSA",
    },
    {
      id: "201812505",
      name: "Rohma S. Carim",
      membership: "",
      address: "Saguiaran",
      age: "22",
      appointmentDate: "Ocotober 11, 2021",
      citizenship: "Filipino",
      religion: "Islam",
      status: "Active",
      position: "Manager II",
      salary: "17,000.00",
      gender: "Female",
      workStatus: "Contructual",
      department: "Registrar",
    },
    {
      id: "2018",
      name: "Azimah D. Ampuan",
      membership: "",
      address: "Sarimanok",
      age: "22",
      appointmentDate: "October 11, 2021",
      citizenship: "Filipino",
      religion: "Islam",
      status: "Active",
      position: "Manager V",
      salary: "18,000.00",
      gender: "Female",
      workStatus: "Item",
      department: "OVCAA",

    },
    {
      id: "2018",
      name: "Inshidar P. Panganting",
      membership: "",
      address: "Saguiaran",
      age: "22",
      appointmentDate: "October 11, 2021",
      citizenship: "Filipino",
      religion: "Islam",
      status: "Active",
      position: "Manager IV",
      salary: "19,000.00",
      gender: "Female",
      workStatus: "Item",
      department: "HRDO",
    },
    {
      id: "2018",
      name: "Norol Izzah Abdulrahim",
      membership: "",
      address: "Bacolod Chico",
      age: "21",
      appointmentDate: "October 11, 2021",
      citizenship: "Filipino",
      religion: "Islam",
      status: "Active",
      position: "Manager III",
      salary: "18,000.00",
      gender: "Female",
      workStatus: "Contructual",
      department: "HRDO",
    },
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  name = "";
  id = "";
  designation = "";
  membership = "";
  filter = "";
  options = ["GSIS", "PHILHEALTH", "PAG-IBIG"];
  department = "";
  dateCreated = "";
  address = "";
  age = "";
  appointment = "";
  citizenship = "";
  appointmentDate = "";
  status = "";
  religion = "";
  position = "";
  salary = "";
  workStatus = "";
  gender = "";

  onItemClick() {
    console.log("Clicked!");
  }
}
</script>

