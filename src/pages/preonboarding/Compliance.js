import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav, StepNav } from 'components/navigation'
import { H4, H3, Container, Img, Button, Wrapper } from 'components/styled'
import { Hero } from 'views/layout'
import { COLORS } from '../../constants'

import bgImg from 'images/bg_l_bottomright.svg'

import conduct from 'images/compliance_conduct.svg'
import property from 'images/compliance_property.svg'
import ip from 'images/compliance_ip.svg'
import whistleblowing from 'images/compliance_whistleblowing.svg'
import corruption from 'images/compliance_corruption.svg'
import interest from 'images/compliance_interest.svg'
import gifts from 'images/compliance_gifts.svg'
import employees from 'images/compliance_employees.svg'
import customers from 'images/compliance_customers.svg'
import privacy from 'images/compliance_privacy.svg'
import pr from 'images/compliance_pr.svg'
import suppliers from 'images/compliance_suppliers.svg'
import governance from 'images/compliance_governance.svg'
import society from 'images/compliance_society.svg'
import guidance from 'images/compliance_guidance.svg'

import heroImg from 'images/compliance_hero.svg'

// import { COLORS } from '../../constants'

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
`

const sections = [
  {
    heading: 'General Conduct',
    img: conduct,
    text: `<p>
      What is required of us? How do we achieve this? Why is this important? At all times we are professional, 
      respect the traditions and culture of all people, and refrain from behavior that’s offensive, intimidating, malicious or discriminatory.
      </p>
      `
  },
  {
    heading: 'Property and Information',
    img: property,
    text: `<p>We endeavor to put measures in place to ensure that our property and equipment are safe and secure at all times. 
    Company resources should only be used for lawful business purposes and Employees are required to safeguard MTN against wasteful practices.</p>
    `
  },
  {
    heading: 'Intellectual Property',
    img: ip,
    text: `<p>You are the custodian of our brand so it’s up to you to ensure 
    that we remain consistent – from Afghanistan to Zambia, and everywhere between.</p>`
  },
  {
    heading: 'Whistleblowing',
    img: whistleblowing,
    text: `<p>“MTN sees whistleblowing differently, regarding it as a positive practice that assists the organization to detect incidents of fraud,
       misconduct, and illegal activity early.”</p>  <p><strong>Q&A</strong></br><strong>Q</strong>: How do I report suspicious or illegal activity? 
       </br> <strong>A</strong>: You may make use of our reporting channels such as: </br>  The MTN Fraud Hotline: 1385 </br> Email: anonymous@tip-offs.com 
       </br> You may also refer to your local Risk and Compliance department for further information.</p>  Read the Whistleblowing Policy here <a href="https://bit.ly/2Y4KPwh">https://bit.ly/2Y4KPwh</a>`
  },
  {
    heading: 'Anti-Bribery & Corruption',
    img: corruption,
    text: `
      <p>It is our policy to conduct our business activities with honesty, integrity and to the highest ethical standards.</p>
      
      Read the MTN-GROUP ANTI-BRIBERY & CORRUPTION POLICY here </br>
      <a href="https://bit.ly/30Tr73B">https://bit.ly/30Tr73B</a>`
  },
  {
    heading: 'Conflict of Interest',
    img: interest,
    text: `
      <p>It is not permissible for employees to: </p>
      
      <ul>
      <li> conclude contracts or arrangements or receive or place business on behalf of MTN for financial or personal gain;</li>
      <li>use his/her position or authority to influence or make decisions that lead to any form of financial or personal gain for him/herself, his/her close associates or family members; </li>
      <li>source or promote any commercial activities for a third party for the purpose of financial or personal gain for him/herself, 
      his/her close associates or family members; and/or engage in any other conduct that may be construed or identified as constituting a conflict of interest.</li>
      </ul>

      Read the Conflict of Interest Policy here <a href="https://bit.ly/30Tr73B">https://bit.ly/30Tr73B</a>`
  },
  {
    heading: 'Gifts, Entertainment and Hospitality',
    img: gifts,
    text: `
      <p>Whilst we appreciate our business partners’ goodwill, MTN has a strict “No-Gifts” stance.</p>

      Read the MTN-Goup Gifts & Entertainment Policy here <a href="https://bit.ly/30Tr73B">https://bit.ly/30Tr73B</a>`
  },
  {
    heading: 'Our Employees',
    img: employees,
    text: `
      <p>“We believe in developing our talent, because it’s our people who make us what we are.”</p>
      
      <p>At MTN, we do not tolerate harassment, intimidation or discrimination and we respect the political and religious views of all employees. We are also strongly against any form of slavery and child labor.</p>
      
      <p>It is important that you use the link below to read MTN Disciplinary Code and Policy. You may also refer to your local Risk and Compliance Department for more information. <a href="https://bit.ly/2SCe2ca">https://bit.ly/2SCe2ca</a></a></p>`
  },
  {
    heading: 'Our Customers',
    img: customers,
    text: `
    <p>Our relationship with our customers is based trust and integrity and we are committed to upholding these values throughout the 
    organization and in how we serve our customers. Through our collective commitment, we are able to work together to ensure that we make our customers’ lives a whole lot BRIGHTER.</p>`
  },
  {
    heading: 'Data Privacy',
    img: privacy,
    text: `
      <p>An information leak takes place when confidential information is revealed to unauthorized persons or parties. 
      Employees who are tempted on a regular basis to disclose customer information to family members or friends, contrary to the data protection laws which MTN is required to operate within should desist from the act.</p>

      Read the MTN-Goup Gifts & Entertainment Policy here <a href="https://bit.ly/30Tr73B">https://bit.ly/30Tr73B</a>
  `
  },
  {
    heading: 'Public Relations',
    img: pr,
    text: `<p>
      What is required of us?
      We ensure that any statements disclosed to the public and/or key stakeholders are accurate, factual and are disclosed by authorized officials.
      </p>
      `
  },
  {
    heading: 'Our Suppliers',
    img: suppliers,
    text: `
      <p>We ensure that our vendors and suppliers adhere to our ethical standards and compliance obligations at all times and wherever we operate in the world. 
      The MTN Group Supplier Code of Conduct defines the standards to be met by all suppliers in carrying out business with MTN, including their employees and subcontractors.</p>`
  },
  {
    heading: 'Compliance and Governance',
    img: governance,
    text: `
     <p> We encourage our stakeholders to take personal responsibility for upholding the Group’s ethics, but we also have formal structures in place to assist with compliance.</p>`
  },
  {
    heading: 'Communities, Society and the Environment',
    img: society,
    text: `
      <p>In order to ensure a sustainable future for all, we must ensure that we keep up to date with environmental laws, regulations and international best practice. We must also use our resources sparingly and in a prudent manner at all times. </p>
      
      <p>Use water, electricity and other resources wisely. Think before printing, dispose of waste responsibly and recycle waste in designated areas.</p>`
  },
  {
    heading: 'Guidance',
    img: guidance,
    text: `
      <p>We see the choice to communicate and speak up as a proactive step in managing any issues or raising concerns.</p>
      
      <p>If you require guidance on our ethical standards or you suspect or have witnessed any breach of the standards set out in the MTN Conduct Passport, please consider consult with your direct line management.</p>`
  }
]

export default class Compliance extends Component {
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

  render() {
    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem">Compliance &amp; Governance</H3>
          <Hero>
            <div className="row">
              <img className="column" src={heroImg} alt="" />
              <p className="column">
                As responsible corporate citizens, we are committed to uphold
                our compliance obligations when we do business and instil good
                governance practices to achieve our strategic goals. We are
                guided by both local and global corporate governance practices.
              </p>
            </div>
          </Hero>

          <Wrapper width="50%">
            {sections.length &&
              sections.map((section, id) => (
                <Section key={id}>
                  <H4 color={COLORS.DARKER_GREYISH_BROWN}>{section.heading}</H4>
                  <img alt="" src={section.img} />
                  <div dangerouslySetInnerHTML={{ __html: section.text }}></div>
                </Section>
              ))}

            <div style={{ width: '100%', textAlign: 'left' }}>
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
          </Wrapper>
          <Button
            disabled={!this.state.checked}
            color="blue"
            onClick={() => navigate('/preonboarding/code-of-ethics')}
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
