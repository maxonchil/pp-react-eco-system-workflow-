import { IRootStore } from '../../interfaces/i-root-store';
import payEmployeesSalary from '../../helpers/payEmployeesSalary';
import BudgetTypes from '../types/budgetTypes.enum';
import IUpdateBudgetAction from '../../interfaces/i-update-budget-action';
import { hideAlert, showAlert } from './app.actions';

export const paySalary = () => {
    return async (dispatch: CallableFunction, getState: () => IRootStore): Promise<void> => {
        setInterval(() => {
            const {employees, budget} = getState();
            const updatedFirmBudget = payEmployeesSalary(employees, budget.currentFirmBudget);
            dispatch(updateBudget(updatedFirmBudget));
            dispatch(showAlert());
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000);
        }, 5000);

    }
};

// export const incrementExperience = ():Promise<void> => {
//     return async (dispatch: CallableFunction, getState: () => IRootStore): Promise<void> => {
//         const {employees} = getState();
//         const updatedEmployees = employees.map(employee => employee.experience++);
//     }
// }
export const updateBudget = (budget: number): IUpdateBudgetAction => {
    return {type: BudgetTypes.UPDATE_BUDGET, payload: budget}
};
