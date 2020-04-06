import React, { Component } from 'react'
import Home from './Home'
import AddForm from './AddForm'
import EditForm from './EditForm'
import Navbar from './Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'

export class BankAccountManager extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/addform' component={AddForm} exact/>
                    <Route path='/editform/:id' component={EditForm} exact/>
                    <Route path='/login' component={LogIn} exact/>
                    <Route path='/signup' component={SignUp} exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default BankAccountManager
