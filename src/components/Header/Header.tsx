import React from 'react';
import "./Header.scss"
import Button from '../shared/Button/Button';
import { connect, useDispatch } from 'react-redux';
import { showModal } from '../../store/actions/app.actions';
import EmployeeSalaries from '../ModalHireDev/employee-salaries';


const Header = (): JSX.Element => {
    // console.log(typeof EmployeeSalaries['JUNIOR'])
    const buttonText = 'Hire dev';
    const dispatch = useDispatch();

    return (<div className="header">
        <Button text={buttonText} handleClick={() => dispatch(showModal())}/>
    </div>)
};

export default connect(null, null)(Header);
