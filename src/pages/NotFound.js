import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class NotFound extends Component {
  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        That page does not exist.{' '}
        <Link to="/onboarding/home">Go to dashboard</Link>
      </div>
    )
  }
}
