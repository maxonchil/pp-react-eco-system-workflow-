import IEmployee from '../../interfaces/i-employee';
import IEmployeesReducerProps from '../../interfaces/i-employees-reducer-props';
import EmployeeTypes from '../types/employeeTypes.enum'
import EMPLOYEES from '../../data/employees';


const initialState: IEmployee[] = [
    {
        role: 'JUNIOR',
        salary: 900,
        experience: 1,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: true
    },
    {
        role: 'JUNIOR',
        salary: 900,
        experience: 5,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        role: 'JUNIOR',
        salary: 900,
        experience: 4,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        role: 'JUNIOR',
        salary: 900,
        experience: 3,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        role: 'MIDDLE',
        salary: 1500,
        experience: 12,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        role: 'MIDDLE',
        salary: 1500,
        experience: 15,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        role: 'MIDDLE',
        salary: 1500,
        experience: 24,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        role: 'SENIOR',
        salary: 3000,
        experience: 36,
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: false
    },
    {
        role: 'SENIOR',
        salary: 3000,
        experience: 50,
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: true
    },
    {
        role: 'Manager',
        salary: 5000,
        experience: 50,
        isEmployeeCanBePromoted: false
    }
];

const employeesReducer = (state = initialState, {type, payload}: IEmployeesReducerProps): IEmployee[] => {
    switch (type) {
        case EmployeeTypes.ADD_EMPLOYEE:
            return [...state, {
                role: payload,
                salary: EMPLOYEES[payload].salary,
                experience: EMPLOYEES[payload].experience,
                experienceForPromotion: EMPLOYEES[payload].experienceForPromotion,
                isEmployeeCanBePromoted: false
            }];
        default:
            return [...state];
    }
};
export default employeesReducer;
