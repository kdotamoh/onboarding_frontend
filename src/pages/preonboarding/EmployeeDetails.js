import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

import {
  getInsuranceProviders,
  getFuelProviders,
  getDepartments,
  getDivisions
} from 'utils/get-thingy'

import { SmallNav, StepNav } from 'components/navigation'
import { H3, Container, Img, Section } from 'components/styled'
import { Hero } from 'views/layout'

import DetailsForm from './DetailsForm'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/employee-details-hero.svg'

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
  min-height: 26.1rem;
  width: 100vw;
`

// const DocumentsTable = styled(Table)`
//   td:first-child,
//   th:first-child {
//     /* font-weight: bold; */
//     font-family: MTNBrighterSans-Medium;
//   }
// `
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const StyledSection = styled(Section)`
  ${space}
  ${layout}

  margin: 4rem 0;
  border-collapse: collapse;
  width: ${props => (props.width ? props.width : '100%')};

  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
  }

  table {
    margin-bottom: 2rem;
    margin: 4rem 0;
    border-collapse: collapse;
    font-size: 80%;
  }

  thead tr {
    background: #ffcb09;

    th {
      font-weight: normal;
    }
  }

  td,
  th {
    /* ${props => (props.rowWidth ? `width: ${props.rowWidth};` : null)} */
    width: 50%;

    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  td:first-child,
  th:first-child {
    /* font-weight: bold; */
    font-family: MTNBrighterSans-Medium;
  }
`

class EmployeeDetails extends Component {
  state = {
    checked: false
  }

  componentDidMount() {
    getInsuranceProviders(this.props.token)
    getFuelProviders(this.props.token)
    getDivisions(this.props.token)
    getDepartments(this.props.token)
  }

  handleInput = event => {
    event.persist()
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  render() {
    const { title } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { hero_text } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    const { content } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore

    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem" dangerouslySetInnerHTML={{ __html: title }}></H3>
          <Hero>
            <div className="row">
              <img className="column hero__image " src={heroImg} alt="" />
              <p
                className="column hero__text"
                dangerouslySetInnerHTML={{ __html: hero_text }}
              ></p>
            </div>
          </Hero>

          <Wrapper alignItems="center" width="40%">
            <StyledSection
              dangerouslySetInnerHTML={{ __html: content }}
            ></StyledSection>

            <StyledSection style={{ marginBottom: '4rem' }}>
              <label>
                <input
                  style={{ marginRight: '1rem' }}
                  type="checkbox"
                  name="checked"
                  id="checked"
                  onChange={this.handleInput}
                />
                I have fully understood and agree to provide the above required
                information for the sole purpose for which it is intended.
              </label>
            </StyledSection>

            <StyledSection hidden={!this.state.checked}>
              <Section width="100%">
                <h3>B. EMPLOYEE DETAILS</h3>
                <p></p>
              </Section>

              <DetailsForm />
            </StyledSection>
          </Wrapper>

          <BgImgContainer>
            <BgImg src={bgImg} />
          </BgImgContainer>
        </Container>
      </div>
    )
  }
}
EmployeeDetails.propTypes = {
  token: PropTypes.string,
  pageContent: PropTypes.object
}

export default connect(state => ({
  token: state.token,
  pageContent: state.pages.preonboardingPages.employeeDetails
}))(EmployeeDetails)
