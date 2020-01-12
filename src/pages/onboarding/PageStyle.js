import styled from 'styled-components'
import { COLORS } from '../../constants'

export default styled.div`
  z-index: 1000;
  position: relative;

  h3 {
    font-size: 2.5rem;
    font-family: MTNBrighterSans-Bold;
    color: ${COLORS.TWILIGHT_BLUE};

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 2rem;
    font-family: MTNBrighterSans-Regular;
    margin-bottom: 2rem;
  }
`
