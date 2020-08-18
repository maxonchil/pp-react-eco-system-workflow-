import IEmployee from '../../interfaces/i-employee';
import IEmployeeReducerProps from '../../interfaces/i-employee-reducer-props';
import EmployeeTypes from '../types/employee.types.enum'
import EmployeeSalaries from '../../components/ModalHireDev/employee-salaries';

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

const employeeReducer = (state = initialState, {type, payload}: IEmployeeReducerProps): IEmployee[] => {
    switch (type) {
        case EmployeeTypes.ADD_EMPLOYEE:
            return {...state, ...{
                    role: payload,
                    salary: EmployeeSalaries[payload]
                }};
        default:
            return {...state};
    }
};
