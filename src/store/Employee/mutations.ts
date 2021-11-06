import { MutationTree } from 'vuex';
import { EmployeeStateInterface, Info} from './state';

const mutation: MutationTree<EmployeeStateInterface> = {
  addEmployee (state, newEmployee:Info) {
    state.employee.push(newEmployee);
  },
};

export default mutation;
