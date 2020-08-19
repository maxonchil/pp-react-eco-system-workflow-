import React, { ChangeEvent } from 'react';
import ReactDOM from 'react-dom'
import "./ModalHireDev.scss";
import { connect, useDispatch } from 'react-redux';
import { hideModal } from '../../store/actions/app.actions';
import ROLES from '../../data/employees';
import { addEmployee } from '../../store/actions/employee.actions';

const ModalHireDev = (): JSX.Element => {
    const closeModal = () => dispatch(hideModal());
    const dispatch = useDispatch();
    let selectedRole: string;
    const rootPortalElement = document.getElementById('portal-root') as HTMLElement;
    const defaultDropDownValue = 'Select developer lever qualification';
    const iterateEmployeesRoles = (employeesRoles: any) => {
        const elements = [];
        let i = 0;
        for (let role in employeesRoles) {
            elements.push(<option value={employeesRoles[role].value} key={i}>{employeesRoles[role].key}</option>);
            i++;
        }
        return elements;
    };
    const handleClick = (): void => {
        if (!selectedRole) {
            return;
        }
        dispatch(addEmployee(selectedRole));
    };

    return (ReactDOM.createPortal(
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Hire a new dev</h5>
                    <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                </div>
                <select className="custom-select" defaultValue={defaultDropDownValue}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => selectedRole = event.target.value}>
                    <option value={defaultDropDownValue} disabled>{defaultDropDownValue}</option>
                    {iterateEmployeesRoles(ROLES)}
                </select>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                </div>
            </div>
        </div>,
        rootPortalElement))
};

export default connect(null, null)(ModalHireDev);
