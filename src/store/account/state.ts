export interface AccountInfo {
  fName: string,
  mInitial: string,
  lName: string,
  designation: string,
  department: string,
  email: string,
  username: string,
  password: string,
  dateCreated: string,
  status: 'Active' | 'Inactive',
}

export interface AccountStateInterface {
  account: AccountInfo[];
  activeAccount?: AccountInfo;
}

function state(): AccountStateInterface {
  return {
    account: [
      {
        fName: 'Riza',
        mInitial: 'B.',
        lName: 'Maruhom',
        designation: 'Director',
        department: 'HRDO',
        email: 'rizamaruhom@gmail.com',
        username: 'riza',
        password: 'riza',
        dateCreated: 'December 23, 1998',
        status: 'Active',
      },
      {
        fName: 'Reshyl',
        mInitial: 'B.',
        lName: 'Maruhom',
        designation: 'Admin',
        department: 'HRDO',
        email: 'reshylmaruhom@gmail.com',
        username: 'rshyl',
        password: 'maruhom',
        dateCreated: 'December 23, 1998',
        status: 'Active',
      },
      {
        fName: 'Aminollah',
        mInitial: 'I.',
        lName: 'Sangcupan',
        designation: 'Director',
        department: 'HRDO',
        email: 'aminollahsangcopan@gmail.com',
        username: 'aminollah',
        password: 'sangcopan',
        dateCreated: 'December 23, 1998',
        status: 'Inactive',
      },
    ]
  }
}

export default state;
