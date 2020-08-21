import React from 'react';
import './Employee.scss';
import IEmployeeProps from '../../interfaces/i-employee-props';
import Button from '../shared/Button/Button';

const Employee = ({role, salary}:IEmployeeProps) => {
    const buttonTextFireDev = 'Fire';
    const buttonTextPromoteDev = 'Promote';
    const handleClickFireDev =() => console.log('dev is fired');
    const handleClickPromoteDev =() => console.log('dev is promoted');
    return <div className="card">
            <div className="card-body">
                <p className="card-text">Position: {role}</p>
               <p className='card-text'>Employee salary: {salary}</p>
            </div>
        <Button text={buttonTextFireDev} handleClick={handleClickFireDev}/>
        <Button text={buttonTextPromoteDev} handleClick={handleClickPromoteDev}/>
    </div>
};

export default Employee;
