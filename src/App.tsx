import React, { useEffect } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ModalHireDev from "./components/ModalHireDev/ModalHireDev";
import { connect, useDispatch, useSelector } from "react-redux";
import { IAppStore } from './interfaces/i-app-store';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Budget from './components/Budget/Budget';
import { paySalary } from './store/actions/budget.action';

function App(): JSX.Element {
    const isModalOpen = useSelector(({app}: {app: IAppStore}) => app.isModalOpen);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(paySalary())});


    return (
        <div className='container'>
            <Header/>
            <Budget/>
            <EmployeeList/>
            {isModalOpen && <ModalHireDev/>}
        </div>
    );
}

export default connect(null, null)(App);
