import styled from 'styled-components'

import { NAV_HEIGHT } from '../constants'

export const FullPageGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'nav'
    'main';
`

export const GridMain = styled.main`
  grid-area: main;
`

export const SplitGrid = styled.div`
  height: 100vh;
  height: calc(
    100vh - ${props => (props.fullPage ? '0px' : `${NAV_HEIGHT}px`)}
  );
  display: grid;
  grid-template-columns: ${props => props.leftWidth}vw ${props =>
      props.rightWidth}vw;
  grid-template-rows: 100%;
  grid-template-areas: 'left right';
`

export const SplitGridLeftColumn = styled.section`
  grid-area: left;
  background: ${props => (props.background ? props.background : 'white')};
`

export const SplitGridRightColumn = styled.section`
  grid-area: right;
  background: ${props => (props.background ? props.background : 'white')};
  position: relative;
  display: flex;
  justify-content: center;
`

export const CenterContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
