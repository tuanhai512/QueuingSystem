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
import { Setting } from './components/SettingPage/Setting';
import { AccountUser } from './components/AccountUserPage/AccountUser';
import chart from './components/DashboardPage/Chart/ChartWeek';
import { AddFacility } from './components/FacilitiesPage/addFacility';
import { DetailFacility } from './components/FacilitiesPage/detailFacility';
import { UpdateFacility } from './components/FacilitiesPage/updateFacility';
import { AddService } from './components/ServicePage/AddService';
import { DetailService } from './components/ServicePage/DetailService';
import { UpdateService } from './components/ServicePage/UpdateService';
import { AddNumber } from './components/NumberPage/AddNumber';
import { DetailNumber } from './components/NumberPage/DetailNumber';
import AddRole from './components/RolePage/AddRole';
import { AddAccount } from './components/AccountPage/AddAccount';
import { UpdateRole } from './components/RolePage/UpdateRole';
import { UpdateAccount } from './components/AccountPage/UpdateAccount';



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
      <Route path="/setting" component={Setting} />
      <Route path="/account-user" component={AccountUser}/>
      <Route path="/chart" component={chart}/>
      <Route path="/add-facility" component={AddFacility}/>
      <Route path="/detailFacility" component={DetailFacility}/>
      <Route path="/updateFacility" component={UpdateFacility}/>
      <Route path="/add-service" component={AddService}/>
      <Route path="/detailService" component={DetailService}/>
      <Route path="/updateService" component={UpdateService}/>
      <Route path="/addNumber" component={AddNumber}/>
      <Route path="/detailNumber" component={DetailNumber}/>
      <Route path="/addRole" component={AddRole}/>
      <Route path="/addAccount" component={AddAccount}/>
      <Route path="/updateRole" component={UpdateRole}/>
      <Route path="/updateAccount" component={UpdateAccount}/>
    </Switch>
    </BrowserRouter>
 
  );
}
}

export default App;
