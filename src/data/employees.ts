import IEmployeeRoles from '../interfaces/i-employee-roles';
import getRandomEmployeeExperience from '../helpers/getRandomEmployeeExperience';

const EMPLOYEES: IEmployeeRoles = {
    JUNIOR: {
        key: 'Junior',
        value: 'JUNIOR',
        salary: 500,
        experience: getRandomEmployeeExperience(1, 6),
        experienceForPromotion: 9,
        isEmployeeCanBePromoted: false
    },
    MIDDLE: {
        key: 'Middle',
        value: 'MIDDLE',
        salary: 1500,
        experience: getRandomEmployeeExperience(9, 35),
        experienceForPromotion: 36,
        isEmployeeCanBePromoted: false
    },
    SENIOR: {
        key: 'Senior',
        value: 'SENIOR',
        salary: 3500,
        experience: getRandomEmployeeExperience(36, 49),
        experienceForPromotion: 50,
        isEmployeeCanBePromoted: false
    },
    MANAGER: {
        key: 'Manager',
        value: 'MANAGER',
        salary: 5000,
        experience: getRandomEmployeeExperience(50, 86),
        isEmployeeCanBePromoted: false
    },
};
export default EMPLOYEES;
