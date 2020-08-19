import {combineReducers} from "redux";
import appReducer from "./app.reducer";
import employeeReducer from './employee.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    employee: employeeReducer
});

export default rootReducer;
