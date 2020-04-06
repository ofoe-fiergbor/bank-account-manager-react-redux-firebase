/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../Redux/actions/authAction'
import { Link } from 'react-router-dom'

function LoggedInLinks(props) {
    return (
        <div className='nl'>
            <div className="nav">
                <div>
                    <Link to='/' id='nav-link1'>
                        <h3>Home</h3>
                    </Link>
                </div>
                <div >
                    <Link to='/addform' id='nav-link2'>
                        <h3> Add New Account</h3>
                    </Link>
                </div>
                <div id='nav-link4' >
                    <a onClick={props.signOut}>
                        <h3>Log Out</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { signOut })(LoggedInLinks)
