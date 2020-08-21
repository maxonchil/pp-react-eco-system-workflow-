import EmployeeTypes from '../types/employee.types.enum';
import IAddEmployeeAction from '../../interfaces/i-add-employee-action';

export const addEmployee = (role: string): IAddEmployeeAction => {
    return {type: EmployeeTypes.ADD_EMPLOYEE, payload: role}
};
