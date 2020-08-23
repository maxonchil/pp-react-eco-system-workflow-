import IEmployee from '../../interfaces/i-employee';
import IEmployeesReducerProps from '../../interfaces/i-employees-reducer-props';
import EmployeeTypes from '../types/employeeTypes.enum'


const initialState: IEmployee[] = [
    {
        id: 1,
        position: 'JUNIOR',
        salary: 900,
        experience: 1,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: true
    },
    {
        id:2,
        position: 'JUNIOR',
        salary: 900,
        experience: 5,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        id: 3,
        position: 'JUNIOR',
        salary: 900,
        experience: 4,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        id: 4,
        position: 'JUNIOR',
        salary: 900,
        experience: 3,
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    {
        id:5,
        position: 'MIDDLE',
        salary: 1500,
        experience: 12,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        id: 6,
        position: 'MIDDLE',
        salary: 1500,
        experience: 15,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        id: 7,
        position: 'MIDDLE',
        salary: 1500,
        experience: 24,
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    {
        id: 8,
        position: 'SENIOR',
        salary: 3000,
        experience: 36,
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: false
    },
    {
        id:9,
        position: 'SENIOR',
        salary: 3000,
        experience: 50,
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: true
    },
    {
        id:10,
        position: 'Manager',
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
        case EmployeeTypes.PROMOTE_EMPLOYEE:
            const [updatedEmployee] = payload;
           return state.map((employee) => employee.id === updatedEmployee.id ? updatedEmployee : employee);
        default:
            return [...state];
    }
};
export default employeesReducer;
