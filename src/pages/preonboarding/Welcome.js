import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { COLORS } from '../../constants'
import { Img } from 'components/styled'
// import { CenterContent } from 'views/layout'
import { H1, P, Button } from 'components/styled'

import bgImg from 'images/bg_topright.svg'
import heroImg from 'images/silhouettes.svg'
import logo from 'images/mtn_logo.svg'

const HeroH1 = styled(H1)`
  position: relative;
  z-index: 500;
  color: ${COLORS.DARKER_GREYISH_BROWN};
`

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  right: 0;
  align-self: flex-end;

  @media (max-width: 768px) {
    width: 20rem;
    height: auto;
  }
`

const HeroImg = styled(Img)`
  position: relative;
  z-index: 1000;
  transform: translateX(-15rem);

  @media (max-width: 768px) {
    transform: unset;
  }
`

const Paragraph = styled(P)`
  position: relative;
  z-index: 500;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  line-height: 1.8;
`

const Logo = styled.img`
  position: absolute;
  z-index: 1000;
  max-width: 6rem;
  left: 8rem;
  top: 1rem;

  @media (max-width: 768px) {
    left: 2rem;
  }
`

const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }

  .section {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      width: 100%;
      min-height: 50%;
    }
  }
`

const Content = styled.div`
  transform: translateX(15rem);
  @media (max-width: 768px) {
    transform: unset;
    margin-top: 10rem;
  }
`

class Welcome extends Component {
  nextPage = () => {
    navigate('/preonboarding/info')
  }

  render() {
    const { first_name } = this.props.user
    return (
      <Layout fullPage leftWidth={40} rightWidth={60}>
        <Logo src={logo} alt="" />
        <div className="section" style={{ backgroundColor: COLORS.MARIGOLD }}>
          <Content>
            <HeroH1>
              Hello, {first_name}!
              <br />
              Welcome aboard
            </HeroH1>
            <Paragraph>
              We are excited to have you join the Y’ello team here at MTN. We
              can’t wait for you to start. We’ve included some helpful
              information and ask that you complete all the required
              documentation, so you can hit the ground running on your first
              day.
            </Paragraph>
            <Button onClick={this.nextPage} fontSize={1.6} color="blue">
              Let's begin your journey &gt;
            </Button>
          </Content>
        </div>
        <div className="section" style={{ backgroundColor: COLORS.MARIGOLD }}>
          <div>
            <HeroImg src={heroImg} />
          </div>
          <BgImg src={bgImg} />
        </div>
      </Layout>
    )
  }
}
Welcome.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  })
}
export default connect(state => ({
  user: state.user
}))(Welcome)
