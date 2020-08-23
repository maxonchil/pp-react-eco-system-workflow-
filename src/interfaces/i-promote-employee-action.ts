import IEmployee from './i-employee';

interface IPromoteEmployeeAction {
    type: string;
    payload: IEmployee;
}
export default IPromoteEmployeeAction;
