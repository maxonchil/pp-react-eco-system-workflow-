import IEmployeeRoles from '../interfaces/i-employee-roles';
import getRandomNumber from '../helpers/getRandomNumber';

const EMPLOYEES: IEmployeeRoles = {
    JUNIOR: {
        id: getRandomNumber(10, 10000),
        key: 'Junior',
        value: 'JUNIOR',
        salary: 500,
        experience: getRandomNumber(1, 6),
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    MIDDLE: {
        id:getRandomNumber(10, 10000),
        key: 'Middle',
        value: 'MIDDLE',
        salary: 1500,
        experience: getRandomNumber(9, 35),
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    SENIOR: {
        id: getRandomNumber(10, 10000),
        key: 'Senior',
        value: 'SENIOR',
        salary: 3500,
        experience: getRandomNumber(36, 49),
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: false
    },
    MANAGER: {
        id: getRandomNumber(10, 10000),
        key: 'Manager',
        value: 'MANAGER',
        salary: 5000,
        experience: getRandomNumber(50, 86),
        isEmployeeCanBePromoted: false
    },
};
export default EMPLOYEES;
