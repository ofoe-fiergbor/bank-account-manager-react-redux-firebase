import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class SignUp extends Component {
    render() {

        const {auth} = this.props
        if(auth.uid) return <Redirect to='/'/>
        return (
            <form className='form_cus'>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" />
                </div>
                <div>
                    <button type="submit" className="btn btn-default btnCus">Sign Up</button>
                    <button type="submit" className="btn btn-default btnCus">SignUp With Google</button>
                </div>
            </form>
        )
    }
}
const mstp = state =>{
    return {
        auth:state.firebase.auth
    }
}

export default connect(mstp)(SignUp)
