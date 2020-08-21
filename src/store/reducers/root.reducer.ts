import {combineReducers} from "redux";
import appReducer from "./app.reducer";
import employeeReducer from './employee.reducer';
import budgetReducer from './budget.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    employee: employeeReducer,
    budget: budgetReducer
});

export default rootReducer;
