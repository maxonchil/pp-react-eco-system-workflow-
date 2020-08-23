import EmployeeTypes from '../types/employeeTypes.enum';
import IAddEmployeeAction from '../../interfaces/i-add-employee-action';
import IEmployee from '../../interfaces/i-employee';
import IUpdateEmployeesAction from '../../interfaces/i-update-employees-action';
import EMPLOYEES from '../../data/employees';
import IEmployeePosition from '../../interfaces/i-employee-position';
import { IRootStore } from '../../interfaces/i-root-store';
import { promoteEmployeePosition } from '../../helpers/promoteEmployeePosition';

export const addEmployee = (position: keyof IEmployeePosition): IAddEmployeeAction => {
    const newEmployee = {
        position,
        id: EMPLOYEES[position].id,
        salary: EMPLOYEES[position].salary,
        experience: EMPLOYEES[position].experience,
        experienceForPromotion: EMPLOYEES[position].experienceForPromotion,
        isEmployeeCanBePromoted: false
    };
    return {type: EmployeeTypes.ADD_EMPLOYEE, payload: [newEmployee]}
};
export const updateEmployee = (employees: IEmployee[]): IUpdateEmployeesAction => {
    return {type: EmployeeTypes.UPDATE_EMPLOYEES, payload: employees}
};
export const promoteEmployee = (id: number) => {
    return async (dispatch: CallableFunction, getState: () => IRootStore): Promise<void> => {
        const {employees} = getState();
        const employeeForPromoting = employees.find(employee => employee.id === id) as IEmployee;
        const promotedEmployee = promoteEmployeePosition(employeeForPromoting);
        dispatch({type: EmployeeTypes.PROMOTE_EMPLOYEE, payload: [promotedEmployee]});
    }
};
