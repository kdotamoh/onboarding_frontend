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
import {
  SplitGrid,
  Hero,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { Sidebar } from 'components/navigation/SideNav'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/code_of_ethics_hero.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;
`

const BgImgContainer = styled.div`
  position: relative;
  min-height: 13rem;
  width: 100%;
`

export const LegalSection = styled(Section)`
  h2 {
    font-family: MTNBrighterSans-Regular;
    counter-reset: h3-counter;

    &:before {
      counter-increment: h2-counter;
      content: counter(h2-counter) '. ';
    }
  }

  h3 {
    font-family: MTNBrighterSans-Regular;
    /* counter-reset: section; */

    &:before {
      counter-increment: h3-counter;
      content: counter(h2-counter) '.' counter(h3-counter) ' ';
    }
  }

  ol {
    list-style-type: none;

    li {
      font-family: MTNBrighterSans-Light;
      font-size: 16px;
      padding-left: 6rem;
      margin-left: 0px;
      position: relative;

      counter-reset: section;

      &:before {
        display: block;
        position: absolute;
        left: 0;

        counter-increment: section;
        content: counter(h2-counter) '.' counter(h3-counter) '.'
          counters(section, '.') ' ';
      }

      /* ol {
        list-style-type: none;

        li {
        font-family: MTNBrighterSans-Light;
        font-size: 16px; */
      /* counter-reset: next-section; */
      /* padding-left: 6rem;
        margin-left: 0px;
        position: relative;

          &:before {
            display: block;
            position: absolute;
            left: 0;

            counter-increment: next-section;
            content: counter(h2-counter) "." counter(h3-counter) "." counter(section) '.' counter(next-section) ' ';
          }

          
        }
      } */
    }
  }

  p {
    h3 {
      font-family: MTNBrighterSans-Light;
      font-size: 16px;
      counter-reset: h4-counter;
      padding-left: 6rem;
      position: relative;

      &:before {
        display: block;
        position: absolute;
        left: 0;

        counter-increment: h3-counter;
        content: counter(h2-counter) '.' counter(h3-counter) ' ';
      }
    }
  }

  p {
    h4 {
      font-family: MTNBrighterSans-Regular;
      counter-reset: h5-counter;
      padding-left: unset;
      position: unset;
      color: #666666;

      &:before {
        display: unset;
        position: unset;
        left: unset;

        counter-increment: h4-counter;
        content: counter(h2-counter) '.' counter(h3-counter) '.'
          counter(h4-counter) ' ';
      }
    }
  }

  h4 {
    font-family: MTNBrighterSans-Light;
    counter-reset: h5-counter;
    padding-left: 6rem;
    position: relative;

    &:before {
      display: block;
      position: absolute;
      left: 0;

      counter-increment: h4-counter;
      content: counter(h2-counter) '.' counter(h3-counter) '.'
        counter(h4-counter) ' ';
    }
  }

  h5 {
    font-family: MTNBrighterSans-Light;
    font-size: 16px;
    padding-left: 7rem;
    position: relative;

    &:before {
      display: block;
      position: absolute;
      left: 0;

      counter-increment: h5-counter;
      content: counter(h2-counter) '.' counter(h3-counter) '.'
        counter(h4-counter) '.' counter(h5-counter) ' ';
    }
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
              <img className="column" src={heroImg} alt="" />
              <p
                className="column"
                dangerouslySetInnerHTML={{ __html: hero_text }}
              ></p>
            </div>
          </Hero>
          <SplitGrid leftWidth={30} rightWidth={70}>
            <SplitGridLeftColumn>
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
            </SplitGridLeftColumn>
            <SplitGridRightColumn>
              <div style={{ width: '60%' }}>
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
                >
                  {/* <h2>Conflict of Interest</h2>
                  <p>
                    The Company expects the employees to perform their duties
                    conscientiously, honestly and in accordance with the best
                    interests of the Company.
                  </p>
                  <p>
                    Employees must not use their positions, or knowledge gained
                    through their employment with the Company, for private or
                    personal advantage or in such a manner that a conflict, or
                    an appearance of conflict arises between the Company’s
                    interest and their personal interest.
                  </p>
                  <p>
                    A conflict could arise where an employee, a member of an
                    employee’s family or a business with which the employee or
                    family is associated obtains a gain, advantage or profit by
                    virtue of the employee’s position with the Company, or
                    knowledge gained through that position. If employees feel
                    that a course of action which they have pursued, are
                    pursuing or are contemplating pursuing, may involve them in
                    a conflict of interest situation, or a perceived conflict of
                    interest situation, they should immediately make all the
                    facts known to the person to whom they report.
                  </p>
                  <h3>Outside Activities, Employment and Directorships</h3>
                  <p>
                    We all share a very real responsibility to contribute to our
                    local communities, and the Company encourages employees to
                    participate in religious, charitable, educational and civic
                    activities. Employees should however, avoid acquiring any
                    business interest or participating in any activity outside
                    the Company, which would create, or appear to create:
                  </p>
                  <div style={{ display: 'flex' }}>
                    <h4>
                      an excessive demand upon their time, attention and energy
                      which would deprive the Company of their best efforts in
                      their work; or
                    </h4>
                  </div>
                  <h4>
                    A conflict of interest – that is an obligation, interest or
                    distraction which would interfere or appear to interfere
                    with the independent exercise of judgment in the Company’s
                    best interests. Employees may not take up outside employment
                    whether permanent or part time without the prior approval of
                    their Manager and Executive responsible for Human Resources.
                  </h4>
                  <h3>Relationships with Clients, Customers and Suppliers</h3>
                  <p>
                    The Company recognizes that relationships with clients,
                    customers and suppliers give rise to many potential
                    situations where conflict of interest, real or perceived may
                    arise.
                  </p>
                  <p>
                    Employees should ensure that they are independent, and are
                    seen to be independent, from any business organization
                    having a contractual relationship with the Company or
                    providing goods or services to the Company, if such a
                    relationship might influence or create the impression of
                    influencing their decisions in the performance of their
                    duties on behalf of the Company. In such circumstances,
                    employees should not invest in, nor acquire any financial
                    interest, directly or indirectly, in any organization, which
                    has a contractual relationship with the Company without
                    having secured prior approval from their respective
                    Executive Director.
                  </p>
                  <p>
                    In dealing with clients, customers and suppliers, the
                    Company/employees must:
                  </p>
                  <ul>
                    <li>
                      inform a supplier and his superior of any bribe or
                      attempted bribe by the supplier’s personnel;
                    </li>
                    <li>
                      Ensure that no bribe is paid to personnel of a supplier of
                      the Company;
                    </li>

                    <li>
                      Have regard for the interests of creditors when requesting
                      an extension of time in which to pay or when making due
                      payments;
                    </li>

                    <li>
                      Keep business and personal activities separate so as not
                      to create the perception of a conflict of interest;
                    </li>

                    <li>
                      Keep the propriety data of a supplier or potential
                      supplier protected.
                    </li>
                  </ul>
                  <h3>Gifts, Hospitality and Favours </h3>

                  <p>
                    <h4>Receiving </h4>
                  </p>
                  <p>
                    Conflicts of interest can arise where employees are offered
                    gifts, hospitality or other favours, which might or could be
                    perceived to influence their judgment in relation to
                    business transactions such as the placing of orders and
                    contracts.
                  </p>
                  <p>
                    An employee should not accept cash or cash equivalents such
                    as cheques or gift vouchers, gifts, hospitality or other
                    favours from suppliers of goods or services. However,
                    acceptance of the following would not be considered contrary
                    to such policy:
                  </p>
                  <h5>Advertising matter of limited commercial value;</h5>
                  <h5>
                    Occasional business entertaining such as lunches, cocktail
                    parties or dinners; and{' '}
                  </h5>
                  <h5>
                    Occasional personal hospitality such as tickets to local
                    sporting and recreational events or theatres in accordance
                    with the Group Gift Policy clause 12 or as maybe amended
                    from time to time.{' '}
                  </h5>
                  <h5>
                    Local hospitality getaways including one or more nights paid
                    accommodation are acceptable only with the prior written
                    consent of the individual's superior All overseas getaways
                    need to be authorized in writing by the CEO prior to
                    departure while overseas sporting events need to be approved
                    Group Chief Business Risk Officer prior to departure in
                    accordance with clause 12.1.5 of the Group Gift Policy.{' '}
                  </h5>
                  <h5>
                    Low value corporate branded items less than $40.00 in value
                    or as maybe amended from time to time in the Group Gift
                    Policy maybe accepted.{' '}
                  </h5>
                  <h5>
                    Cellular devices and related accessories may only be
                    accepted by the relevant departments for testing and becomes
                    the property of MTN and shall be disposed of in accordance
                    with the provisions of the Group gift policy clause 11.5.3
                    and 11.5.4 or as may be amended from time to time. In
                    addition, no personal favours or other preferential
                    treatment should be accepted by any employee when they are
                    offered because of the employee’s position with the Company,
                    and, therefore might tend to place the recipient under
                    obligation.
                  </h5>
                  <p style={{ fontSize: '18px' }}>Declaration of Gifts</p>
                  <p>
                    The employee should declare the receipt of gifts exceeding
                    the value of $40 or as may be amended from time to time in
                    the Group Gift Policy to his/her Gift Register Custodian in
                    the respective department who will forward the information
                    to the Company Secretary by the 5th of each month who keeps
                    a register of such gifts.
                  </p>
                  <p>
                    The Company remunerates employees based upon formal
                    remuneration scales and rates for salaries, wages, fringe
                    benefits, and other regular remuneration. No employee may
                    receive commissions or other remuneration related to the
                    sale of any product of the Company, except as specifically
                    provided under an individual’s terms of employment.
                  </p>
                  <p>
                    Employees may not receive any money or item of value (other
                    than the Company’s regular remuneration or other
                    incentives), either directly or indirectly for negotiating,
                    procuring, recommending or aiding in any transaction made by
                    or on behalf of the Company, nor have any indirect financial
                    interest in such a transaction.
                  </p>

                  <p>
                    <h4>Giving </h4>
                  </p>

                  <p>
                    An employee should not offer gifts, hospitality or other
                    favours to customers of goods and services exceeding $200 or
                    as may be amended from time to time in the Group Gift
                    Policy. However, offering the following would not be
                    contrary to this Code so long as the gift is offered as an
                    inherent part of the job or flows from an action consistent
                    with approved business plans and sanctioned in accordance
                    with the delegation of authority:
                  </p>
                  <h5>
                    Occasional entertainment of a customer representative and
                    their spouse or partner;
                  </h5>
                  <h5>
                    Accommodation in one of the MTN Group’s and subsidiary’s own
                    guest cottages or on any properties owned by it for a
                    customer representative and their spouse or partner;
                  </h5>
                  <h5>
                    The supply of any of the Company or any of its associates
                    branded products on a limited commercial basis.
                  </h5>
                  <p>
                    Conflicts of interest or embarrassment may be caused to
                    customers where employees offer gifts, hospitality of other
                    favours, which might, or could be perceived to, influence
                    their judgment in relation to business transactions such as
                    placing of orders and contracts.
                  </p>
                  <p>
                    In addition employees must not offer personal favours or
                    other “preferential treatment” to customers or suppliers
                    representatives, which might place the recipient under
                    obligation. It is incumbent upon the employee to establish
                    the customer’s criteria on the receiving of gifts,
                    hospitality or other favours and to observe at all times the
                    customer’s practice in this regard.
                  </p>
                  <h3>Personal Investments </h3>
                  <p>
                    The Group respects the right of all employees to make
                    investment decisions as they see fit, as long as these
                    decisions do not contravene the conflict of interest
                    provisions of this Code, any applicable legislation, or any
                    policies or procedures established by various operating
                    parts of the Company and the MTN Group, and provided these
                    decisions are not made on the basis of material non-public
                    information acquired by reason of an employee’s connection
                    with the Company or the MTN Group. Employees should not
                    permit their personal investment transactions to have
                    priority over transactions of the MTN Group and its clients.
                    Employees including Directors may invest in listed Companies
                    in their personal capacity subject to their investment being
                    lower than one percent of the total market capitalization of
                    the company concerned and their having obtained prior
                    permission from the CEO in such cases where the investment
                    is larger than half a percent of the market capitalization.
                  </p>
                  <p>
                    When considering the application of this section, employees
                    should ensure that no investment decision made for their own
                    account could reasonably be expected to influence adversely
                    their judgment or decisions in the performance of their
                    duties on behalf of the Company. In addition, employees who
                    are in possession of material non-public information should
                    not use this information themselves nor pass such
                    information on to others for their use.
                  </p>
                  <p>
                    Employees involved in performing investment activities on
                    behalf of the Group and Company and those who by nature of
                    their duties or positions are exposed to price-sensitive
                    information relating to the MTN Group and the Company are
                    subject to additional rules governing personal investment.
                    These rules may be imposed by the Companies Act, Stock
                    Exchanges, Securities Regulation Panels and other regulatory
                    bodies, industry associations and management.
                  </p>
                  <p>The rules include requirements for employees to: </p>
                  <h4>
                    Obtain prior approval for, and to report on, their personal
                    investment activity and the investment activity of those
                    persons with whom they have dealings with.
                  </h4>
                  <h4>
                    Refrain from dealing in shares of the Company or the MTN
                    Group during restricted periods (close periods) as
                    communicated by the Company Secretary.
                  </h4>
                  <p>
                    Shareholders should not have unrealistic expectations of
                    management to the extent that the latter are pressurized
                    into acting injudiciously or unethically in any way to the
                    detriment of the Company.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="communication-to-third-party"
                  dangerouslySetInnerHTML={{
                    __html: communication_of_philosophy_to_third_parties
                  }}
                >
                  {/* <h2>Communication of Philosophy to Third Parties</h2>
                  <p>
                    All suppliers, financiers and customers should be made aware
                    of all aspects of the Code of Ethics and be advised that
                    they are expected to comply in all respects with the
                    provisions thereof failing which their status and future
                    dealings with the Company could be subject to review and
                    possible sanction. Furthermore they should be encouraged
                    through the example set by all Company employees to conduct
                    their business in a completely ethical and transparent
                    manner so as not to derive any unfair advantage in the
                    Company and should be encouraged to function in a manner
                    which can contribute to the moral regeneration of the
                    community while ensuring maintenance of acceptable standards
                    of both personal and corporate governance so as to benefit
                    all associated entities.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="employment-equity"
                  dangerouslySetInnerHTML={{ __html: employment_equity }}
                >
                  {/* <h2>Employment Equity</h2>
                  <p>
                    The Company’s employment equity policy is a system of
                    opportunity for all. Employment equity seeks to identify,
                    develop and reward each employee who demonstrates the
                    qualities of individual initiative, enterprise, hard work
                    and loyalty in their job. On that basis, it emphasizes
                    opportunity for all rather than preference for some.
                  </p>
                  <p>
                    The Company strongly rejects notions of “window dressing” or
                    tokenism and believes it is in the best interest of
                    business, the individual employees and their peers to know
                    that employment in the Company is on the basis of merit,
                    rather that simply an individual’s race or other criterion
                    unrelated to their capacity to do the job.
                  </p>
                  <p>
                    Scancom Ltd. is required to encourage and implement the
                    inclusion and advancement of Ghanaian and female persons in
                    managerial capacities throughout every aspect of the
                    Company’s activities.
                  </p>
                  <p>
                    All employees have the right to work in an environment which
                    is free from any form of harassment or unlawful
                    discrimination with respect to race, colour, sex, sexual
                    orientation, place of origin, citizenship, creed, political
                    persuasion, age, marital of family status or disability. An
                    employee should report any cases of actual or suspected
                    discrimination or harassment as set out in the Contravention
                    of the Code section of this booklet.
                  </p>
                  <p>
                    All employees may continue to work irrespective of their
                    illnesses or disabilities, provided that they are able to
                    continue to perform their essential duties satisfactorily
                    and do not present a safety or health hazard to themselves
                    or others.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="environmental-responsibility"
                  dangerouslySetInnerHTML={{
                    __html: environmental_responsibility
                  }}
                >
                  {/* <h2>Environmental Responsibility </h2>
                  <h3>Health and Safety</h3>
                  <p>
                    The Company is committed to taking every reasonable
                    precaution to ensure a safe working environment for all
                    employees.
                  </p>
                  <p>
                    Employees who become aware of circumstances relating to the
                    Company’s operations or activities, which pose a real or
                    potential health or safety risk, should report the matter as
                    set out in the Contravention of the Code section of this
                    booklet.
                  </p>
                  <h3>Environmental Management </h3>
                  <p>
                    The Company is committed to developing operating policies to
                    address the environmental impact of its business activities
                    by integrating pollution control, waste management and
                    rehabilitation activities into operating procedures.
                    Employees should give appropriate and timely attention to
                    environmental issues.
                  </p> */}
                </LegalSection>
                <LegalSection id="political-support">
                  <h2>Political Support</h2>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontFamily: 'MTNBrighterSans-Light'
                    }}
                  >
                    The Company is politically neutral and employees shall not
                    engage in any activity or omission that compromises the
                    political neutrality of the company or public perception
                    thereof. Notwithstanding that the Company is politically
                    neutral the Company respects the rights of its employees to
                    personal participation in the political process and respects
                    their rights to absolute privacy with regard to personal
                    political activity.
                  </h3>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontFamily: 'MTNBrighterSans-Light'
                    }}
                  >
                    Employees shall keep any business and personal political
                    affiliations separate and shall ensure that any activity
                    related to business or personal political activity shall
                    NOT:
                  </h3>
                  <h4>disrupt workplace activities;</h4>
                  <h4>promote or contribute to industrial unrest; </h4>
                  <h4>
                    create or appear to create the perception of affiliation of
                    the Company to a particular political party.
                  </h4>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontFamily: 'MTNBrighterSans-Light'
                    }}
                  >
                    Leadership of the Company and all employees, especially
                    employees whose roles promote close facial or voice
                    association with the Company shall desist from engaging in
                    personal political activity that detracts from the
                    perception of MTN as a politically neutral Company.
                  </h3>
                </LegalSection>
                <LegalSection
                  id="company-funds-and-property"
                  dangerouslySetInnerHTML={{
                    __html: company_funds_and_property
                  }}
                >
                  {/* <h2>Company’s Funds and Property</h2>
                  <p>
                    The Company has developed a number of internal controls to
                    safeguard its assets and imposes strict standards to prevent
                    fraud and dishonesty. All employees who have access to the
                    Company’s funds in any form must at all times follow
                    prescribed procedures for recording, handling and protecting
                    such funds. Operating areas may implement policies and
                    procedures relating to the safeguarding of the Company’s
                    property, including computer software and intellectual
                    property.
                  </p>
                  <p>
                    The Company is committed to conserving resources used in its
                    business operations. All employees should use their best
                    efforts to make efficient use of all the Company’s resources
                    and to reduce the use of, re-use recycled supplies and
                    materials wherever practical.
                  </p>
                  <p>
                    The Company’s funds, goods or services, however, shall not
                    be used for an activity other than its normal business.
                    Therefore, the Company’s funds, goods or services must not
                    be used as contributions to political parties or their
                    candidates, and Company’s facilities must not be made
                    available to candidates or campaigns, unless specifically
                    authorized in writing in advance by the Company’s Chief
                    Executive Officer.
                  </p>
                  <p>
                    The Company is not permitted to speculate in financial
                    derivatives or foreign currencies. The Company is however
                    permitted to manage limited short-term foreign currency and
                    interest exposures. Such management must be in terms of
                    policies and within detailed parameters of risk approved by
                    MTN Group and confirmed by the Board of Scancom Limited.
                  </p>
                  <p>
                    Employees must at all times, ensure that the Company’s funds
                    and property are used only for legitimate Company business
                    purposes. Where an employee’s position requires Company
                    funds to be spent, it is the individual’s responsibility to
                    use good judgment on the Company’s behalf and to ensure that
                    appropriate value is received by the Company for such
                    expenditure.
                  </p>
                  <p>
                    If employees become aware of any evidence that the Company’s
                    funds or property may have been used in a fraudulent or
                    improper manner, they should immediately and confidentially
                    advise the Company as set out in the Contravention of the
                    Code section of this booklet.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="company-records"
                  dangerouslySetInnerHTML={{ __html: company_records }}
                >
                  {/* <h2>Company’s Records </h2>
                  <p>
                    Accurate and reliable records of many kinds are necessary to
                    meet the Company’s legal and financial obligations and to
                    manage the affairs of the Company.
                  </p>
                  <p>
                    The Company’s books and records should reflect all business
                    transactions in an accurate and timely manner. Undisclosed
                    or unrecorded revenues, expenses, assets or liabilities are
                    not permissible and the employees responsible for accounting
                    and recording functions are expected to be diligent in
                    enforcing proper practices.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="dealing-with-outside-parties"
                  dangerouslySetInnerHTML={{
                    __html: dealing_with_outside_persons_and_organisations
                  }}
                >
                  {/* <h2>Dealing with Outside Persons and Organisations</h2>
                  <h3>Prompt Communications</h3>
                  <p>
                    The Company strives to achieve complete, accurate and timely
                    communications with all parties with whom it conducts
                    business, as well as government authorities and the public.
                    In addition, prompt internal communication is encouraged.
                  </p>
                  <p>
                    Group companies may not comment unfavorably on the products,
                    management or operations of competitors.
                  </p>
                  <p>
                    A prompt, courteous and accurate response should be made to
                    all reasonable requests for information and other client
                    communications. Any complaints should be dealt with in
                    accordance with internal procedures established by various
                    operating areas of the Company and applicable laws.
                  </p>
                  <h3>Media Relations</h3>
                  <p>
                    In addition to everyday communications with outside persons
                    and organizations, the Company will, on occasion, be asked
                    to express its views to the media on certain issues.
                  </p>
                  <p>
                    When communicating publicly on matters that involve the
                    Company’s business, employees must not presume to speak for
                    the Company on any matter, unless they are certain that the
                    views they express are those of the Company, and it is the
                    Company’s desire that such views be publicly disseminated.
                    Employees approached by the media should immediately contact
                    the Chief Executive Officer or the Corporate Services
                    Executive and in the absence of such persons, the Company
                    Secretary.
                  </p>
                  <p>
                    An employee, when dealing with anyone outside the Company,
                    including public officials, must take care not to compromise
                    the integrity or damage the reputation of any outside
                    individual, business, or government body, or that of the
                    Company and the MTN Group.
                  </p>
                  <p>
                    As a general rule, the Company’s position on public policy
                    or industry issues will be dealt with by senior management
                    of the Company. The text of articles for publication, public
                    speeches and addresses about the Company and its business
                    should be reviewed in advance with the employees’ manager or
                    the individual responsible for public relations, and
                    approved by the Executive Committee of the Company.
                    Employees must separate their personal roles from the
                    Company’s position when communicating on matters not
                    involving the Company’s business. They must be especially
                    careful to ensure that they are not identified with the
                    Company when pursuing personal or political activities,
                    unless this identification has been especially authorized in
                    writing in advance by the Company’s Chief Executive Officer.
                  </p>
                  <h3>Obligations to Society at large</h3>
                  <p>The Company shall:</p>

                  <ul>
                    <li>
                      Participate, within its means, in uplifting the community
                      in which it operates;
                    </li>
                    <li>Respect the law;</li>
                    <li>Respect the rights and dignity of other persons;</li>
                    <li>Pay all taxes and other duties as required by law.</li>
                  </ul> */}
                </LegalSection>
                <LegalSection
                  id="privacy-and-confidentiality"
                  dangerouslySetInnerHTML={{
                    __html: privacy_and_confidentiality
                  }}
                >
                  {/* <h2>Privacy and Confidentiality </h2>
                  <p>
                    In the regular course of business, the Company accumulates a
                    considerable amount of information. The following principles
                    are to be observed:
                  </p>
                  <h3>Confidentiality of Information </h3>
                  <p>
                    Each employee has a responsibility to safeguard confidential
                    and private information belonging to the Company or the MTN
                    Group and/or its customers, either in electronic format,
                    hardcopy or verbal format.
                  </p>
                  <p>This information includes:</p>
                  <ul>
                    <li>
                      Information of a strategic nature such as strategic plans,
                      expansion plans, business cases of projects and
                      initiatives, due diligence reports, marketing plans,
                      product designs, minutes of meetings etc.
                    </li>
                    <li>Customer personal details</li>
                    <li>
                      Call data records or customers or any information relating
                      to the customer’s usage of our networks
                    </li>
                    <li>
                      Any other information marked or classified as confidential
                    </li>
                  </ul>
                  <p>
                    Confidential company information should only be shared or
                    divulged to external parties with permission of management
                    and should only be shared with fellow employees if and when
                    appropriate.
                  </p>
                  <p>
                    Customer information may only be supplied to third parties
                    with specific approval of the customer or unless required by
                    the laws of the country after following a proper process
                    authorized by management.
                  </p>
                  <h3>Obtaining and Safeguarding Information</h3>
                  <p>
                    Only such information as is necessary to the Company’s
                    business should be collected, used and retained. When
                    personal information is needed, wherever possible, it should
                    be obtained directly from the person concerned. Only
                    reputable and reliable sources should be used to supplement
                    this information.
                  </p>
                  <p>
                    Information should only be retained as long as it is needed
                    or as required by law and such information should be
                    physically secured and protected.
                  </p> */}
                </LegalSection>
                <LegalSection
                  id="contravention-of-code"
                  dangerouslySetInnerHTML={{
                    __html: contravention_of_the_code
                  }}
                >
                  {/* <h2>Contravention of the Code</h2>
                  <p>
                    The Company regards any contravention of the Code as a
                    serious matter, at the same time, any suspected or alleged
                    contravention under investigation must be treated with
                    utmost confidentiality.
                  </p>
                  <p>
                    If employees believe that their own actions have or may have
                    contravened the Code, they should either advise the person
                    to whom they report or to a person at management level
                    responsible for Human Resources, or Corporate Services.
                  </p>
                  <p>
                    If employees suspect that a contravention of the Code has
                    been committed by another employee of the Company, they
                    should promptly and confidentially report this, preferably
                    in writing, to an Executive of the Company. They should
                    either advise the person to whom they report or one of the
                    management level persons to whom they report or one of the
                    senior management level persons referred to above. By
                    following this process, confidentiality will be maintained
                    and the matter will be investigated impartially. All
                    information will be treated confidentially and there will be
                    no retaliation for those who blow the whistle on any illegal
                    or unethical behaviour.
                  </p>
                  <p>
                    As contravention of the Code is a serious matter, it may
                    result in disciplinary action, including the termination of
                    employment. Certain breaches of the Code could also result
                    in civil or criminal proceedings.
                  </p> */}
                </LegalSection>
                <section
                  id="compliance-hotline"
                  dangerouslySetInnerHTML={{ __html: compliance_hotline }}
                >
                  {/* <h2>
                    <strong>Compliance Hotline</strong>
                  </h2>
                  <p>
                    To provide an alternative means for confidential reporting
                    of possible unethical or improper actions, the Company has
                    established the MTN Ghana Compliance Contact which includes
                    an email address and a post office box as follows:
                  </p>
                  <p>
                    Postal Address: Compliance Hotline Committee P. O. Box TF
                    281, La, Accra Email codeofethics@mtn.com.gh
                  </p>
                  <p>
                    The postal address and email address are intended to
                    supplement established reporting practices. Employee
                    questions concerning compensation and job performance should
                    be addressed through current HR processes.
                  </p> */}
                </section>

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
CodeEthics.propTypes = {
  pageContent: PropTypes.object
}
export default connect(state => ({
  pageContent: state.pages.preonboardingPages.codeOfEthics
}))(CodeEthics)
