import EMPLOYEES from './employees';
import IEmployeesPromotions from '../interfaces/i-employees-promotions';

const PROMOTIONS:IEmployeesPromotions = {
    JUNIOR: {
        nextPosition: EMPLOYEES.MIDDLE.value,
        nextSalary: EMPLOYEES.MIDDLE.salary,
        nextExperienceForPromotion: EMPLOYEES.MIDDLE.experienceForPromotion
    },
    MIDDLE: {
        nextPosition: EMPLOYEES.SENIOR.value,
        nextSalary: EMPLOYEES.SENIOR.salary,
        nextExperienceForPromotion: EMPLOYEES.SENIOR.experienceForPromotion
    }, SENIOR: {
        nextPosition: EMPLOYEES.MANAGER.value,
        nextSalary: EMPLOYEES.MANAGER.salary,
        nextExperienceForPromotion: EMPLOYEES.MANAGER.experienceForPromotion
    },
};

export default PROMOTIONS;
