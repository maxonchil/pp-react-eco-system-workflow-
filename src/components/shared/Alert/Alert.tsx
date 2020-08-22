import React from "react";
import './Alert.scss';
import IAlertProps from '../../../interfaces/i-alert-props';

const Alert = ({text}:IAlertProps): JSX.Element => {
    return <div className="alert alert-primary" role="alert">
        {text}
    </div>
};

export default Alert;
