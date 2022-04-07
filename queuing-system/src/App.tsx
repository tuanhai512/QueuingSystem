import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import {Login}  from './components/LoginPage/Login';
import ForgotPassword from './components/ForgotPage/ForgotPassword';
import SetNewPass from './components/SetNewPasswordPage/SetNewPass';
import Sidebar from './components/SideBar/SideBar';
import { Dashboard } from './components/DashboardPage/Dashboard';
import { Facilities } from './components/FacilitiesPage/Facilities';
import { Service } from './components/ServicePage/Service';
import { Number } from './components/NumberPage/Number';
import { Report } from './components/ReportPage/Report';
import { Role } from './components/RolePage/Role';
import { Account } from './components/AccountPage/Account';
import AccountUser from './components/AccountUserPage/AccountUser';



class App extends Component {
render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/forgot-password" component={ForgotPassword}/>
      <Route path="/new-password" component={SetNewPass}/>
      <Route path="/sidebar" component={Sidebar}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/facilities" component={Facilities}/>
      <Route path="/service" component={Service}/>
      <Route path="/number" component={Number}/>
      <Route path="/report" component={Report}/>
      <Route path="/role" component={Role}/>
      <Route path="/account-user" component={AccountUser}/>
    </Switch>
    </BrowserRouter>
 
  );
}
}

export default App;
