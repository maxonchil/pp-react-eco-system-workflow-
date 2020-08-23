import IEmployee from '../interfaces/i-employee';
import isEmployeeCanBePromoted from './isEmployeeCanBePromoted';

const incrementEmployeeExperience = (employees: IEmployee[]): IEmployee[] => {
    return employees.map((employee: IEmployee) => {
        const experience = employee.experience + 1;
        return {
            ...employee,
            experience,
            isEmployeeCanBePromoted: isEmployeeCanBePromoted(experience, employee.experienceForPromotion)
        };

    });
};
export default incrementEmployeeExperience;
