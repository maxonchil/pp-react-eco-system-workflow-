import {combineReducers} from "redux";
import appReducer from "./app.reducer";
import employeesReducer from './employees.reducer';
import budgetReducer from './budget.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    employees: employeesReducer,
    budget: budgetReducer
});

export default rootReducer;
