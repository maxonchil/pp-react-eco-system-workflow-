import React from 'react';
import './Employee.scss';
import IEmployeeProps from '../../interfaces/i-employee-props';
import Button from '../shared/Button/Button';
import { connect, useDispatch } from 'react-redux';
import { promoteEmployee } from '../../store/actions/employee.actions';

const Employee = ({position, salary, experience, isEmployeeCanBePromoted,id}:IEmployeeProps) => {
    const dispatch = useDispatch();
    const buttonTextFireDev = 'Fire';
    const buttonTextPromoteDev = 'Promote';
    const handleClickFireDev =() => console.log('dev is fired');
    const handleClickPromoteDev = () => {dispatch(promoteEmployee(id))};
    return <div className="card">
            <div className="card-body">
                <p className="card-text"><b>id:</b> {id}</p>
                <p className="card-text">Position: {position}</p>
               <p className='card-text'>Employee salary: {salary}</p>
                <p className='card-text'>Employee experience: {experience}</p>
            </div>
        <Button text={buttonTextFireDev} handleClick={handleClickFireDev}/>
        {isEmployeeCanBePromoted && <Button text={buttonTextPromoteDev} handleClick={handleClickPromoteDev}/>}
    </div>
};

export default connect(null, null)(Employee);
