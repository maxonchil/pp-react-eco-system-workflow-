import IEmployee from '../../interfaces/i-employee';
import IEmployeesReducerProps from '../../interfaces/i-employees-reducer-props';
import EmployeeTypes from '../types/employeeTypes.enum'


const initialState: IEmployee[] = [
    {
        id: 1,
        role: 'JUNIOR',
        salary: 900,
        experience: 1,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: true
    },
    {
        id:2,
        role: 'JUNIOR',
        salary: 900,
        experience: 5,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        id: 3,
        role: 'JUNIOR',
        salary: 900,
        experience: 4,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        id: 4,
        role: 'JUNIOR',
        salary: 900,
        experience: 3,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        id:5,
        role: 'MIDDLE',
        salary: 1500,
        experience: 12,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        id: 6,
        role: 'MIDDLE',
        salary: 1500,
        experience: 15,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        id: 7,
        role: 'MIDDLE',
        salary: 1500,
        experience: 24,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        id: 8,
        role: 'SENIOR',
        salary: 3000,
        experience: 36,
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: false
    },
    {
        id:9,
        role: 'SENIOR',
        salary: 3000,
        experience: 50,
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: true
    },
    {
        id:10,
        role: 'Manager',
        salary: 5000,
        experience: 50,
        isEmployeeCanBePromoted: false
    }
];

const employeesReducer = (state = initialState, {type, payload}: IEmployeesReducerProps): IEmployee[] => {
    switch (type) {
        case EmployeeTypes.ADD_EMPLOYEE:
            return [...state, ...payload];
        case EmployeeTypes.UPDATE_EMPLOYEES:
            return [...payload];
        default:
            return [...state];
    }
};
export default employeesReducer;
