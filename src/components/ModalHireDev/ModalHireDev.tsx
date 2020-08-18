import React, { ChangeEvent } from 'react';
import ReactDOM from 'react-dom'
import "./ModalHireDev.scss";
import { useDispatch } from 'react-redux';
import { hideModal } from '../../store/actions/app.actions';
import ROLES from '../../data/employeeRoles';

const ModalHireDev = (): JSX.Element => {
    const closeModal = () => dispatch(hideModal());
    const dispatch = useDispatch();
    const iterateRoles = (roles: any) => {
        const elements = [];
        for (let role in roles) {
            elements.push( <option value={roles[role].value}>{roles[role].key}</option>)
        }
        return elements;
    };
    const rootPortalElement = document.getElementById('portal-root') as HTMLElement;
    const defaultDropDownValue = 'Select developer lever qualification';
    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        console.log(event.target.value)
    }

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
                        onChange={(event) => handleChange(event)}>
                    {iterateRoles(ROLES)}
                    {/*<option value={defaultDropDownValue} disabled>{defaultDropDownValue}</option>*/}
                    {/*<option value={EmployeesRoles.JUNIOR} className="dropdown-item">Junior</option>*/}
                    {/*<option value={EmployeesRoles.MIDDLE} className="dropdown-item">Middle</option>*/}
                    {/*<option value={EmployeesRoles.SENIOR} className="dropdown-item">Senior</option>*/}
                    {/*<option value={EmployeesRoles.MANAGER} className="dropdown-item">Manager</option>*/}
                </select>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>,
        rootPortalElement))
};

export default ModalHireDev;
