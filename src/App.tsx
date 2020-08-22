import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import { connect, useDispatch, useSelector } from "react-redux";
import { IAppStore } from './interfaces/i-app-store';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Budget from './components/Budget/Budget';
import { paySalary } from './store/actions/budget.action';
import Alert from './components/shared/Alert/Alert';
import ModalHireDev from './components/ModalHireDev/ModalHireDev';

function App(): JSX.Element {
    const [isLoaded, changeLoadState] = useState(false);
    const appState = useSelector(({app}: {app: IAppStore}) => app);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isLoaded) {
            dispatch(paySalary())
        }
        changeLoadState(true);
    });
    const salaryPayedAlertText = 'Salary was payed to all employees';


    return (
        <div className='container'>
            <Header/>
            <Budget/>
            {appState.isAlertShowed && <Alert text={salaryPayedAlertText}/>}
            <EmployeeList/>
            {appState.isModalOpen && <ModalHireDev/>}
        </div>
    );
}

export default connect(null, null)(App);
