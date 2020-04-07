import React, { Component } from 'react'
import {addAccount} from '../Redux/actions/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


export class AddForm extends Component {

    addAccount = e =>{
        e.preventDefault()
        let account={
            id: Math.random().toString(36).substr(2,5),
            accountName: e.target.elements.accountName.value,
            accountNumber: e.target.elements.accountNumber.value,
            bankName: e.target.elements.bankName.value,
            bankBranch: e.target.elements.bankBranch.value,
        }
        this.props.addAccount(account)
        this.props.history.push('/')
    }
    render() {
        const {auth} = this.props;
        
        if(!auth.uid) return <Redirect to='/login'/>

        return (
            <form className='form_cus' onSubmit={this.addAccount}>
                <div>
                <div className="form-group">
                    <label>Account Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='accountName' placeholder="Account Name" required/>
                </div>
                <div className="form-group">
                    <label>Account Number</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" name='accountNumber' placeholder="Account Number" required/>
                </div>
                <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='bankName' placeholder="Bank Name" required />
                </div>
                <div className="form-group">
                    <label>Bank Branch</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='bankBranch' placeholder="Bank Branch" required />
                </div>
                <button type="submit" className="btn btn-default btnCus">Add Account</button>
                </div>
            </form>
        )
    }
}

const mstp = (state) =>{
    return {
        auth:state.firebase.auth
    }
}


export default connect(mstp, {addAccount})(AddForm)
