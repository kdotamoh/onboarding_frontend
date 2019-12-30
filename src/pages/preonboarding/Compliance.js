import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav } from 'components/navigation'
import { H4, Container, Img, Button } from 'components/styled'
import { Hero } from 'views/layout'

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
`

const sections = [
  {
    heading: 'General Conduct',
    img: conduct,
    p:
      'What is required of us? How do we achieve this? Why is this important? At all times we are professional, respect the traditions and culture of all people, and refrain from behavior that’s offensive, intimidating, malicious or discriminatory.'
  },
  {
    heading: 'Property and Information',
    img: property,
    p:
      'We endeavor to put measures in place to ensure that our property and equipment are safe and secure at all times. Company resources should only be used for lawful business purposes and Employees are required to safeguard MTN against wasteful practices.'
  },
  {
    heading: 'Intellectual Property',
    img: ip,
    p:
      'You are the custodian of our brand so it’s up to you to ensure that we remain consistent – from Afghanistan to Zambia, and everywhere between.'
  },
  {
    heading: 'Whistleblowing',
    img: whistleblowing,
    p:
      '“MTN sees whistleblowing differently, regarding it as a positive practice that assists the organization to detect incidents of fraud, misconduct, and illegal activity early.” /n Q&A /n Q: How do I report suspicious or illegal activity? /n  A: You may make use of our reporting channels such as: /n   The MTN Fraud Hotline: 1385 /n  Email: anonymous@tip-offs.com /n    You may also refer to your local Risk and Compliance department for further information. /n  Read the Whistleblowing Policy here https://bit.ly/2Y4KPwh'
  },
  {
    heading: 'Anti-Bribery & Corruption',
    img: corruption,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Conflict of Interest',
    img: interest,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Gifts, Entertainment and Hospitality',
    img: gifts,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Our Employees',
    img: employees,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Our Customers',
    img: customers,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Data Privacy',
    img: privacy,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Public Relations',
    img: pr,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Our Suppliers',
    img: suppliers,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Compliance and Governance',
    img: governance,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Communities, Society and the Environment',
    img: society,
    p: 'Lorem ipsum'
  },
  {
    heading: 'Guidance',
    img: guidance,
    p: 'Lorem ipsum'
  }
]

export default class Compliance extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <Container>
          <H4 py="3rem">Compliance &amp; Governance</H4>
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
          {sections.length &&
            sections.map((section, id) => (
              <Section key={id}>
                <H4>{section.heading}</H4>
                <img alt="" src={section.img} />
                <p>{section.p}</p>
              </Section>
            ))}
          <Button
            color="blue"
            onClick={() => navigate('/preonboarding/code-of-ethics')}
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
