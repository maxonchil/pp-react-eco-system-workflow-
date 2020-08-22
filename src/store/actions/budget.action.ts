import { IRootStore } from '../../interfaces/i-root-store';
import payEmployeesSalary from '../../helpers/payEmployeesSalary';
import BudgetTypes from '../types/budgetTypes.enum';
import IUpdateBudgetAction from '../../interfaces/i-update-budget-action';

export const paySalary = () => {
    return async (dispatch: CallableFunction, getState: () => IRootStore): Promise<void> => {
        setInterval(() => {
            const {employees, budget} = getState();
            const updatedFirmBudget = payEmployeesSalary(employees, budget.currentFirmBudget);
            dispatch(updateBudget(updatedFirmBudget));
        }, 1000)
    }
};
export const updateBudget = (budget: number): IUpdateBudgetAction => {
    return {type: BudgetTypes.UPDATE_BUDGET, payload: budget}
};
