import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Account } from '../AccountPage/Account'

import { Role } from '../RolePage/Role'
import { User } from '../UserPage/User'


type Props = {}

export const Setting:FC = ({}: Props) => {
  return (
    <>

    <Switch>
      <Route path="/setting/role" component={Role}/>
      <Route path="/setting/account" component={Account}/>
      <Route path="/setting/user" component={User}/>
    </Switch>
  </>

  )
}
