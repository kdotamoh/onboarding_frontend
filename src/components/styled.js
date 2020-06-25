import styled from 'styled-components'
import { space, color, layout, position, flexbox } from 'styled-system'

import { COLORS, SMALL_NAV_HEIGHT } from '../constants'

export const H1 = styled.h1`
  ${space}
  ${color}

  font-size: 3.6rem;
  font-family: MTNBrighterSans-Bold;
  line-height: 1;
`
H1.defaultProps = {
  color: COLORS.TWILIGHT_BLUE
}
export const H2 = styled.h2`
  ${space}
  ${color}

  font-size: 3rem;
  font-family: MTNBrighterSans-Bold;
`
H2.defaultProps = {
  color: COLORS.TWILIGHT_BLUE
}
export const H3 = styled.h3`
  ${space}
  ${color}

  text-align: center;
  font-size: 2.5rem;
  font-family: MTNBrighterSans-Bold;
`
H3.defaultProps = {
  color: COLORS.TWILIGHT_BLUE
}
export const H4 = styled.h4`
  ${space}
  ${color}

  font-size: 2rem;
  font-family: MTNBrighterSans-Bold;
`
H4.defaultProps = {
  color: COLORS.TWILIGHT_BLUE
}

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
  ${color}
  ${layout}

  cursor: pointer;
  font-size: 1.2rem;
  font-size: 1.8rem;
  font-family: MTNBrighterSans-Bold;
  color: ${props =>
    props.textColor === 'black'
      ? '#000'
      : '#fff'}; /* // Todo: Use styled system instead */
  background: ${props =>
    props.color === 'blue' ? COLORS.DEEP_AQUA : COLORS.MARIGOLD};
  background: ${props => props.disabled && '#bfbfbf'};
  padding: 1.5rem 4rem;
  border-color: ${props =>
    props.color === 'blue' ? COLORS.DEEP_AQUA : COLORS.MARIGOLD};
  border-color: ${props => props.disabled && '#bfbfbf'};

  z-index: 500;

  a {
    color: unset;
    text-decoration: unset;
  }
`

export const Logo = styled.img`
  ${layout}
  ${position}

  position: absolute;
  z-index: 1000;
`

export const Table = styled.table`
  ${space}
  ${layout}

  margin: 4rem 0;
  border-collapse: collapse;
  width: ${props => (props.width ? props.width : '100%')};
  font-size: 80%;

  thead tr {
    background: #ffcb09;

    th {
      font-weight: normal;
    }
  }

  td,
  th {
    ${props => (props.rowWidth ? `width: ${props.rowWidth};` : null)}

    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`

export const StripedTable = styled(Table)`
  width: 100%;
  /* border: transparent; */

  tr td,
  th {
    border: none;
  }

  tr:nth-child(even) {
    background-color: #fff5ce;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - ${SMALL_NAV_HEIGHT}rem);
  position: relative;
`

export const Wrapper = styled.div`
  ${layout}
  ${flexbox}

  display: flex;
  flex-direction: column;
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : null)}

  width: ${props => props.width};
`

export const Section = styled.section`
  padding-top: 2rem;
  margin-bottom: 4rem;
  ${layout}
  ${space}

  p {
  }

  ul {
  }

  li {
    margin-left: 2rem;
  }

  h2,
  h3 {
    font-family: MTNBrighterSans-Regular;
  }

  h4,
  h5 {
    font-family: MTNBrighterSans-Light;
  }
`
