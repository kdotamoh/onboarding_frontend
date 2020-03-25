import styled from 'styled-components'
import { space } from 'styled-system'

import { NAV_HEIGHT } from '../constants'

import heroBg from 'images/bg_yellow_m.svg'

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
  min-height: 100vh;
  /* height: calc(
    100vh - ${props => (props.fullPage ? '0px' : `${NAV_HEIGHT}px`)}
  ); */
  display: grid;
  grid-template-columns: ${props => props.leftWidth}vw ${props =>
  props.rightWidth}vw;
  grid-template-rows: 100%;
  grid-template-areas: 'left right';
`

export const SplitGridLeftColumn = styled.section`
  ${space}

  grid-area: left;
  position: relative;
  background: ${props => (props.background ? props.background : 'transparent')};
`

export const SplitGridRightColumn = styled.section`
  ${space}

  grid-area: right;
  position: relative;
  background: ${props => (props.background ? props.background : 'transparent')};
  /* display: flex; */
  /* justify-content: center; */
`

export const CenterContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${heroBg});
  width: 100%;
  min-height: 55rem;
  background-size: contain;
  background-repeat: no-repeat;

  div {
    width: 70%;
    transform: translateY(-2.5rem);

    p {
      text-align: left;
      justify-content: center;
      /* font-size: 140%; */
      font-size: 2.2rem;
    }

    img {
      align-items: start;
    }
  }
`
