import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <header>
                <div>
                    <h1>Bank Account Manager</h1>
                </div>
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
                </div>
            </header>
        )
    }
}

export default Navbar
