/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'

export class Navbar extends Component {

    render() {
        const {auth} = this.props
        
        const link = auth.uid ? <LoggedInLinks/> : <LoggedOutLinks/>

        return (
            <header>
                <div>
                    <div>
                        <h1>Bank Account Manager</h1>
                    </div>
                    <div>
                        {link}
                    </div>
                </div>
            </header>
        )
    }
}
const mstp = state => {
    // console.log(state);
    return {
        auth: state.firebase.auth
    }
}


export default connect(mstp)(Navbar)
