import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { EmployeeStateInterface, Info } from './state';

const actions: ActionTree<EmployeeStateInterface, StateInterface> = {
  newEmployee (context, newEmployee: Info) {
    // call your server API
    context.commit ('addEmployee', newEmployee);
  },
  editEmployee (context, updateEmployee: Info) {
    context.commit ('updateEmployee', updateEmployee);
  },
  deleteEmployee (context, targetEmployee: Info) {
    context.commit ('removeEmployee', targetEmployee);
  }
};

export default actions;
