import EmployeeTypes from '../types/employeeTypes.enum';
import IAddEmployeeAction from '../../interfaces/i-add-employee-action';
import IEmployee from '../../interfaces/i-employee';
import IUpdateEmployeesAction from '../../interfaces/i-update-employees-action';
import EMPLOYEES from '../../data/employees';
import IEmployeeRoles from '../../interfaces/i-employee-roles';

export const addEmployee = (role: keyof IEmployeeRoles): IAddEmployeeAction => {
    const newEmployee = {
        role,
        id:EMPLOYEES[role].id,
        salary: EMPLOYEES[role].salary,
        experience: EMPLOYEES[role].experience,
        experienceForPromotion: EMPLOYEES[role].experienceForPromotion,
        isEmployeeCanBePromoted: false
    };
    return {type: EmployeeTypes.ADD_EMPLOYEE, payload: [newEmployee]}
};
export const updateEmployee = (employees: IEmployee[]): IUpdateEmployeesAction => {
    return {type: EmployeeTypes.UPDATE_EMPLOYEES, payload: employees}
};
// export const promoteEmployee = () => {
//     return {type:PROMOTE_EMPLOYEE, }
// }
