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
} from 'components/styled'
import { Hero } from 'views/layout'
import { Sidebar } from 'components/navigation/SideNav'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/code_of_ethics_hero.svg'

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

export const LegalSection = styled(Section)`
  h2 {
    font-family: MTNBrighterSans-Regular;
    /* counter-reset: h3-counter; */

    /* &:before {
      counter-increment: h2-counter;
      content: counter(h2-counter) '. ';
    } */
  }

  h3 {
    font-family: MTNBrighterSans-Regular;
    /* counter-reset: section; */

    /* &:before {
      counter-increment: h3-counter;
      content: counter(h2-counter) '.' counter(h3-counter) ' ';
    } */
  }

  ol {
    list-style-type: none;
    /* counter-reset: section; */

    li {
      font-family: MTNBrighterSans-Light;
      font-size: 16px;
      padding-left: 6.5rem;
      margin-left: 0px;
      position: relative;

      /* &:before {
        display: block;
        position: absolute;
        left: 0;

        counter-increment: section;
        content: counter(h2-counter) '.' counter(h3-counter) '.'
          counters(section, '.') ' ';
      } */
    }
  }

  p {
    h3 {
      font-family: MTNBrighterSans-Light;
      font-size: 16px;
      /* counter-reset: h4-counter; */
      padding-left: 6rem;
      position: relative;

      /* &:before {
        display: block;
        position: absolute;
        left: 0;

        counter-increment: h3-counter;
        content: counter(h2-counter) '.' counter(h3-counter) ' ';
      } */
    }
  }

  p {
    h4 {
      font-family: MTNBrighterSans-Regular;
      /* counter-reset: h5-counter; */
      padding-left: unset;
      position: unset;
      color: #666666;

      /* &:before {
        display: unset;
        position: unset;
        left: unset;

        counter-increment: h4-counter;
        content: counter(h2-counter) '.' counter(h3-counter) '.'
          counter(h4-counter) ' ';
      } */
    }
  }

  h4 {
    font-family: MTNBrighterSans-Light;
    /* counter-reset: h5-counter; */
    padding-left: 6rem;
    position: relative;

    /* &:before {
      display: block;
      position: absolute;
      left: 0;

      counter-increment: h4-counter;
      content: counter(h2-counter) '.' counter(h3-counter) '.'
        counter(h4-counter) ' ';
    } */
  }

  h5 {
    font-family: MTNBrighterSans-Light;
    font-size: 16px;
    padding-left: 7rem;
    position: relative;

    /* &:before {
      display: block;
      position: absolute;
      left: 0;

      counter-increment: h5-counter;
      content: counter(h2-counter) '.' counter(h3-counter) '.'
        counter(h4-counter) '.' counter(h5-counter) ' ';
    } */
  }

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

class CodeEthics extends Component {
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
      navigate('/preonboarding/employee-details')
    }
  }

  render() {
    const { title } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { hero_text } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { introduction } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { compliance_with_laws_and_regulations } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { conflict_of_interest } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { communication_of_philosophy_to_third_parties } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { employment_equity } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { environmental_responsibility } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { political_support } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { company_funds_and_property } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { company_records } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { dealing_with_outside_persons_and_organisations } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { privacy_and_confidentiality } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { contravention_of_the_code } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { compliance_hotline } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore

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
                  items={['introduction', 'compliance', 'conflict-of-interest']}
                  currentClassName="is-current"
                >
                  <Sidebar>
                    <ul>
                      <li>
                        <a href="#introduction">Introduction</a>
                      </li>
                      <li>
                        <a href="#compliance">
                          Compliance with Laws and Regulations
                        </a>
                      </li>
                      <li>
                        <a href="#conflict-of-interest">Conflict of Interest</a>
                      </li>
                      <li>
                        <a href="#communication-to-third-party">
                          Communication of Philosophy to Third Parties
                        </a>
                      </li>
                      <li>
                        <a href="#employment-equity">Employment Equity</a>
                      </li>
                      <li>
                        <a href="#environmental-responsibility">
                          Environmental Responsibility
                        </a>
                      </li>
                      <li>
                        <a href="#political-support">Political Support</a>
                      </li>
                      <li>
                        <a href="#company-funds-and-property">
                          Company’s Funds and Property
                        </a>
                      </li>
                      <li>
                        <a href="#company-records">Company’s Records</a>
                      </li>
                      <li>
                        <a href="#dealing-with-outside-parties">
                          Dealing with Outside Persons and Organisations
                        </a>
                      </li>
                      <li>
                        <a href="#privacy-and-confidentiality">
                          Privacy and Confidentiality
                        </a>
                      </li>
                      <li>
                        <a href="#contravention-of-code">
                          Contravention of the Code
                        </a>
                      </li>
                      <li>
                        <a href="#compliance-hotline">Compliance Hotline</a>
                      </li>
                    </ul>
                  </Sidebar>
                </Scrollspy>
              </StickyBox>
            </Menu>
            <Main>
              <LegalSection
                id="introduction"
                dangerouslySetInnerHTML={{ __html: introduction }}
              ></LegalSection>
              <LegalSection
                id="compliance"
                dangerouslySetInnerHTML={{
                  __html: compliance_with_laws_and_regulations
                }}
              ></LegalSection>
              <LegalSection
                id="conflict-of-interest"
                dangerouslySetInnerHTML={{ __html: conflict_of_interest }}
              ></LegalSection>
              <LegalSection
                id="communication-to-third-party"
                dangerouslySetInnerHTML={{
                  __html: communication_of_philosophy_to_third_parties
                }}
              ></LegalSection>
              <LegalSection
                id="employment-equity"
                dangerouslySetInnerHTML={{ __html: employment_equity }}
              ></LegalSection>
              <LegalSection
                id="environmental-responsibility"
                dangerouslySetInnerHTML={{
                  __html: environmental_responsibility
                }}
              ></LegalSection>
              <LegalSection
                id="political-support"
                style={{
                  fontSize: '16px',
                  fontFamily: 'MTNBrighterSans-Light'
                }}
                dangerouslySetInnerHTML={{
                  __html: political_support
                }}
              ></LegalSection>
              <LegalSection
                id="company-funds-and-property"
                dangerouslySetInnerHTML={{
                  __html: company_funds_and_property
                }}
              ></LegalSection>
              <LegalSection
                id="company-records"
                dangerouslySetInnerHTML={{ __html: company_records }}
              ></LegalSection>
              <LegalSection
                id="dealing-with-outside-parties"
                dangerouslySetInnerHTML={{
                  __html: dealing_with_outside_persons_and_organisations
                }}
              ></LegalSection>
              <LegalSection
                id="privacy-and-confidentiality"
                dangerouslySetInnerHTML={{
                  __html: privacy_and_confidentiality
                }}
              ></LegalSection>
              <LegalSection
                id="contravention-of-code"
                dangerouslySetInnerHTML={{
                  __html: contravention_of_the_code
                }}
              ></LegalSection>
              <section
                id="compliance-hotline"
                dangerouslySetInnerHTML={{ __html: compliance_hotline }}
              ></section>

              <div>
                <label>
                  <input
                    style={{ marginTop: '5rem', marginRight: '1rem' }}
                    type="checkbox"
                    name="checked"
                    id="checked"
                    onChange={this.handleInput}
                  />
                  I have read and fully understood the MTN Code of Ethics.
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
CodeEthics.propTypes = {
  pageContent: PropTypes.object
}
export default connect(state => ({
  pageContent: state.pages.preonboardingPages.codeOfEthics
}))(CodeEthics)
