import IBudgetStore from '../../interfaces/i-budget-store';
import BudgetTypes from '../types/budgetTypes.enum';
import IBudgetReducerProps from '../../interfaces/i-budget-reducer-props';

const initialState = {
    currentFirmBudget: 100000
};

const budgetReducer = (state = initialState, {type, payload}:IBudgetReducerProps): IBudgetStore => {
    switch (type) {
        case BudgetTypes.UPDATE_BUDGET:
            return {...state, currentFirmBudget: payload};
        default:
            return {...state};
    }
};
export default budgetReducer;
