import  AppTypes from '../types/appTypes.enum';

export const showModal = () => {
    return {type:  AppTypes.SHOW_MODAL}
};
export const hideModal = () => {
    return {type: AppTypes.HIDE_MODAL}
};
export const showAlert = () => {
    return {type:  AppTypes.SHOW_ALERT}
};
export const hideAlert = () => {
    return {type: AppTypes.HIDE_ALERT}
};
