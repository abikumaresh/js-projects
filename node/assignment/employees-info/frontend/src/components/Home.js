import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return ( 
        <div>
            <Link to='/employees/home'> Home </Link> | 
            <Link to='/employees/services'> Services </Link> &nbsp;&nbsp;&nbsp;&nbsp;

            <Link to='/login'> Logout </Link>

            <h3> This is the Home Page </h3>
        </div>
    )
}