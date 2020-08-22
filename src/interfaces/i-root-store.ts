import { IAppStore } from './i-app-store';
import IEmployee from './i-employee';
import IBudgetStore from './i-budget-store';

export interface IRootStore {
    app: IAppStore;
    employees: IEmployee[];
    budget: IBudgetStore;
}
