import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp, authenticateWithGoogle } from '../Redux/actions/authAction'

export class SignUp extends Component {
    handleSignUp = e => {
        e.preventDefault()
        const newUser={
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            password :e.target.elements.password.value
        }
        this.props.signUp(newUser)
    }

    render() {
        const { auth, authError, authenticateWithGoogle } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div>
                <form className='form_cus' onSubmit={this.handleSignUp}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name='firstName' placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input type="text" className="form-control" name='lastName' placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name='email' placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" />
                    </div>
                    <div>
                        <center><button type="submit" className="btn btn-default btnCus">Sign Up</button></center>
                        {authError? <p className='red'>{authError}</p>: null}
                    </div>
                </form>
                <center><button className="btn btn-default btnCus btnc2 " onClick={authenticateWithGoogle}>SignUp With Google</button></center>
            </div>
        )
    }
}
const mstp = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}


export default connect(mstp, {signUp, authenticateWithGoogle })(SignUp)
