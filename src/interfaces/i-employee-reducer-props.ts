import IEmployeeRoles from './i-employee-roles';

interface IEmployeeReducerProps {
    type: string
    payload: keyof IEmployeeRoles;
}

export default IEmployeeReducerProps;
