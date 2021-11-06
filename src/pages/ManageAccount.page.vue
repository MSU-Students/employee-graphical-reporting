<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold flex flex-center">
      <q-icon name="how_to_reg" />
      Manage Account
    </div>

    <br />

    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
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
            label="Create New Account"
            color="brown-10"
            icon="add"
            @click="addUser = true"
          />
          <q-dialog v-model="addUser">
            <q-card style="width: 600px">
              <q-card-section class="row">
                <div class="text-h6">Create New User</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-y-sm">
                <q-input
                  v-model="name"
                  dense
                  outlined
                  type="text"
                  label="Employee Name"
                >
                </q-input>
                <q-select
                  outlined
                  v-model="role"
                  :options="options"
                  label="Designation"
                />
                <q-input
                  v-model="department"
                  dense
                  outlined
                  label="Department"
                />
                <q-input v-model="email" dense outlined label="Email" />
                <q-input v-model="username" dense outlined label="Username" />
                <q-input v-model="password" dense outlined label="Password" />
                <q-input
                  v-model="dateCreated"
                  dense
                  outlined
                  label="Date Created"
                />
              </q-card-section>
              <q-card-actions align="center">
                <q-btn label="Cancel" color="red-10" v-close-popup />
                <q-btn label="Add" color="blue-10" />
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
                round
                color="blue-10"
                icon="edit"
                size="sm"
                dense
                @click="editRow = true"
              />
              <q-dialog v-model="editRow">
                <q-card style="width: 600px">
                  <q-card-section class="row">
                    <div class="text-h6">Edit User</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-y-sm">
                    <q-input
                      v-model="name"
                      dense
                      outlined
                      type="text"
                      label="Employee Name"
                    >
                    </q-input>
                    <q-select
                      outlined
                      v-model="role"
                      :options="options"
                      label="Designation"
                    />
                    <q-input
                      v-model="department"
                      dense
                      outlined
                      label="Department"
                    />
                    <q-input v-model="email" dense outlined label="Email" />
                    <q-input
                      v-model="username"
                      dense
                      outlined
                      label="Username"
                    />
                    <q-input
                      v-model="password"
                      dense
                      outlined
                      label="Password"
                    />
                    <q-input
                      v-model="dateCreated"
                      dense
                      outlined
                      label="Date Created"
                    />
                  </q-card-section>

                  <q-card-actions align="center">
                    <q-btn label="Cancel" color="red-10" v-close-popup />
                    <q-btn label="Add" color="blue-10"/>
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-btn
                color="red-10"
                icon="delete"
                size="sm"
                class="q-ml-sm"
                flat
                round
                dense
                @click="dialog = true"
              />
              <q-dialog v-model="dialog" persistent>
                <q-card>
                  <q-card-section class="row items-center">
                    <q-avatar
                      size="sm"
                      icon="warning"
                      color="red"
                      text-color="white"
                    />
                    <span class="q-ml-sm">Confirm Delete?</span>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn
                      flat
                      label="Cancel"
                      color="primary"
                      v-close-popup="cancelEnabled"
                      :disable="!cancelEnabled"
                    />
                    <q-btn flat label="Delete" color="primary" v-close-popup />
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
import { ref } from "vue";
import { Vue, Options } from "vue-class-component";

interface IRow {
  name: string;
}

@Options({})
export default class ManageAccount extends Vue {
  columns = [
    {
      name: "name",
      required: true,
      label: "Full Name",
      align: "left",
      field: "name",
    },
    {
      name: "designation",
      align: "left",
      label: "Designation",
      field: "designation",
    },
    {
      name: "department",
      align: "left",
      label: "Department",
      field: "department",
    },
    { name: "email", align: "left", label: "Email", field: "email" },
    { name: "username", align: "left", label: "Username", field: "username" },
    { name: "password", align: "left", label: "Password", field: "password" },
    {
      name: "dateCreated",
      align: "left",
      label: "Date Created",
      field: "dateCreated",
    },
    { name: "status", align: "left", label: "Status", field: "status" },
  ];
  rows = [
    {
      name: "Riza B. Maruhom",
      designation: "Director",
      department: "HRDO",
      email: "rizamaruhom@gmail.com",
      username: "riza",
      password: "riza",
      dateCreated: "December 23, 1998",
      status: "Active",
    },
    {
      name: "Reshyl B. Maruhom",
      designation: "Admin",
      department: "HRDO",
      email: "reshylmaruhom@gmail.com",
      username: "rshyl",
      password: "maruhom",
      dateCreated: "December 23, 1998",
      status: "Active",
    },
    {
      name: "Aminollah Sangcopan",
      designation: "Director",
      department: "HRDO",
      email: "aminollahsangcopan@gmail.com",
      username: "aminollah",
      password: "sangcopan",
      dateCreated: "December 23, 1998",
      status: "Deactive",
    },
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  name = "";
  username = "";
  password = "";
  email = "";
  designation = "";
  role = "";
  filter = "";
  options = ["Admin", "Director"];
  department = "";
  dateCreated = "";

  onItemClick() {
    console.log("Clicked!");
  }
}
</script>

