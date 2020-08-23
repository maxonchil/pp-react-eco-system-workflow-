import React from 'react';
import { connect, useSelector } from 'react-redux';
import './EmployeeList.scss';
import IEmployee from '../../interfaces/i-employee';
import { IRootStore } from '../../interfaces/i-root-store';
import Employee from '../Employee/Employee';

const EmployeeList = (): JSX.Element => {
    const employees = useSelector((store: IRootStore): IEmployee[] => store.employees);
    const employeesListElement = employees.map((employee: IEmployee )=> <Employee key={employee.id}
                                                                                                 id={employee.id}
                                                                                                 salary={employee.salary}
                                                                                                 position={employee.position}
                                                                                                 experience={employee.experience}
                                                                                                 isEmployeeCanBePromoted={employee.isEmployeeCanBePromoted}/> );
    return <div className='employee__list'>{employeesListElement}</div>
};

export default connect(null, null)(EmployeeList);
