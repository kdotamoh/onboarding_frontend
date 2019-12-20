import React from 'react'
import styled from 'styled-components'

export const LoadingOverlay = styled.div`
  display: flex;
  flex: auto;
  align-self: stretch;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 100;
  background: rgba(0, 0, 0, 0.45);
`

export const LoadingSpinner = styled.p`
  color: red;
`

export const FullPageLoader = () => {
  return (
    <LoadingOverlay>
      <LoadingSpinner>"I'm loading"</LoadingSpinner>
    </LoadingOverlay>
  )
}
