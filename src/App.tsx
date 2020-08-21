import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ModalHireDev from "./components/ModalHireDev/ModalHireDev";
import { useSelector } from "react-redux";
import { IAppStore } from './interfaces/i-app-store';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Budget from './components/Budget/Budget';

function App(): JSX.Element {
    const isModalOpen = useSelector(({app}: {app: IAppStore}) => app.isModalOpen);
    return (
        <div className='container'>
            <Header/>
            <Budget/>
            <EmployeeList/>
            {isModalOpen && <ModalHireDev/>}
        </div>
    );
}

export default App;
