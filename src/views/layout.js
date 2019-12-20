import styled from 'styled-components'

export const MIN_LEFT_WIDTH = 50
export const MAX_LEFT_WIDTH = 100
export const MIN_RIGHT_WIDTH = 50
export const MAX_RIGHT_WIDTH = 100

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
  display: grid;
  grid-template-columns: ${MIN_LEFT_WIDTH}vw ${MIN_RIGHT_WIDTH}vw
  grid-template-rows: 100%;
  grid-template-areas: 'left right';
`

export const SplitGridLeftColumn = styled.section`
  grid-area: left;
  background: red;
`

export const SplitGridRightColumn = styled.section`
  grid-area: right;
  background: blue;
`

export const CenterContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
