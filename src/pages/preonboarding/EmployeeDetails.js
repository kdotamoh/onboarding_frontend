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
import { H3, Container, Img, Wrapper, Section } from 'components/styled'
import { Hero } from 'views/layout'

import DetailsForm from './DetailsForm'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/employee-details-hero.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;
`

const BgImgContainer = styled.div`
  position: relative;
  min-height: 26.1rem;
  width: 100%;
`

// const DocumentsTable = styled(Table)`
//   td:first-child,
//   th:first-child {
//     /* font-weight: bold; */
//     font-family: MTNBrighterSans-Medium;
//   }
// `

const StyledSection = styled(Section)`
  ${space}
  ${layout}

  margin: 4rem 0;
  border-collapse: collapse;
  width: ${props => (props.width ? props.width : '100%')};

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
              <img className="column" src={heroImg} alt="" />
              <p
                className="column"
                dangerouslySetInnerHTML={{ __html: hero_text }}
              >
                {/* We’re super excited and preparing towards your first day. You
                will be taken through a three-day formal onboarding programme,
                after which your onboarding will continue within your
                department. */}
              </p>
            </div>
          </Hero>

          <Wrapper alignItems="center" width="40%">
            <StyledSection dangerouslySetInnerHTML={{ __html: content }}>
              {/* <h3>A. EMPLOYEE CONSENT</h3>
              <p>
                Kindly note that the following documents would be required from
                you for the below listed:
              </p>

              <ul>
                <li>
                  Sign–off as acceptance to complete the recruitment process.
                </li>
                <li>
                  Submission of relevant documents for employee file records.
                </li>
              </ul>
              <table>
                <thead>
                  <tr>
                    <th>Document Name</th>
                    <th>Purpose of Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Curriculum Vitae</td>
                    <td>Evidence of Information provided</td>
                  </tr>
                  <tr>
                    <td>
                      Personal bank account number, branch name and sort code
                    </td>
                    <td>For payment of salary</td>
                  </tr>
                  <tr>
                    <td>Educational Certificates</td>
                    <td>Evidence of Education Requirements</td>
                  </tr>
                  <tr>
                    <td>Proof of membership to any professional society</td>
                    <td>To access employee Benefits</td>
                  </tr>
                  <tr>
                    <td>Residential Information</td>
                    <td>Evidence</td>
                  </tr>
                  <tr>
                    <td>Driver’s License</td>
                    <td>Evidence</td>
                  </tr>
                  <tr>
                    <td>Marriage Certificate (If applicable)</td>
                    <td>For Family Benefits &amp; Medicals</td>
                  </tr>
                  <tr>
                    <td>Birth Certificate - children (If applicable)</td>
                    <td>For Family Benefits &amp; Medicals</td>
                  </tr>
                  <tr>
                    <td>Signed copy of LOA (Letter of Agreement)</td>
                    <td>Indicating Acceptance of Employment</td>
                  </tr>
                  <tr>
                    <td>Employee Conduct Pledge</td>
                    <td>Indicating Acceptance to MTN Culture</td>
                  </tr>
                  <tr>
                    <td>Employee Conflict of Interest Document</td>
                    <td>Indicating Acceptance to MTN Culture</td>
                  </tr>
                  <tr>
                    <td>
                      Employee Reference Check Details Proof Of Citizenship (
                      SSF Number , Passport Copy, National Identification Card)
                      Any applicable
                    </td>
                    <td>Reference Check</td>
                  </tr>
                  <tr>
                    <td>Confidentiality &amp; Non-Disclosure Agreement</td>
                    <td>Reference Check</td>
                  </tr>
                  <tr>
                    <td>Proof of address in case of application for SIM</td>
                    <td>Company Confidentiality</td>
                  </tr>
                  <tr>
                    <td>Employee Attendance/EBS Profile Details</td>
                    <td>For employee Benefit</td>
                  </tr>
                  <tr>
                    <td>Staff Family Line Application Details</td>
                    <td>For provision of Company ID card</td>
                  </tr>
                  <tr>
                    <td>Medical Insurance Forms</td>
                    <td>Employee Benefit</td>
                  </tr>
                  <tr>
                    <td>Mobile Money Request Details</td>
                    <td>Employee Benefit</td>
                  </tr>
                  <tr>
                    <td>
                      Two Passport sized Pictures each of employee and family
                      members
                    </td>
                    <td>For part of salary payment</td>
                  </tr>
                </tbody>
              </table>
              <p>
                MTN confirms that these information so provided would be used
                confidentially for staff purposes only and would be kept in
                Ghana.
              </p>
              <h3>Employee Declaration</h3>
              <p>
                In compliance with the National Data Protection Act, I hereby
                acknowledge and give the company permission to maintain my
                personal information in Ghana.
              </p> */}
            </StyledSection>

            <div style={{ marginBottom: '4rem' }}>
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
            </div>

            <div hidden={!this.state.checked}>
              <Section width="100%">
                <h3>B. EMPLOYEE DETAILS</h3>
                <p></p>
              </Section>

              <DetailsForm />
            </div>
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
