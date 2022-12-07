import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css'

const Chips = () => {
    return (
        <div className='snack'>
            <h1>OM NOM NOM CHIPS ARE YUMMY</h1>
            <h3><Link to='/'>back</Link></h3>
        </div>
    )
}

export default Chips;