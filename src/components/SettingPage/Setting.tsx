import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Account } from '../AccountPage/Account'

import { Role } from '../RolePage/Role'
import { Diary } from '../DiaryPage/Diary'


type Props = {}

export const Setting:FC = ({}: Props) => {
  return (
    <>

    <Switch>
      <Route path="/setting/role" component={Role}/>
      <Route path="/setting/account" component={Account}/>
      <Route path="/setting/diary" component={Diary}/>
    </Switch>
  </>

  )
}
