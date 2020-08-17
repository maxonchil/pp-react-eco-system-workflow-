import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ModalHireDev from "./components/ModalHireDev/ModalHireDev";
import {useSelector} from "react-redux";

function App() {
    const isModalOpen = useSelector(({app}) => app.isModalOpen);
    return (
        <div className='container'>
            <Header/>
            {isModalOpen && <ModalHireDev/>}
        </div>
    );
}
export default App;
