import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css'

const Juice = () => {
    return (
        <div className='snack'>
            <h1>I LOVE JUICE</h1>
            <h3><Link to='/'>back</Link></h3>
        </div>
    )
}

export default Juice;