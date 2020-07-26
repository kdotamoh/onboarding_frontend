import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import Scrollspy from 'react-scrollspy'
import StickyBox from 'react-sticky-box'

import { SmallNav, StepNav } from 'components/navigation'
import {
  H3,
  Container,
  Img,
  Button,
  // Small,
  Section
  // Table,
} from 'components/styled'
import { LegalSection } from './CodeEthics'
import { Hero } from 'views/layout'
import { Sidebar } from 'components/navigation/SideNav'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/conditions_service_hero.svg'

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

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'menu main';
  grid-template-columns: 30% 1fr;

  @media (max-width: 768px) {
    grid-template-areas: 'main';
    grid-template-columns: 100%;
  }
`

const Menu = styled.div`
  grid-area: menu;

  @media (max-width: 768px) {
    display: none;
    grid-template-areas: 'main';
    grid-template-columns: 100%;
  }
`

const Main = styled.div`
  grid-area: main;
  width: 60%;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`

class ConditionsService extends Component {
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
      navigate('/preonboarding/introduce-yourself')
    }
  }

  render() {
    const { title } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { benefits } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { conditions_of_engagement } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { general_conditions } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { hero_text } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { introduction } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { leave_or_abscence } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { leaving_the_service } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { medical_care } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { miscellaneous_conditions } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { working_hours_and_overtime } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore

    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem">{title}</H3>
          <Hero>
            <div className="row">
              <img className="column hero__image" src={heroImg} alt="" />
              <p
                className="column hero__text"
                dangerouslySetInnerHTML={{ __html: hero_text }}
              ></p>
            </div>
          </Hero>

          <Layout>
            <Menu>
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Scrollspy
                  items={['introduction', 'general-conditions', 'section-3']}
                  currentClassName="is-current"
                >
                  <Sidebar>
                    <ul>
                      <li>
                        <a href="#introduction">Introduction</a>
                      </li>
                      <li>
                        <a href="#general-conditions">General Conditions</a>
                      </li>
                      <li>
                        <a href="#conditions-of-engagement">
                          Conditions of Engagement
                        </a>
                      </li>
                      <li>
                        <a href="#working-hours-and-overtime">
                          Working Hours/Overtime
                        </a>
                      </li>
                      <li>
                        <a href="#benefits">Benefits</a>
                      </li>
                      <li>
                        <a href="#leave-or-absence">Leave or Absence</a>
                      </li>
                      <li>
                        <a href="#medical-care">Medical Care</a>
                      </li>
                      <li>
                        <a href="#leaving-the-service">Leaving the Service</a>
                      </li>
                      <li>
                        <a href="#miscellaneous-conditions">
                          Miscellaneous Conditions
                        </a>
                      </li>
                    </ul>
                  </Sidebar>
                </Scrollspy>
              </StickyBox>
            </Menu>
            <Main>
              <Section
                id="introduction"
                dangerouslySetInnerHTML={{ __html: introduction }}
              ></Section>
              <LegalSection
                id="general-conditions"
                dangerouslySetInnerHTML={{ __html: general_conditions }}
              ></LegalSection>
              <LegalSection
                id="conditions-of-engagement"
                dangerouslySetInnerHTML={{ __html: conditions_of_engagement }}
              ></LegalSection>
              <LegalSection
                id="working-hours-and-overtime"
                dangerouslySetInnerHTML={{
                  __html: working_hours_and_overtime
                }}
              ></LegalSection>
              <LegalSection
                id="benefits"
                dangerouslySetInnerHTML={{ __html: benefits }}
              ></LegalSection>
              <LegalSection
                id="leave-or-absence"
                dangerouslySetInnerHTML={{ __html: leave_or_abscence }}
              ></LegalSection>
              <LegalSection
                id="medical-care"
                dangerouslySetInnerHTML={{ __html: medical_care }}
              ></LegalSection>
              <LegalSection
                id="leaving-the-service"
                dangerouslySetInnerHTML={{ __html: leaving_the_service }}
              ></LegalSection>
              <LegalSection
                id="miscellaneous-conditions"
                dangerouslySetInnerHTML={{ __html: miscellaneous_conditions }}
              ></LegalSection>

              <div>
                <label>
                  <input
                    style={{ marginRight: '1rem' }}
                    type="checkbox"
                    name="checked"
                    id="checked"
                    onChange={this.handleInput}
                  />
                  I have read and fully understood the MTN Conditions of
                  Service.
                </label>
              </div>
            </Main>
          </Layout>

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
ConditionsService.propTypes = {
  pageContent: PropTypes.object
}
export default connect(state => ({
  pageContent: state.pages.preonboardingPages.conditionsOfService
}))(ConditionsService)
