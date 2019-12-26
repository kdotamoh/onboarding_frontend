import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  background: black;
  height: 300px;
  width: 250px;
  position: absolute;
  right: 0;
  transform: translateY(10rem);
`

export default class SideNav extends Component {
  render() {
    return <Wrapper>sidenav</Wrapper>
  }
}
