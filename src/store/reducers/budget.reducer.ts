import IBudgetStore from '../../interfaces/i-budget-store';

const initialState = {
    currentFirmBudget: 100000
};
//only default mock up os reducer without functionality
const budgetReducer = (state = initialState, {type}): IBudgetStore => {
    switch (type) {
        default:
            return {...state};
    }
};
export default budgetReducer;
