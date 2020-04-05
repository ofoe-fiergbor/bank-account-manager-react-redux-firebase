import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteAccount} from '../Redux/actions/actions'

export class Home extends Component {

    handleDeleteAccount = id =>{
        this.props.deleteAccount(id)
    }
    render() {
        return (
            <div>
                <table className='table table-striped tableCus' >
                    <thead>
                        <tr>
                            <th>Account Name</th>
                            <th>Account Number</th>
                            <th>Bank Name</th>
                            <th>Bank Branch</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.accounts.map((account) => {
                                return (
                                    <tr key={account.id}>
                                        <td>{account.accountName}</td>
                                        <td>{account.accountNumber}</td>
                                        <td>{account.bankName}</td>
                                        <td>{account.bankBranch}</td>
                                        <td>
                                            <Link to={'/editform/' + account.id} id='edit'>
                                                Edit
                                           </Link>
                                        </td>
                                        <td onClick={(id)=>this.handleDeleteAccount(account.id)} id='delete'>Delete</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        accounts: state.accountReducer
    }
}
export default connect(mapStateToProps, {deleteAccount})(Home)
