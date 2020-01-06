import React, { Component } from 'react'
import { Router } from '@reach/router'

import Scrolltop from 'utils/scrolltop'
import Home from './Home'
import Events from './Events'
import Tasks from './Tasks'
import UserProfile from './UserProfile'

export default class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Scrolltop path="/">
          <Home path="/" />
          <Events path="/events" />
          <Tasks path="/tasks" />
          <UserProfile path="/profile" />
        </Scrolltop>
      </Router>
    )
  }
}
