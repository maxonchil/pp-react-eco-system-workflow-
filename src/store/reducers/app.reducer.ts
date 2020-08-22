import { IAppStore } from '../../interfaces/i-app-store';
import { IAppReducerProps } from '../../interfaces/i-app-reducer-props';
import  AppTypes  from '../types/appTypes.enum';

const initialState = {
    isModalOpen: false,
    isAlertShowed: false
};

const appReducer = (state = initialState, {type}: IAppReducerProps): IAppStore => {
    switch (type) {
        case AppTypes.SHOW_MODAL:
            return {...state, isModalOpen: true};
        case AppTypes.HIDE_MODAL:
            return {...state, isModalOpen: false};
        case AppTypes.SHOW_ALERT: {

            return {...state, isAlertShowed: true}
        } case AppTypes.HIDE_ALERT: {
            return {...state, isAlertShowed: false}
        }
        default:
            return state;
    }
};

export default appReducer;
