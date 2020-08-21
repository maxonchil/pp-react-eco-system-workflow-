import React from 'react';
import './Budget.scss';
import { connect, useSelector } from 'react-redux';
import { IRootStore } from '../../interfaces/i-root-store';

const Budget = () => {
    const budget = useSelector((store:IRootStore) => store.budget.currentFirmBudget);
    return <div className='budget'>
        <div className='budget__title'>Firm budget is: <span className='budget__value'>{budget}</span></div>
    </div>
};
export default connect(null, null)(Budget);
