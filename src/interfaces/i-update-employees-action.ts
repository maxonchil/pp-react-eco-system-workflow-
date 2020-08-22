import IEmployee from './i-employee';

interface IUpdateEmployeesAction {
    type: string;
    payload: IEmployee[]
};
export default IUpdateEmployeesAction;
