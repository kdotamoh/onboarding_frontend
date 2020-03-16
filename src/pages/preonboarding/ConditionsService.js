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
  Section,
  // Table,
  StripedTable
} from 'components/styled'
import { LegalSection } from './CodeEthics'
import {
  Hero,
  SplitGridRightColumn,
  SplitGridLeftColumn,
  SplitGrid
} from 'views/layout'
import { Sidebar } from 'components/navigation/SideNav'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/conditions_service_hero.svg'

// import { COLORS } from '../../constants'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`

const BgImgContainer = styled.div`
  position: relative;
  min-height: 13rem;
  width: 100%;
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
              <img className="column" src={heroImg} alt="" />
              <p
                className="column"
                dangerouslySetInnerHTML={{ __html: hero_text }}
              >
                {/* As an employee, you have the right to workplace terms and
                conditions that are fair and non-discriminatory. We’d like you
                to take some time to read the Conditions of Service.
                <Small mt="5rem">Last modified: November 13, 2017</Small> */}
              </p>
            </div>
          </Hero>

          <SplitGrid leftWidth={30} rightWidth={70} id="split-grid">
            <SplitGridLeftColumn>
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Scrollspy
                  items={['introduction', 'general-conditions', 'section-3']}
                  currentClassName="is-current"
                  rootEl="#split-grid"
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
            </SplitGridLeftColumn>
            <SplitGridRightColumn>
              <div style={{ width: '60%' }}>
                <Section
                  id="introduction"
                  dangerouslySetInnerHTML={{ __html: introduction }}
                >
                  {/* <h3>
                    A. Definitions In this document, unless otherwise
                    stipulated,
                  </h3>
                  <strong>“Compensation and Benefits Policy”</strong> means
                  Scancom PLC’s Benefit Policy as reviewed from time to time
                  <br />
                  <strong>“Company”</strong> <br />
                  shall mean Scancom PLC
                  <strong>“Conditions”</strong> shall refer to these Conditions
                  of Service.
                  <br />
                  <strong>“Disciplinary Code”</strong> shall refer to the
                  Disciplinary Code of Scancom PLC (MTN Ghana) which is applied
                  in all cases involving disciplinary action and the termination
                  of employment for unacceptable or unlawful behaviour. Its
                  implementation is essential for the efficient running of the
                  Company’s business, the safety and fair treatment of its
                  employees and sound industrial relations, and which forms an
                  integral part of the Employee’s contract of employment.
                  <br />
                  <strong>“Employee”</strong> shall refer to both male and
                  female permanent workers of the Company.
                  <br />
                  <strong>“Family”</strong> means an Employee, one nominated
                  spouse and four (4) children under the age of 21 years.
                  <br />
                  <strong>“Separation Checklist”</strong> shall refer to the
                  final Clearance Form that a departing Employee is required to
                  fill as evidence that he is in no way indebted to the Company.
                  <br />
                  <strong>“Working Days”</strong> exclude Saturdays, Sundays and
                  Statutory Public Holidays.
                  <p>
                    Supporting and related references include all related
                    policies, processes, procedures and standards.
                  </p>
                  <p>
                    Reference in this document to the “male gender” shall also
                    apply to the “female gender”.
                  </p>
                  <h3>B. Policy Maintenance</h3>
                  <p>
                    This Policy is required to be reviewed by the domain owner
                    and approved by the relevant stakeholder as and when
                    applicable in order to maintain its relevance and
                    applicability.
                  </p>
                  <h3>C. Policy Maintenance</h3>
                  <p>
                    This Policy is required to be reviewed by the domain owner
                    and approved by the relevant stakeholder as and when
                    applicable in order to maintain its relevance and
                    applicability.
                  </p>
                  <h3>D. POLICY COMPLIANCE</h3>
                  <p>The Policy is applicable to MTN permanent employees.</p>
                  <h3>E. RATIONALE</h3>
                  <p>
                    The Conditions of Service document is a general document
                    applicable to staff with the intention to inform and educate
                    them on their conditions of employment.
                  </p> */}
                </Section>
                <LegalSection
                  id="general-conditions"
                  dangerouslySetInnerHTML={{ __html: general_conditions }}
                >
                  {/* <h2>GENERAL CONDITIONS</h2>
                  <p>
                    MTN is an employer of choice, an equal employer and does not
                    discriminate against any person on grounds of gender, race,
                    colour, ethnic origin, religion, creed, social or economic
                    status, disability or political affiliations.
                  </p>
                  <p>
                    1.1 The rules embodied in this document represent the Terms
                    and Conditions of Service of employees of Scancom PLC
                    (hereinafter referred to as the Company). 1.2 Except in
                    cases where the rules are found to be at variance with the
                    specific terms and conditions of service of employees
                    employed under special agreements with the Company, the
                    rules shall apply to all members of staff of the Company.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="conditions-of-engagement"
                  dangerouslySetInnerHTML={{ __html: conditions_of_engagement }}
                >
                  {/* <h2>CONDITIONS OF ENGAGEMENT</h2>
                  <h3>Medical Examination</h3>
                  <p>
                    Appointees may be subject to medical fitness checks.
                    Pre-employment physical examination as well as medical
                    check-up may be provided by the Company as and when the
                    Company deems fit.
                  </p>
                  <h3>Letter of Appointment</h3>
                  <h4>
                    The Company shall issue a letter of appointment to all new
                    employees which shall indicate among other things, the
                    effective start date, position, salary, probation period and
                    the location of employment.
                  </h4>
                  <h4>
                    In addition, a copy of the Conditions of Service shall be
                    given on engagement to all new entrants.
                  </h4>
                  <h4>
                    The Employee shall also sign the appropriate portion of the
                    letter indicating acceptance of the appointment or otherwise
                    and return copies except the original to the Company.
                  </h4>

                  <h3>Probation</h3>

                  <h4>
                    All newly recruited Employees (Internal or External
                    Candidates) will undergo a probationary period of as
                    follows:
                    <Table mb="2rem" width="70%">
                      <thead>
                        <tr>
                          <th>MTN Level</th>
                          <th>Probation Period</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Levels 1 &amp; 2</td>
                          <td>3 months</td>
                        </tr>
                        <tr>
                          <td>Levels 3 &amp; 3H</td>
                          <td>3 months</td>
                        </tr>
                        <tr>
                          <td>Levels 4 &amp; 5</td>
                          <td>6 months</td>
                        </tr>
                      </tbody>
                    </Table>
                  </h4>

                  <h4>
                    For employees in Levels 1 to 3H, if the employee’s
                    performance is unsatisfactory during the probation period,
                    the probation may be extended for another period not
                    exceeding three (3) months with the prior approval of the
                    Functional Executive and Human Resource Executive.
                  </h4>
                  <h4>
                    Where an employee in Level 4 or 5 does not perform
                    satisfactorily during the probation period, the probation
                    period shall not be extended unless it is specifically
                    requested by the employee. The grant of any such extension
                    shall be at the sole discretion of management and shall not
                    be deemed to be a firm offer of employment.
                  </h4>
                  <h4>
                    Probation feedback will be obtained from line manager and
                    subordinates and in the event where there are no
                    subordinates, feedback will be obtained from colleagues.
                  </h4>
                  <h4>
                    At part of the requirements to be considered for
                    confirmation on all levels, the individual should neither be
                    undergoing a disciplinary process nor have an active
                    disciplinary sanction in place.
                  </h4>

                  <h3>Appraisal</h3>

                  <h4>
                    Employees shall be appraised periodically as will be
                    determined by the Company and the result discussed with them
                    by their Superiors.
                  </h4>
                  <h4>
                    All merit salary increases shall be based on the Employee’s
                    performance appraisal results.
                  </h4>
                  <h4>
                    All promotions shall be subject to a vacancy/opening and
                    successful interview results.
                  </h4>

                  <h3>Salary</h3>
                  <h4>Salaries shall be paid on monthly basis in arrears.</h4>
                  <h4>
                    Deductions by statutory requirement or repayment due to the
                    Employer in respect of salary advance lawfully granted to
                    Employee shall be made at source from their monthly pay
                    packet.
                  </h4>

                  <h3>Service and Place of Employment</h3>
                  <h4>
                    Whilst in the employment of the Company the Employee shall
                    serve the Company in such capacity as the Company may direct
                    and in accordance with these conditions and at such stations
                    in Ghana or other Operating Companies forming part of the
                    MTN Group as the Company may from time to time determine and
                    require.
                  </h4>
                  <h4>
                    An Employee may request for transfer from one station to
                    another on very good reasons and subject to availability of
                    vacancy at the intended location. The Company may grant
                    consideration to the request and shall within one month of
                    receiving the request for transfer provide a written
                    response to the Employee.
                  </h4>
                  <h4>
                    In the event of a transfer, transfer notice shall be served
                    on the Employee, at least thirty (30) days before the date
                    of reporting at the new station except in an emergency.
                  </h4> */}
                </LegalSection>
                <LegalSection
                  id="working-hours-and-overtime"
                  dangerouslySetInnerHTML={{
                    __html: working_hours_and_overtime
                  }}
                >
                  {/* <h2>WORKING HOURS/OVERTIME</h2>
                  <h3>Working Hours</h3>
                  <h4>
                    There shall be a maximum of forty (40) hours of work to be
                    performed within a week of five (5) working days exclusive
                    of lunch hours.
                  </h4>
                  <h4>
                    The Company, at the Chief Executive Officer’s discretion,
                    may regulate the hours of work in accordance with the
                    requirements of each local condition.
                  </h4>
                  <h4>
                    Subject to prior written approval from the Line Manager and
                    the relevant Divisional Executive, an Employee may opt for
                    any of the time slots on the flexi-hours schedule. The Line
                    Manager shall ensure that the allocated flexi-hours approved
                    for an Employee in the department enables business
                    continuity.
                  </h4>
                  <h4>
                    Each Employee shall be entitled to an hour’s break for lunch
                    each day which hour shall normally be between 11:30 and
                    15:00 hours.
                  </h4>

                  <h3>Overtime</h3>
                  <h4>
                    An Employee who is required to work in excess of the normal
                    working hours and or work full day on Saturday, Sunday or
                    rest days and public holidays shall be rewarded as follows:
                  </h4>
                  <h4>Working days - Time</h4>
                  <h4>Saturday - Time and three quarter</h4>
                  <h4>
                    Sunday/Holidays - Double Time These extra hours worked need
                    to be have been pre-approved and finally approved by the
                    Line Manager before being submitted to Human Resources for
                    the necessary processes to be effected.
                  </h4>
                  <h4>
                    An inconvenience allowance will be paid to staff not
                    eligible to overtime as per the current Compensation &amp;
                    Benefits policy.
                  </h4>
                  <h3>Public Holidays</h3>
                  <p>
                    Public Holidays recognized by the Company are those so
                    declared under the Public Holiday Act 2001 (Act 601) of
                    Ghana and those declared by the government of Ghana from
                    time to time.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="benefits"
                  dangerouslySetInnerHTML={{ __html: benefits }}
                >
                  {/* <h2>Benefits</h2>
                  <h3>Salary Advance</h3>
                  <h4>
                    Salary advance may be granted to staff who have been
                    employed a minimum of 12 months with the Company at a
                    minimum of a month’s repayment period at level based maximum
                    salary advance limits. The level based limits ensure that
                    the company conforms to maximum monthly deduction
                    stipulations.
                  </h4>
                  <h4>
                    The Company may grant an interest free salary advance to
                    Employees to enable them to meet urgent financial
                    obligations.
                  </h4>
                  <h4>
                    The amount and period of repayment of the salary advance and
                    any other conditions shall be based on the discretion of the
                    Company and shall be stipulated by the existing Compensation
                    and Benefits Policy.
                  </h4>
                  <h4>
                    The Employee shall undertake to repay the salary advance
                    within the specified period through deductions at source and
                    in the event of termination of employment, to repay whole or
                    the balance outstanding immediately by cash or through
                    deduction at source from salary or any other entitlements.
                  </h4>
                  <h4>
                    Request for salary advance shall be made through the
                    automated BMC on portal and must specify the amount and
                    purpose of the request.
                  </h4>

                  <h3>Provident Fund and Pension scheme</h3>

                  <h4>
                    The Company shall maintain a Provident Fund (the “Fund”) for
                    the improved welfare of the staff of the Company as directed
                    by the National Pensions Regulatory Authority under the
                    Three Tier Pension’s Scheme.
                  </h4>
                  <h4>
                    Employees of the Company are automatically made members of
                    the Pension Scheme in accordance with the provisions of the
                    law.
                  </h4>
                  <h4>
                    Every Employee participating in the Fund shall subscribe to
                    and agree to be bound by the rules of the fund.
                  </h4>
                  <h4>
                    For the avoidance of all doubt, the Company in the absence
                    of any indebtedness by the Employee to the Company shall pay
                    to the Employee the total sum representing the total
                    contribution by Employee and employer to the Fund upon
                    resignation/ retirement. Where the Employee’s employment is
                    terminated by summary dismissal, the Employee shall only be
                    entitled to such part of the total contributions
                    representing his/her personal contribution to the Fund.
                  </h4>
                  <h4>
                    The National Pensions Act 2008 (Act 766) as amended from
                    time to time and all applicable laws on pensions shall apply
                    to every Employee.
                  </h4>

                  <h3>Out of Station Expenses</h3>

                  <h4>
                    An Employee who undertakes an authorized trip outside his
                    recognized station will be reimbursed his out of station
                    expenses on production of relevant receipts from authorized
                    hotels etc. provided the amount involved is within the
                    Company’s approved limits.
                  </h4>
                  <h4>
                    The Company may institute alternate methods of payment for
                    the authorized trips in lieu of (4.3.1) above. Payment may
                    be made by transfer either to the employee’s bank account or
                    his/her mobile money wallet.
                  </h4> */}
                </LegalSection>
                <LegalSection
                  id="leave-or-absence"
                  dangerouslySetInnerHTML={{ __html: leave_or_abscence }}
                >
                  {/* <h2>LEAVE OR ABSENCE</h2>
                  <h3>Annual Vacation</h3>
                  <h4>
                    Subject to the existing MTN Ghana Leave Policy, Employees in
                    MTN Level 3 and above, employed for less than five years
                    shall be entitled to 28 working days’ leave after completion
                    of 12 months’ continuous service or pro rata leave days in
                    one calendar year. They shall be entitled to 32 days after
                    five years’ service, and 36 days after 10 years’ service.
                  </h4>
                  <h4>
                    Subject to the existing MTN Ghana Leave Policy, Employees in
                    MTN Levels 1 and 2 with under five years’ service shall be
                    entitled to 21 and 24 working days’ leave respectively after
                    completion of twelve (12) months continuous service or pro
                    rata leave days in one calendar year and 24 and 28 working
                    days respectively after five years’ service.
                  </h4>
                  <h4>
                    The time of the year when leave is granted will depend, in
                    the first place, on the Company’s operational needs, but as
                    far as possible the wishes of the Employee shall be taken
                    into consideration.
                  </h4>
                  <h4>
                    Where an Employee resigns from his position prior to
                    completing twelve (12) months continuous service as provided
                    in clauses 5.1.1 and 5.1.2 above, or where at the time of
                    leaving the employment of the Company leave days remain
                    outstanding to the benefit of the Employee, the leave days
                    available to him/her shall be pro-rated and an equivalent
                    value in cash paid to the Employee.
                  </h4>
                  <h4>
                    When urgent circumstances occur which necessitate the
                    absence of an Employee from work, the Employee shall
                    immediately inform his/her Line Manager of the situation and
                    book it on HRIS on his/ her return to the office as part of
                    his/ her annual leave days.
                  </h4>
                  <h4>
                    The MTN Ghana Leave Policy and the provisions above relating
                    to annual vacation may be amended from time to time and
                    shall apply to Employees as amended.
                  </h4>

                  <h3>Compassionate Leave</h3>
                  <h4>
                    A period of absence from work may be granted to an Employee
                    as a result of the death of a close relative (mother,
                    father, child or spouse) of an Employee (“Compassionate
                    Leave”). For Employees who require post-natal hospital
                    attendance, this shall be once in a month.
                  </h4>
                  <h4>
                    Compassionate Leave with pay shall not exceed 5 working days
                    for each qualifying occurrence. However, an Employee can
                    take a maximum of ten (10) working days in a year subject to
                    prior approval from Divisional Executive &amp; the Human
                    Resources Executive.
                  </h4>
                  <h4>
                    All applications for compassionate leave shall be made and
                    approved through EBS.
                  </h4>

                  <h3>Maternity Leave</h3>
                  <h4>
                    The Company shall grant a female employee three (3) months
                    maternity leave with pay on production of a medical
                    certificate of proof of delivery or other medical evidence
                    suitable to the circumstances, duly signed by a registered
                    medical practitioner. This may be taken before or on the day
                    of delivery.
                  </h4>
                  <h4>
                    A female Employee on return from maternity leave shall be
                    granted two hours of early departure every working day for
                    the purpose of nursing her child until the baby is twelve
                    months old.
                  </h4>
                  <h4>
                    Where a female Employee has multiple births or abnormal
                    complexities, the Company may extend the maternity period by
                    a maximum period of an additional month upon the provision
                    of a medical certificate issued to that effect by a
                    registered medical practitioner.
                  </h4>
                  <h4>
                    In the unfortunate situation where an Employee suffers a
                    miscarriage or still birth, the company shall uphold the
                    medical certificate or excuse duty form issued by a
                    registered medical practitioner approved by the Company in
                    line with the MTN sick leave policy.
                  </h4>

                  <h3>Sick Leave</h3>
                  <p>
                    The Company will authorize paid leave to Employees in order
                    that they may rest and recuperate when incapacitated by
                    sickness or injury.
                  </p>
                  <h4>
                    An Employee who is absent from work for reasons of sickness
                    or injury, must either personally or through another person
                    notify his/her Line Manager within twenty- four (24) hours
                    of the reason for the absence and the expected duration of
                    the absence period.
                  </h4>
                  <h4>
                    The Line Manager must be provided with an excuse duty from a
                    registered medical practitioner within twenty-four (24)
                    hours of issue and same forwarded to the Human Resource
                    Division, failing which the Company may decline to pay for
                    the sick leave taken (unpaid leave).
                  </h4>
                  <h4>
                    Notwithstanding the above any Employee absent on sick leave
                    on a day either immediately before or immediately after any
                    weekend or public holidays will be required to submit a
                    medical excuse duty from a registered medical practitioner
                    immediately upon return to work, failing which the Company
                    may decline to pay for the sick leave taken.
                  </h4>
                  <h4>
                    The Company reserves the right to verify the validity and
                    accuracy of any medical certificate or excuse duty form
                    received (this however does not extend to accessing
                    Employee’s privileged medical information).
                  </h4>
                  <h4>
                    For the avoidance of doubt, sick leave shall not be granted
                    where an Employee is absent due to the illness of a child or
                    relative. Annual or unpaid leave where applicable may be
                    applied for any such circumstances.
                  </h4>
                  <h4>
                    Sick leave with pay shall only be granted on production of a
                    medical certificate signed by a registered medical
                    practitioner or a medical practitioner approved by the
                    Company. The Company reserves the right at its own expense,
                    following submission of a medical certificate or excuse duty
                    form by the Employee, to require the Employee to undergo
                    medical examination by a Company-nominated medical
                    practitioner for the purpose of obtaining a second
                    professional medical opinion to assist the Company in making
                    a determination regarding applicability of sick leave or
                    fitness to return to work.
                  </h4>
                  <h4>
                    Subject to (5.5.1) above, Employees shall be entitled to
                    paid sick leave as follows:
                    <StripedTable>
                      <thead>
                        <tr>
                          <th></th>
                          <th>On Full Pay</th>
                          <th>On Half Pay</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Employees under two years' service</td>
                          <td>1 week</td>
                          <td>1 week</td>
                        </tr>
                        <tr>
                          <td>
                            Employees with two years' but under three's service
                          </td>
                          <td>2 weeks</td>
                          <td>2 weeks</td>
                        </tr>
                        <tr>
                          <td>
                            Employees with three years' but under fours's
                            service
                          </td>
                          <td>3 weeks</td>
                          <td>3 weeks</td>
                        </tr>
                        <tr>
                          <td>
                            Employees with four years' but under five's service
                          </td>
                          <td>4 weeks</td>
                          <td>4 weeks</td>
                        </tr>
                        <tr>
                          <td>Employees with 5 years' service and above</td>
                          <td>5 weeks</td>
                          <td>5 weeks</td>
                        </tr>
                      </tbody>
                    </StripedTable>
                  </h4>

                  <h4>
                    Provided that in all cases the grant of further period of
                    sick leave with pay after the maximum period described in
                    (5.5.2) above shall be at the discretion of the Company.
                  </h4> */}
                </LegalSection>
                <LegalSection
                  id="medical-care"
                  dangerouslySetInnerHTML={{ __html: medical_care }}
                >
                  {/* <h2>Medical Care</h2>
                  <p>
                    <h3>
                      The Company shall provide free medical insurance up to the
                      defined limit for the year for each Employee, his
                      recognized spouse and up to four children whose age is not
                      more than 21 years.
                    </h3>
                    <h3>
                      The Company shall be responsible for medical expenses for
                      illnesses and injury as specified by the relevant
                      insurance Company.
                    </h3>
                    <h3>
                      The Company at its discretion may request a yearly medical
                      checkup for each Employee, at the expense of the Company.
                    </h3>
                    <h3>
                      The Company shall be responsible for the cost of herbal
                      treatment obtained from a registered member of the
                      Traditional Healers Association recognized by the relevant
                      insurance scheme.
                    </h3>
                    <h3>
                      Should the Employee be unable to attend work as a result
                      of ill health, s/he shall notify his immediate Superior
                      about same within 24 hours of his illness.
                    </h3>
                    <h3>
                      Medical policy may be subject to change at the discretion
                      of Management.
                    </h3>
                    <h3>
                      Occupational Injuries - All Employees of the Company are
                      covered by the provisions of the Workmen’s Compensation
                      Law 1987 (PNDCL 187) as amended.
                    </h3>
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="leaving-the-service"
                  dangerouslySetInnerHTML={{ __html: leaving_the_service }}
                >
                  {/* <h2>Leaving the Service</h2>

                  <h3>Termination</h3>
                  <h4>
                    An employee wishing to terminate his/her appointment shall
                    give the Company notice in writing as stated in the table
                    below or pay or forfeit the commensurate salary in lieu of
                    notice:
                    <StripedTable>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Resignation Notice During Probation</th>
                          <th>Resignation Notice After Confirmation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Levels 1 &amp; 2</td>
                          <td>Two weeks</td>
                          <td>One Month</td>
                        </tr>
                        <tr>
                          <td>Levels 3 &amp; 3H</td>
                          <td>Two weeks</td>
                          <td>Three Months</td>
                        </tr>
                        <tr>
                          <td>Levels 4 &amp; 5</td>
                          <td>One Month</td>
                          <td>Three Months</td>
                        </tr>
                      </tbody>
                    </StripedTable>
                  </h4>

                  <h4>
                    Should the Company wish to terminate the appointment of an
                    Employee the Company shall give the Employee notice in
                    writing as stated in the table below or pay the commensurate
                    salary in lieu of notice:
                    <StripedTable>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Resignation Notice During Probation</th>
                          <th>Resignation Notice After Confirmation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Levels 1 &amp; 2</td>
                          <td>Two weeks</td>
                          <td>One Month</td>
                        </tr>
                        <tr>
                          <td>Levels 3 &amp; 3H</td>
                          <td>Two weeks</td>
                          <td>Three Months</td>
                        </tr>
                        <tr>
                          <td>Levels 4 &amp; 5</td>
                          <td>One Month</td>
                          <td>Three Months</td>
                        </tr>
                      </tbody>
                    </StripedTable>
                    For the avoidance of doubt, in the case of employees subject
                    to the Collective Agreement (the “CA”) between the Company
                    and Scancom Local Staff Association, where the provision of
                    this clause 7.1.1 is inconsistent with a relevant provision
                    in the CA, the CA shall prevail.
                  </h4>
                  <h4>
                    Upon termination of employment for any reason whatsoever the
                    Employee shall be required to hand over to the Company all
                    the Company’s property in his possession or under his/her
                    control including but not limited to books, documents,
                    computer discs or micro fiche (or any copy of any document,
                    laptop, computer, computer disc or micro fiche or any
                    portion thereof whether this be retained on paper, magnetic
                    tape, computer disc or otherwise) and any keys, security
                    cards, SIM cards, cellular telephones, vehicles or other
                    property of any nature whatsoever and in this regard shall
                    sign off on a Separation checklist, evidencing compliance
                    with the above requirement. All entitlements due to an
                    Employee shall be paid upon the return of company properties
                    as well as sign-off on a Separation Checklist.
                  </h4>

                  <h3>Interdiction (Suspension)</h3>

                  <h4>
                    All Employees shall be subject to the Disciplinary Code of
                    the Company.
                  </h4>
                  <h4>
                    Should an Employee be suspected of committing a serious
                    offence which requires thorough investigation, such Employee
                    shall be interdicted from duty pending further
                    investigation.
                  </h4>
                  <h4>
                    During the interdiction the Employee shall be paid at half
                    rate and if no case is found against him/her, he/she shall
                    be paid any outstanding amounts for the period of
                    suspension.
                  </h4>

                  <h3>Summary Dismissal</h3>
                  <h4>
                    An Employee shall be summarily dismissed by the Company upon
                    just and reasonable cause, as provided under the
                    Disciplinary Code of the Company, which may include
                    instances where such Employee is involved in serious
                    misconduct such as:
                    <h5>Dishonesty,</h5>
                    <h5>Fraud,</h5>
                    <h5>Drunkenness,</h5>
                    <h5>
                      Continuous failure to report to work or at duty post on
                      time without just cause,
                    </h5>
                    <h5>
                      Fighting or physically striking another Employee or
                      anybody he/she deals with, whiles at post or on the
                      Company’s premises or in the course of official duties,
                    </h5>
                    <h5>
                      Gross display of inefficiency, incompetence or willful
                      negligence in the performance of duty,
                    </h5>
                    <h5>
                      Passing on confidential information to any unauthorized
                      person without the approval of the appropriate authority,
                    </h5>
                    <h5>
                      Willful refusal to obey legitimate instructions without
                      reasonable excuse,
                    </h5>
                    <h5>
                      Dereliction of duty which shall be deemed to be
                      detrimental to the good conduct of the Company’s business,
                    </h5>
                    <h5>Committing acts of criminal nature,</h5>
                    <h5>
                      Willfully or negligently causing damage to Company
                      property,
                    </h5>
                    <h5>
                      Unauthorized use on any of the Company’s computers, of the
                      Employee’s private software programmes, programmes from a
                      previous employer, unauthorized discs or tapes of
                      information or programmed games, or unauthorized copying,
                      lending or selling of software programmes, whether
                      produced by Company staff or purchased as a package for
                      use by the Company, or use of Company materials on an
                      unauthorized computer.
                    </h5>
                    <h5>
                      Unlawful and unauthorized use of any Company property
                    </h5>
                    <h5>
                      Engaging in any unethical or immoral behaviour that may
                      bring the Company and or its image into disrepute.
                    </h5>
                  </h4>
                  <h4>
                    In all cases the Employee shall be given an opportunity to
                    defend himself or herself.
                  </h4>
                  <h4>
                    An Employee who is summarily dismissed shall not be entitled
                    to notice or payment in lieu thereof and shall, subject to
                    the Labour Act 2003, Act 651 as amended, forfeit forthwith,
                    all his/her benefits if any. 7.3.4 The Company may, in its
                    discretion, impose any of the following penalties, as
                    punishment for the offences stated in (7.3.1) above;
                    termination of appointment reduction in rank, reduction in
                    salary or suspension without pay.
                  </h4>
                  <h3>Redundancy</h3>
                  <h4>
                    Where the Company is compelled to declare any number of
                    Employees redundant, the Company shall give the impacted
                    Employees three calendar months’ notice in advance of the
                    final action taken.
                  </h4>
                  <h4>
                    Employees impacted by a redundancy exercise shall be
                    entitled to all benefits that may accrue to them as per the
                    Labour Act 2003, Act 651 as amended and the Scancom PLC
                    Collective Agreement where applicable.
                  </h4>
                  <h4>
                    Determination of Employees whose services are to be
                    terminated owing to redundancy shall be based on the needs
                    of the Company at the time, productivity, value to the
                    business, scarcity of talents in that role, performance,
                    attitude, long service and proven record of the employees.
                  </h4>

                  <h3>Vacation of Employment</h3>
                  <h4>
                    An Employee shall not be absent from work without permission
                    from the Head of Department.
                  </h4>
                  <h4>
                    Any Employee absenting himself or herself for five (5)
                    continuous working days without permission or reasonable
                    cause shall be regarded as having vacated his or her
                    employment and the Company shall be entitled to take steps
                    to fill the vacancy created.
                  </h4>

                  <h3>Absence From Duty</h3>
                  <h4>
                    Except during lunch hours, an Employee shall not leave the
                    place of work during working hours without permission.
                  </h4>
                  <h4>
                    An Employee who absents himself/herself from duty without
                    permission or reasonable cause shall receive no salary in
                    respect of the day he/she was absent.
                  </h4>

                  <h3>Service Limit</h3>
                  <h4>
                    Subject to the Labour Act 2003, Act 651 as amended, the
                    compulsory retiring age is sixty (60) years.
                  </h4>
                  <h4>
                    The Company may however consider an application for
                    voluntary retirement at the age of fifty-five (55) years.
                  </h4>
                  <h4>
                    An employee retiring from the service of the Company shall
                    receive all entitlements for which s/he qualifies at the
                    date of retirement, including Provident Fund, if any.
                  </h4>
                </LegalSection>
                <LegalSection id="miscellaneous-conditions">
                  <h2>MISCELLANEOUS CONDITIONS</h2>

                  <h3>Confidentiality and Secrecy</h3>
                  <h4>
                    All Employees shall observe the strictest professional
                    secrecy and confidentiality and shall not divulge to any
                    party whomsoever, at any time, information concerning the
                    transactions of the Company and its customers.
                  </h4>
                  <h4>
                    Except upon the express instructions of the Chief Executive
                    Officer an employee shall not allow any person to have
                    access to the books, letters, papers and, in general any
                    document belonging to the Company or relating to its
                    business, and he shall not furnish extracts therefrom nor
                    give any information concerning the business or affairs of
                    the Company or its customers to any person not lawfully
                    entitled thereto.
                  </h4>
                  <h4>
                    An Employee shall in addition to the NDA signed on
                    commencement of employment, if so required by the Company
                    sign an “Agreement on Trade Secrets and to Prohibit Trade
                    Competition” with the Company after confirmation of
                    employment.
                  </h4>
                  <h3>Protection of Interest of the Company</h3>
                  <h4>
                    The Employee shall not within one year of termination of his
                    employment directly or indirectly on his own or on behalf of
                    any other person:
                    <h5>
                      Solicit or approach any person to whom he/she on behalf of
                      the Company sold or supplied products and services for the
                      purpose of offering to supply products or services similar
                      to those sold or supplied by the Company.
                    </h5>
                    <h5>
                      Solicit or approach any person to whom he/she knows the
                      Company sold or supplied goods or services during the six
                      months prior to the termination of his employment for the
                      purpose of offering to supply products or services similar
                      to those then sold or supplied by the Company.
                    </h5>
                    <h5>
                      Seek to breach or terminate any agreement or pattern of
                      dealing from which the Company benefits.
                    </h5>
                  </h4>
                  <h4>
                    All Employees in Level 3 and above shall not within a year
                    of leaving the Company take up employment with the Company’s
                    competitors, and shall not be directly or indirectly
                    interested, engaged or concerned in, whether as a principal,
                    agent, representative, shareholder, director, employee,
                    consultant, advisor, financier, administrator or in any
                    other capacity in the business of any competitor of the
                    Company situated in Ghana.
                  </h4>
                  <h4>
                    All Employees undertake and agree that, at any time while
                    employed in any capacity by the Company, or any company
                    within MTN Group, they shall not be interested, engaged or
                    assist whether directly or indirectly, in any manner
                    whatsoever and whether as proprietor, partner, shareholder,
                    director, employee, agent, consultant or otherwise, in any
                    firm, business or undertaking which carries on any activity
                    either solely or in conjunction with any other party in
                    competition with the business carried on by the Company, or
                    any of the companies within the MTN Group of companies.
                  </h4>
                  <h4>
                    The Employee acknowledges and agrees that the duration,
                    extent and application of these restrictions are reasonable
                    and no greater than is necessary for the protection of the
                    interest of the Company, and further that the Company may
                    seek equitable remedies in addition to any other legal
                    remedies to enforce them.
                  </h4>
                  <h4>
                    If any provision of clause 8.2 herein is deemed to be, or
                    becomes invalid, illegal, void or unenforceable under
                    applicable laws, such provision will be deemed amended to
                    conform to applicable laws so as to be valid and
                    enforceable.
                  </h4>

                  <h3>Further Restraints</h3>
                  <p>
                    <h4>Conflict of Interest</h4>
                  </p>
                  <p>
                    The Employee shall perform his duties conscientiously,
                    honestly and in accordance with the best interests of the
                    Company and to avoid all situations of a conflict of
                    interest, and in this regard shall comply with the
                    provisions of the Companies Conflict of Interest and Code of
                    Ethics Policies.
                  </p>
                  <p>
                    <h4>Extraneous or Part-time Employment</h4>
                  </p>
                  <h5>
                    All Employees are obliged to devote to the Company normal
                    working hours and such time outside normal working hours as
                    may be required for the proper fulfilment and completion of
                    tasks, duties and obligations as defined by the Company
                    pursuant to the contract of employment.
                  </h5>
                  <h5>
                    An Employee may not perform or engage himself or herself in
                    any work other than as defined by the Company pursuant to
                    the contract of employment, either for his or her own
                    account or for the account of any other person, body or
                    corporate entity without express written permission of the
                    Company, in accordance with the Code of Ethics.
                  </h5>

                  <h3>Responsibility</h3>
                  <h4>
                    The Company shall have the sole right to exercise all the
                    prerogatives, powers and authority and make the necessary
                    business decisions for the best interest of the Company and
                    its Employees provided however that the Company in exercise
                    of such rights shall take due cognizance of the laws of the
                    Republic of Ghana.
                  </h4>
                  <h4>
                    The Company shall from time to time make rules, regulations,
                    policies and procedures and same will operate alongside
                    conditions set out in this document so however, that where
                    there is a conflict between the provisions of this
                    Conditions of Service document and the provisions under
                    another document, except where otherwise stated under the
                    provisions of this Conditions of Service document, the
                    provisions of this document shall take precedence.
                  </h4>
                  <h4>
                    All Employees shall be informed of, and as the case may be,
                    be provided with or given access to a copy of any rules,
                    regulations, policies or procedures made by the Company.
                    Employees shall be obliged to read and understand the
                    Company’s rules and regulations, policies and procedures and
                    shall comply and follow same to the letter.
                  </h4>
                  <h4>
                    Employees shall have a direct and personal responsibility to
                    set a good example and the highest standard of performance
                    as well as safe and effective methods of working.
                  </h4>
                  <h3>Amendment</h3>
                  <p>
                    Without prejudice to any of the rules and conditions herein
                    and to any agreement, which the Company may enter with any
                    Employee, the Company reserves the right to amend the
                    conditions herein from time to time as necessary. The
                    Company shall inform all Employees of any amendments
                    accordingly. It shall be the responsibility of the Employee
                    to obtain a copy of the Conditions of Service as amended.
                  </p>

                  <h3>Effective date</h3>
                  <p>
                    These rules and conditions shall become effective from the
                    date of Executive Sign-Off.
                  </p> */}
                </LegalSection>

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
              </div>
            </SplitGridRightColumn>
          </SplitGrid>

          <Button
            // disabled={!this.state.checked}
            color="blue"
            onClick={this.handleClick}
            my="5rem"
          >
            Next Step >
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
