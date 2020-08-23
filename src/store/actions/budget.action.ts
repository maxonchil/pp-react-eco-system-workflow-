import { IRootStore } from '../../interfaces/i-root-store';
import payEmployeesSalary from '../../helpers/payEmployeesSalary';
import BudgetTypes from '../types/budgetTypes.enum';
import IUpdateBudgetAction from '../../interfaces/i-update-budget-action';
import { hideAlert, showAlert } from './app.actions';
import { updateEmployee } from './employee.actions';
import incrementEmployeeExperience from '../../helpers/incrementEmployeeExperience';
import IEmployee from '../../interfaces/i-employee';

export const paySalary = () => {
    return async (dispatch: CallableFunction, getState: () => IRootStore): Promise<void> => {
        setInterval(() => {
            const {employees, budget} = getState();
            const updatedFirmBudget = payEmployeesSalary(employees, budget.currentFirmBudget);
            dispatch(updateBudget(updatedFirmBudget));
            dispatch(showAlert());
            dispatch(incrementExperience());
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000);
        }, 5000);

    }
};

export const incrementExperience = () => {
    return async (dispatch: CallableFunction, getState: () => IRootStore): Promise<void> => {
        setTimeout(() => {
            const {employees} = getState();
            const updatedEmployees = incrementEmployeeExperience(employees);
            dispatch(updateEmployee(updatedEmployees))
        }, 5000)
    }
};

export const updateBudget = (budget: number): IUpdateBudgetAction => {
    return {type: BudgetTypes.UPDATE_BUDGET, payload: budget}
};
