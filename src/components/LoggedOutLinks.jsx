import React from 'react'
import { Link } from 'react-router-dom'


function LoggedOutLinks(props) {
    return (
        <div className = 'nl'>
            <div>
                <Link to='/login' id='nav-link3'>
                    <h3>LogIn</h3>
                </Link>
            </div>
            <div >
                <Link to='/signup' id='nav-link4'>
                    <h3>SignUp</h3>
                </Link>
            </div>
        </div>
    )
}

export default LoggedOutLinks
