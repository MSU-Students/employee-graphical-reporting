import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { EmployeeStateInterface, Info } from './state';

const actions: ActionTree<EmployeeStateInterface, StateInterface> = {
  newEmployee (context, newEmployee: Info) {
    // call your server API
    context.commit ('addEmployee', newEmployee);
  }
};

export default actions;
