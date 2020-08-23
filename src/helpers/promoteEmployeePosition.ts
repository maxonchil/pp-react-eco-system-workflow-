import IEmployee from '../interfaces/i-employee';
import PROMOTIONS from '../data/promotions';
import IEmployeesPromotions from '../interfaces/i-employees-promotions';

export const promoteEmployeePosition = (employee: IEmployee) => {
    const {nextPosition: position, nextSalary: salary, nextExperienceForPromotion: experienceForPromotion} = PROMOTIONS[employee.position as keyof IEmployeesPromotions];
    return {
        ...employee,
        position,
        salary,
        experienceForPromotion,
        isEmployeeCanBePromoted: false
    }
};
