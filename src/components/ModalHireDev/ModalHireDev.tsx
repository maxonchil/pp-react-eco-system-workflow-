import React, { ChangeEvent } from 'react';
import ReactDOM from 'react-dom'
import "./ModalHireDev.scss";
import { connect, useDispatch } from 'react-redux';
import { hideModal } from '../../store/actions/app.actions';
import EMPLOYEES from '../../data/employees';
import { addEmployee } from '../../store/actions/employee.actions';
import IEmployeePosition from '../../interfaces/i-employee-position';

const ModalHireDev = (): JSX.Element => {
    const closeModal = () => dispatch(hideModal());
    const dispatch = useDispatch();
    let selectedPosition: keyof IEmployeePosition;
    const rootPortalElement = document.getElementById('portal-root') as HTMLElement;
    const defaultDropDownValue = 'Select developer lever qualification';
    const iterateEmployeesPositions = (employeesPositions: any) => {
        const elements = [];
        let i = 0;
        for (let positions in employeesPositions) {
            if(employeesPositions.hasOwnProperty(positions)) {
                elements.push(<option value={employeesPositions[positions].value} key={i}>{employeesPositions[positions].key}</option>);
                i++;
            }
        }
        return elements;
    };
    const handleClick = (): void => {
        if (!selectedPosition) {
            return;
        }
        dispatch(addEmployee(selectedPosition));
        dispatch(hideModal());
    };

    return (ReactDOM.createPortal(
        <div className='modal'>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Hire a new dev</h5>
                    <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                </div>
                <select className="custom-select" defaultValue={defaultDropDownValue}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => selectedPosition = event.target.value as keyof IEmployeePosition}>
                    <option value={defaultDropDownValue} disabled>{defaultDropDownValue}</option>
                    {iterateEmployeesPositions(EMPLOYEES)}
                </select>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                </div>
            </div>
        </div>
        </div>,
        rootPortalElement))
};

export default connect(null, null)(ModalHireDev);
