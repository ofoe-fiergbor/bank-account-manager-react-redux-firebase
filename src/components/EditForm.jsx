import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editAccount} from '../Redux/actions/actions'

export class EditForm extends Component {
    editAccount = e =>{
        e.preventDefault()
        let account={
            id: this.props.match.params.id,
            accountName: e.target.elements.accountName.value,
            accountNumber: e.target.elements.accountNumber.value,
            bankName: e.target.elements.bankName.value,
            bankBranch: e.target.elements.bankBranch.value,
        }
        this.props.editAccount(account)
        this.props.history.push('/')
    }
    render() {
        const id = this.props.match.params.id
        let account = this.props.accounts.find(item=>{
            return item.id===id
        })
        return (
           
            <div>
            <form className='form_cus' onSubmit={this.editAccount}>
                <div>
                <div className="form-group">
                    <label>Account Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="accountName" defaultValue={account.accountName}/>
                </div>
                <div className="form-group">
                    <label>Account Number</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" name='accountNumber' defaultValue={account.accountNumber} />
                </div>
                <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='bankName' defaultValue={account.bankName} />
                </div>
                <div className="form-group">
                    <label>Bank Branch</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='bankBranch' defaultValue={account.bankBranch} />
                </div>
                <button type="submit" className="btn btn-default btnCus">Update Account</button>
                </div>
            </form>    
            </div>
        )
    }
}
const mstp = state =>{
    
    return{
        accounts :state.accountReducer.accounts
    }
}
export default connect(mstp, {editAccount})(EditForm)
