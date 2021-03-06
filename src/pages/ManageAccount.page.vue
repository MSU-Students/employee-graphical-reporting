<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold flex flex-center">
      <q-icon name="how_to_reg" />
      Manage Account
    </div>

    <br />

    <q-table
      title="Users's Accounts:"
      :rows="account"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      hide-bottom
      :filter="filter"
    >
      <template v-slot:top-right>
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
            @click="onNewAccount()"
          />
          <q-dialog v-model="activeUser" persistent>
            <q-card style="width: 600px">
              <q-card-section class="row">
                <div class="text-h6">Create New User</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-y-sm">
                <q-input
                  v-model="presentAccount.fName"
                  dense
                  outlined
                  label="First Name"
                >
                </q-input>
                <q-input
                  v-model="presentAccount.mInitial"
                  dense
                  outlined
                  label="Middle Initial"
                >
                </q-input>
                <q-input
                  v-model="presentAccount.lName"
                  dense
                  outlined
                  label="Last Name"
                >
                </q-input>
                <q-select
                  outlined
                  v-model="presentAccount.designation"
                  :options="options"
                  label="Designation"
                />
                <q-input
                  v-model="presentAccount.department"
                  dense
                  outlined
                  label="Department"
                />
                <q-input
                  v-model="presentAccount.email"
                  dense
                  outlined
                  label="Email"
                />
                <q-input
                  v-model="presentAccount.username"
                  dense
                  outlined
                  label="Username"
                />
                <q-input
                  v-model="presentAccount.password"
                  dense
                  outlined
                  label="Password"
                />
                <q-input
                  v-model="presentAccount.dateCreated"
                  dense
                  outlined
                  type="date"
                  label="Date Created"
                />
              </q-card-section>
              <q-card-actions align="center">
                <q-btn label="Cancel" color="red-10" v-close-popup />
                <q-btn label="Add" color="blue-10" @click="onSaveAccount" v-close-popup/>
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
                @click="onEditAccount(props.row)"
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
                      v-model="presentAccount.fName"
                      dense
                      outlined
                      label="First Name"
                    >
                    </q-input>
                    <q-input
                      v-model="presentAccount.mInitial"
                      dense
                      outlined
                      label="Middle Initial"
                    >
                    </q-input>
                    <q-input
                      v-model="presentAccount.lName"
                      dense
                      outlined
                      label="Last Name"
                    >
                    </q-input>
                    <q-select
                      outlined
                      v-model="presentAccount.designation"
                      :options="options"
                      label="Designation"
                    />
                    <q-input
                      v-model="presentAccount.department"
                      dense
                      outlined
                      label="Department"
                    />
                    <q-input
                      v-model="presentAccount.email"
                      dense
                      outlined
                      label="Email"
                    />
                    <q-input
                      v-model="presentAccount.username"
                      dense
                      outlined
                      label="Username"
                    />
                    <q-input
                      v-model="presentAccount.password"
                      dense
                      outlined
                      label="Password"
                    />
                    <q-input
                      v-model="presentAccount.dateCreated"
                      dense
                      outlined
                      type="date"
                      label="Date Created"
                    />
                  </q-card-section>

                  <q-card-actions align="center">
                    <q-btn label="Cancel" color="red-10" v-close-popup />
                    <q-btn label="Save Changes" color="blue-10" @click="onEditAccount" v-close-popup/>
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
                @click="onDeleteAccount(props.row)"
              />
              <q-dialog v-model="confirmDelete" persistent>
                <q-card>
                  <q-card-section class="row items-center">
                    <q-avatar
                      size="sm"
                      icon="warning"
                      color="red"
                      text-color="white"
                    />
                    <span class="q-ml-sm">Confirm Delete {{presentAccount.fName}}?</span>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn
                      flat
                      label="Cancel"
                      color="primary"
                      v-close-popup
                    />
                    <q-btn flat label="Delete" color="primary" @click="onConfirmDelete" v-close-popup/>
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
import { AccountInfo } from "src/store/account/state";
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options({
  computed: {
    ...mapState("account", ["account", "activeAccount"]),
  },
  methods: {
    ...mapActions("account", ["newAccount", "editAccount", "deleteAccount"]),
  },
})
export default class ManageAccount extends Vue {
  account!: AccountInfo[];
  newAccount!: (account: AccountInfo) => Promise<void>;
  editAccount!: (account: AccountInfo) => Promise<void>;
  deleteAccount!: (account: AccountInfo) => Promise<void>;

  columns = [
    {
      name: "name",
      required: true,
      label: "Full Name",
      align: "left",
      field: (row: AccountInfo) =>
        row.fName + "" + row.mInitial + "" + row.lName,
      format: (val: string) => `${val}`,
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
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  defaultAccount: AccountInfo = {
    fName: "",
    mInitial: "",
    lName: "",
    designation: "",
    department: "",
    email: "",
    username: "",
    password: "",
    dateCreated: "",
    status: "Active",
  };
  presentAccount = { ...this.defaultAccount };
  filter = "";
  options = ["Admin", "Director"];

  onNewAccount() {
    this.presentAccount = { ...this.defaultAccount };
    this.editRow = false;
    this.activeUser = true;
  }

  onEditAccount(account: AccountInfo) {
    this.presentAccount = { ...account };
    this.editRow = true;
    this.activeUser = false;
  }

  onDeleteAccount(account: AccountInfo) {
    this.presentAccount = { ...account };
    this.confirmDelete = true;
  }

  async onSaveAccount() {
    if (!this.editRow) {
      await this.newAccount(this.presentAccount);
    } else {
      await this.editAccount(this.presentAccount);
    }
  }
  async onConfirmDelete() {
    await this.deleteAccount(this.presentAccount);
    this.confirmDelete = true;
  }
}
</script>
