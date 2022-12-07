import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css'

const VendingMachine = () => {

    return (
        <>
        <h1>welcome to The Vending Machine...</h1>
        <div className='choices'>
            <p>which snack would you like?</p>
            <h3><Link to='/candy'>Candy</Link></h3>
            <h3><Link to='/chips'>Chips</Link></h3>
            <h3><Link to='/juice'>Juice</Link></h3>
        </div>
        </>
    )
}

export default VendingMachine;