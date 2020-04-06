import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../Redux/actions/authAction'


export class LogIn extends Component {
    handleSubmit = e =>{
        e.preventDefault()
        let email = e.target.elements.email.value
        let password = e.target.elements.password.value
        this.props.signIn(email, password)
    }

    render() {
        return (
            <form className='form_cus' onSubmit={this.handleSubmit}>
                <div className='red text-center'>
                        {this.props.authError? this.props.authError: null}
                    </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' placeholder="Email" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" />
                </div>

                <div className='bc1'>
                    <button type="submit" className="btn btn-default btnCus">Login</button>
                    
                </div>
                <center><button className="btn btn-default btnCus btnc2 ">Login With Google</button></center>
            </form>
        )
    }
}

const mstp = state=>{
    return {
        auth:state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mstp, {signIn})(LogIn)
