<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold flex flex-center">
      <q-icon name="people" />
      Manage Employee
    </div>

    <br />

    <q-table
      title="Employees List:"
      :rows="employee"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      hide-bottom
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input color="brown" outlined dense v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-btn
            label="Add New Profile"
            color="brown-10"
            icon="add"
            @click="onNewEmployee()"
          />
          <q-dialog v-model="activeUser" persistent>
            <q-card style="width: 600px">
              <q-card-section class="row">
                <div class="text-h6">
                  <q-icon name="assignment" />
                  Form:
                </div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-y-sm">
                <q-input v-model="presentEmployee.id" dense outlined label="ID">
                </q-input>
                <q-input
                  v-model="presentEmployee.fName"
                  dense
                  outlined
                  label="First Name"
                >
                </q-input>
                <q-input
                  v-model="presentEmployee.mName"
                  dense
                  outlined
                  label="Middle Initial"
                >
                </q-input>
                <q-input v-model="presentEmployee.lName" dense outlined label="Last Name">
                </q-input>
                <q-select
                  outlined
                  v-model="presentEmployee.membership"
                  :options="options"
                  label="Mambership"
                />
                <q-input
                  v-model="presentEmployee.address"
                  dense
                  outlined
                  label="Address"
                />
                <q-input v-model="presentEmployee.age" dense outlined label="Age" />
                <q-input
                  v-model="presentEmployee.appointmentDate"
                  dense
                  outlined
                  label="Appointment Date"
                />
                <q-input
                  v-model="presentEmployee.citizenship"
                  dense
                  outlined
                  label="Citizenship"
                />
                <q-input v-model="presentEmployee.status" dense outlined label="Status" />
                <q-input
                  v-model="presentEmployee.position"
                  dense
                  outlined
                  label="Position"
                />
                <q-input
                  v-model="presentEmployee.religion"
                  dense
                  outlined
                  label="Religion"
                />
                <q-input v-model="presentEmployee.salary" dense outlined label="Salary" />
                <q-select
                  v-model="presentEmployee.gender"
                  outlined
                  label="Gender"
                  :options="options"
                />
                <q-input
                  v-model="presentEmployee.workStatus"
                  dense
                  outlined
                  label="Work Status"
                />
                <q-input
                  v-model="presentEmployee.department"
                  dense
                  outlined
                  label="Department"
                />
              </q-card-section>
              <q-card-actions align="center">
                <q-btn label="Cancel" color="red-10" v-close-popup />
                <q-btn
                  label="Add"
                  color="blue-10"
                  @click="onSaveEmployee"
                  v-close-popup
                />
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
                    <div class="text-h6">Edit Profile:</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-y-sm">
                    <q-input v-model="presentEmployee.id" dense outlined label="ID">
                    </q-input>
                    <q-input
                      v-model="presentEmployee.fName"
                      dense
                      outlined
                      label="First Name"
                    >
                    </q-input>
                    <q-input
                      v-model="presentEmployee.mName"
                      dense
                      outlined
                      label="Middle Initial"
                    >
                    </q-input>
                    <q-input
                      v-model="presentEmployee.lName"
                      dense
                      outlined
                      label="Last Name"
                    >
                    </q-input>
                    <q-select
                      outlined
                      v-model="presentEmployee.membership"
                      :options="options"
                      label="Mambership"
                    />
                    <q-input
                      v-model="presentEmployee.address"
                      dense
                      outlined
                      label="Address"
                    />
                    <q-input v-model="presentEmployee.age" dense outlined label="Age" />
                    <q-input
                      v-model="presentEmployee.appointmentDate"
                      dense
                      outlined
                      label="Appointment Date"
                    />
                    <q-input
                      v-model="presentEmployee.citizenship"
                      dense
                      outlined
                      label="Citizenship"
                    />
                    <q-input
                      v-model="presentEmployee.status"
                      dense
                      outlined
                      label="Status"
                    />
                    <q-input
                      v-model="presentEmployee.position"
                      dense
                      outlined
                      label="Position"
                    />
                    <q-input
                      v-model="presentEmployee.religion"
                      dense
                      outlined
                      label="Religion"
                    />
                    <q-input
                      v-model="presentEmployee.salary"
                      dense
                      outlined
                      label="Salary"
                    />
                    <q-input
                      v-model="presentEmployee.gender"
                      dense
                      outlined
                      label="Gender"
                    />
                    <q-input
                      v-model="presentEmployee.workStatus"
                      dense
                      outlined
                      label="Work Status"
                    />
                    <q-input
                      v-model="presentEmployee.department"
                      dense
                      outlined
                      label="Department"
                    />
                  </q-card-section>

                  <q-card-actions align="center">
                    <q-btn label="Cancel" color="red-10" v-close-popup />
                    <q-btn label="Add" color="blue-10" v-close-popup />
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
import { Info } from "src/store/employee/state";
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  computed: {
    ...mapState("employee", ["employee", "activeEmployee"]),
  },
  methods: {
    ...mapActions("employee", ["newEmployee", "editEmployee", "deleteEmployee"]),
  },
})
export default class ManageEmployee extends Vue {
  // vuex properties
  employee!: Info[];
  newEmployee!: (employee: Info) => Promise<void>;
  editEmployee!: (employee: Info) => Promise<void>;
  deleteEmployee!: (employee: Info) => Promise<void>;

  //local
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
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  defaultEmployee: Info = {
    fName: "",
    mName: "",
    lName: "",
    id: "",
    membership: "",
    department: "",
    address: "",
    age: "",
    citizenship: "",
    appointmentDate: "",
    status: "",
    religion: "",
    position: "",
    salary: "",
    workStatus: "",
    gender: "Female",
  };
  filter = "";
  options = ["GSIS", "PhilHealth", "PAG-IBIG"];
  presentEmployee = { ...this.defaultEmployee };

  onNewEmployee() {
    this.presentEmployee = { ...this.defaultEmployee };
    this.editRow = false;
    this.activeUser = true;
  }

  onEditEmployee(employee: Info) {
    this.presentEmployee = { ...employee };
    this.editRow = true;
    this.activeUser = false;
  }

  onDleteEmployee(employee: Info) {
    this.presentEmployee = {...employee };
    this.confirmDelete = true;
  }

  async onSaveEmployee() {
    if (!this.editRow) {
      await this.newEmployee(this.presentEmployee);
    } else {
      await this.editEmployee(this.presentEmployee);
    }
  }
  async onConfirmDelete() {
    await this.deleteEmployee(this.presentEmployee);
    this.confirmDelete = true;
  }
}
</script>
