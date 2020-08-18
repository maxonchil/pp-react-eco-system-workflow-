import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ModalHireDev from "./components/ModalHireDev/ModalHireDev";
import { useSelector } from "react-redux";
import { IAppState } from './interfaces/i-app-state';

function App(): JSX.Element {
    const isModalOpen = useSelector(({app}: {app: IAppState}) => app.isModalOpen);
    return (
        <div className='container'>
            <Header/>
            {isModalOpen && <ModalHireDev/>}
        </div>
    );
}

export default App;
