import EmployeeTypes from '../types/employee.types.enum';

export const addEmployee = (role: string) => {
    return {type: EmployeeTypes.ADD_EMPLOYEE, payload: role}
};
