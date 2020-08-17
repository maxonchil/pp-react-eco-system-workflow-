import React from 'react';
import ReactDOM from 'react-dom'
import "./ModalHireDev.scss";
import { useDispatch } from 'react-redux';
import { hideModal } from '../../store/actions/app.actions';

const ModalHireDev = (): JSX.Element => {
    const rootElement = document.getElementById('portal-root') as HTMLElement;
    const dispatch = useDispatch();
    const closeModal = () => dispatch(hideModal());

    return (ReactDOM.createPortal(
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Hire a new dev</h5>
                    <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>,
        rootElement))
};

export default ModalHireDev;
