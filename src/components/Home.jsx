import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {deleteAccount, getAllAccounts} from '../Redux/actions/actions'


export class Home extends Component {

    handleDeleteAccount = id =>{
        this.props.deleteAccount(id)
    }
    componentDidMount = ()=>{
        this.props.getAllAccounts()
    }
    render() {
        const {auth, profile} =this.props;
        if(!auth.uid) return <Redirect to='/login'/>

        return (
            <div>
                <h2 className='howdy'>Howdy, {profile.firstName} !</h2>
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
                    {this.props.isLoading && <div className="loader loadPosition">Loading...</div>}
                    <tbody>
                        
                        {
                            this.props.accounts.map((account) => {
                                return (
                                    <tr key={account.id} className='tbody'>
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
    // console.log(state);
    return {
        accounts: state.accountReducer.accounts,
        isLoading: state.accountReducer.isLoading,
        auth:state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps, {deleteAccount, getAllAccounts})(Home)
