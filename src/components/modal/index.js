import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.65);
`

const Pane = styled.div`
  position: fixed;
  z-index: 5000;
  background-color: white;
  min-width: 40%;
  max-height: 90%;
  border-radius: 3px;
  text-align: center;
  padding: 5rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`

export default class Modal extends Component {
  componentDidMount() {
    if (this.props.visible) {
      document.body.style.overflow = 'hidden'
    }
  }
  render() {
    return (
      <div style={{ visibility: this.props.visible ? 'visible' : 'hidden' }}>
        <Overlay></Overlay>
        <Pane>{this.props.children}</Pane>
      </div>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool
}
