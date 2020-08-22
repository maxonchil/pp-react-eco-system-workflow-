import IEmployee from './i-employee';

interface IAddEmployeeAction {
    type: string;
    payload: IEmployee[];
};
export default IAddEmployeeAction;
