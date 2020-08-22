import IEmployee from '../../interfaces/i-employee';
import IEmployeesReducerProps from '../../interfaces/i-employees-reducer-props';
import EmployeeTypes from '../types/employeeTypes.enum'
import EMPLOYEES from '../../data/employees';


const initialState: IEmployee[] = [
    {
        role: 'JUNIOR',
        salary: 900
    },
    {
        role: 'JUNIOR',
        salary: 900
    },
    {
        role: 'JUNIOR',
        salary: 900
    },
    {
        role: 'JUNIOR',
        salary: 900
    },
    {
        role: 'MIDDLE',
        salary: 1500
    },
    {
        role: 'MIDDLE',
        salary: 1500
    },
    {
        role: 'MIDDLE',
        salary: 1500
    },
    {
        role: 'SENIOR',
        salary: 3000
    },
    {
        role: 'SENIOR',
        salary: 3000
    },
    {
        role: 'Manager',
        salary: 5000
    }
];

const employeesReducer = (state = initialState, {type, payload}: IEmployeesReducerProps): IEmployee[] => {
    switch (type) {
        case EmployeeTypes.ADD_EMPLOYEE:
            return [...state, {role: payload, salary: EMPLOYEES[payload].salary}];
        default:
            return [...state];
    }
};
export default employeesReducer;
