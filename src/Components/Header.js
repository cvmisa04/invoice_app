import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='jumbotron jumbotron-fluid bg-dark text-light'>
            <div className="container">
                <h1 className="display-4">Invoice APP</h1>
                <a href='/' style={{ textDecoration: 'none' }}><p className="lead">Home</p></a>

            </div>
        </div>
    )
}

export default Header