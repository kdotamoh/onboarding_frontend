import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav, StepNav } from 'components/navigation'
import { H4, H3, Container, Img, Button } from 'components/styled'
import { Hero } from 'views/layout'
import { COLORS } from '../../constants'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/compliance_hero.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const BgImgContainer = styled.div`
  position: relative;
  min-height: 13rem;
  width: 100vw;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const Section = styled.section`
  width: 70rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;

  h4 {
    font-family: MTNBrighterSans-Regular;
  }

  img {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
  }

  ul {
    margin-left: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 85%;
    margin: 2rem auto;
  }
`

class Compliance extends Component {
  state = {
    checked: false
  }

  handleInput = event => {
    event.persist()
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  handleClick = () => {
    if (!this.state.checked) {
      alert('Please check the box to proceed.')
    } else {
      navigate('/preonboarding/code-of-ethics')
    }
  }

  render() {
    const { pageContent } = this.props ? this.props : []

    const header = pageContent
      ? pageContent.find(section => section.order === 0)
      : {}
    const sections = pageContent
      ? pageContent.filter(section => section.order > 0)
      : []
    const sortedSections = sections
      ? sections.sort((a, b) => (a.order > b.order ? 1 : -1))
      : []

    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem">Compliance &amp; Governance</H3>
          <Hero>
            <div className="row">
              <img className="column hero__image" src={heroImg} alt="" />
              <p
                className="column hero__text"
                dangerouslySetInnerHTML={{ __html: header.content }}
              ></p>
            </div>
          </Hero>

          <Wrapper width="50%">
            {sortedSections &&
              sortedSections
                // .filter(section => section.order > 0)
                .map((section, id) => (
                  <Section key={id}>
                    <H4 color={COLORS.DARKER_GREYISH_BROWN}>{section.title}</H4>
                    <div
                      css={`
                        height: 10rem, 
                        width: 100%;

                        display: flex;
                        justify-content: center;
                      `}
                    >
                      <img
                        css={`
                          height: auto;
                          max-width: 10rem;
                        `}
                        alt=""
                        src={section.image}
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    ></div>
                  </Section>
                ))}

            <Section>
              <div>
                <label>
                  <input
                    style={{ marginRight: '1rem' }}
                    type="checkbox"
                    name="checked"
                    id="checked"
                    onChange={this.handleInput}
                  />
                  I have read and fully understood the MTN Code of Ethics.
                </label>
              </div>
            </Section>
          </Wrapper>
          <Button
            // disabled={!this.state.checked}
            color="blue"
            onClick={this.handleClick}
            my="5rem"
          >
            Next Step &gt;
          </Button>
          <BgImgContainer>
            <BgImg src={bgImg} />
          </BgImgContainer>
        </Container>
      </div>
    )
  }
}
Compliance.propTypes = {
  pageContent: PropTypes.array
}

export default connect(state => ({
  pageContent: state.pages.preonboardingPages.compliance
}))(Compliance)
