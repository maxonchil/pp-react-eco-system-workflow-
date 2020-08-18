import React from 'react';
import './Button.scss';
import { IButtonProps } from '../../interfaces/i-button-props';

const Button = ({text, handleClick}: IButtonProps) => {
    return <button type="button" onClick={handleClick} className="btn btn-primary">{text}</button>
};
export default Button;
