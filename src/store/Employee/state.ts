export interface Info {
  [x: string]: any;
  id: string,
  fName: string,
  mName: string,
  lName: string,
  membership: string,
  address: string,
  age: string,
  appointmentDate: string,
  citizenship: string,
  religion: string,
  status: string,
  position: string,
  salary: string,
  gender: 'Male' | 'Female',
  workStatus: string,
  department: string,
}

 export interface EmployeeStateInterface {
   employee: Info[];
   activeEmployee?: Info;
 }

function state(): EmployeeStateInterface {
  return {
    employee: [
      {
        id: "201812500",
        fName: "Reshyl",
        mName: "B.",
        lName: "Maruhom",
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
        workStatus: "Contractual",
        department: "DSA",
      },
      {
        id: "201812505",
        fName: "Rohma",
        mName: "S.",
        lName: "Carim",
        membership: "",
        address: "Saguiaran",
        age: "22",
        appointmentDate: "October 11, 2021",
        citizenship: "Filipino",
        religion: "Islam",
        status: "Active",
        position: "Manager II",
        salary: "17,000.00",
        gender: "Female",
        workStatus: "Contractual",
        department: "Registrar",
      },
      {
        id: "2018",
        fName: "Azimah",
        mName: "D.",
        lName: "Ampuan",
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
        fName: "Inshidar",
        mName: "P.",
        lName: "Panganting",
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
        fName: "Norol Izzah",
        mName: "A.",
        lName: "Abdulrahim",
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
        workStatus: "Contractual",
        department: "HRDO",
      },
    ]
  }
};

export default state;
