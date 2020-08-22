import IEmployeeRoles from './i-employee-roles';

interface IEmployeesReducerProps {
    type: string
    payload: keyof IEmployeeRoles;
}

export default IEmployeesReducerProps;
