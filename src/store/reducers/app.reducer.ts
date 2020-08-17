import { IAppState } from '../../interfaces/i-app-state';
import { IAppReducerProps } from '../../interfaces/i-app-reducer-props';
import  AppTypes  from '../types/appTypes.enum';

const initialState = {
    isModalOpen: false
};

const appReducer = (state = initialState, {type}: IAppReducerProps): IAppState => {
    switch (type) {
        case AppTypes.SHOW_MODAL:
            return {...state, isModalOpen: true};
        case AppTypes.HIDE_MODAL:
            return {...state, isModalOpen: false};
        default:
            return state;
    }
};

export default appReducer;
