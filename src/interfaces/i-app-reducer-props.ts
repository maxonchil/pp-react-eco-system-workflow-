import { IAppStore } from './i-app-store';

export interface IAppReducerProps {
    state: IAppStore
    type:string;
}
