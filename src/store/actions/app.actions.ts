import  AppTypes from '../types/appTypes.enum';

export const showModal = () => {
    return {type:  AppTypes.SHOW_MODAL}
};
export const hideModal = () => {
    return {type: AppTypes.HIDE_MODAL}
};
