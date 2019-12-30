import styled from 'styled-components'
import { space } from 'styled-system'

import { COLORS, SMALL_NAV_HEIGHT } from '../constants'

export const H1 = styled.h1`
  ${space}

  font-size: 3.6rem;
  font-family: MTNBrighterSans-Bold;
  line-height: 1;
  color: ${COLORS.TWILIGHT_BLUE};
`
export const H2 = styled.h2`
  ${space}

  font-size: 3rem;
  font-family: MTNBrighterSans-Bold;
  color: ${COLORS.TWILIGHT_BLUE};
`
export const H3 = styled.h3`
  ${space}

  font-size: 2.5rem;
  font-family: MTNBrighterSans-Bold;
  color: ${COLORS.TWILIGHT_BLUE};
`
export const H4 = styled.h4`
  ${space}

  font-size: 2rem;
  font-family: MTNBrighterSans-Bold;
  color: ${COLORS.TWILIGHT_BLUE};
`
export const UL = styled.ul`
  li {
    margin-left: 2rem;
  }
`
export const P = styled.p``
export const Img = styled.img``

export const Small = styled.small`
  ${space}

  font-size: 60%;
`

export const Button = styled.button`
  ${space}

  font-size: 1.2rem;
  font-size: 1.8rem;
  font-family: MTNBrighterSans-Bold;
  color: ${COLORS.WHITE};
  background: ${props =>
    props.color === 'blue' ? COLORS.DEEP_AQUA : COLORS.MARIGOLD};
  background: ${props => props.disabled && '#bfbfbf'};
  padding: 1.5rem 4rem;
  border-color: ${props =>
    props.color === 'blue' ? COLORS.DEEP_AQUA : COLORS.MARIGOLD};
  border-color: ${props => props.disabled && '#bfbfbf'};

  z-index: 500;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - ${SMALL_NAV_HEIGHT}rem);
  position: relative;
`
