import IEmployee from '../interfaces/i-employee';

const payEmployeesSalary = (employees: IEmployee[], budget: number): number => {
    return employees.reduce((acc: number, {salary}: IEmployee): number => {
        acc -= salary;
        return acc;
    }, budget);
};
export default payEmployeesSalary;
