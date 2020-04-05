import React, { Component } from 'react'
import Home from './Home'
import AddForm from './AddForm'
import EditForm from './EditForm'
import Navbar from './Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export class BankAccountManager extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/addform' component={AddForm} />
                    <Route path='/editform/:id' component={EditForm} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default BankAccountManager
