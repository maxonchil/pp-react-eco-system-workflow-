import React from 'react';
import { connect, useSelector } from 'react-redux';
import './EmployeeList.scss';
import IEmployee from '../../interfaces/i-employee';
import { IRootStore } from '../../interfaces/i-root-store';
import Employee from '../Employee/Employee';

const EmployeeList = (): JSX.Element => {
    const employees = useSelector((store: IRootStore): IEmployee[] => store.employee);
    const employeesListElement = employees.map((employee: IEmployee, index: number) => <Employee key={index}
                                                                                                 salary={employee.salary}
                                                                                                 role={employee.role}/>);
    return <div className='employee__list'>{employeesListElement}</div>
};

export default connect(null, null)(EmployeeList);