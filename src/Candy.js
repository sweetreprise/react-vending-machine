import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css'

const Candy = () => {
    return (
        <div className='snack'>
            <h1>CANDYYYY</h1>
            <h3><Link to='/'>back</Link></h3>
        </div>
    )
}

export default Candy;