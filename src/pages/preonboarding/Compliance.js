import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav, StepNav } from 'components/navigation'
import { H4, H3, Container, Img, Button, Wrapper } from 'components/styled'
import { Hero } from 'views/layout'
import { COLORS } from '../../constants'

import bgImg from 'images/bg_l_bottomright.svg'

// import conduct from 'images/compliance_conduct.svg'
// import property from 'images/compliance_property.svg'
// import ip from 'images/compliance_ip.svg'
// import whistleblowing_img from 'images/compliance_whistleblowing.svg'
// import corruption_img from 'images/compliance_corruption.svg'
// import interest_img from 'images/compliance_interest.svg'
// import gifts_img from 'images/compliance_gifts.svg'
// import employees_img from 'images/compliance_employees.svg'
// import customers_img from 'images/compliance_customers.svg'
// import privacy_img from 'images/compliance_privacy.svg'
// import pr_img from 'images/compliance_pr.svg'
// import suppliers_img from 'images/compliance_suppliers.svg'
// import governance_img from 'images/compliance_governance.svg'
// import society_img from 'images/compliance_society.svg'
// import guidance_img from 'images/compliance_guidance.svg'

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
    // const { hero_text } = this.props.pageContent ? this.props.pageContent : {}
    // const { general_conduct } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { property_and_information } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { intellectual_property } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { whistleblowing } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { corruption } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { conflict_of_interest } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { gifts_and_hospitality } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { our_employees } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { our_customers } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { data_privacy } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { public_relations } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { our_suppliers } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { compliance_and_government } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { society_and_environment } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore
    // const { guidance } = this.props.pageContent ? this.props.pageContent : {} // prettier-ignore

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
              <img className="column" src={heroImg} alt="" />
              <p
                className="column"
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
                    <img alt="" src={section.img} />
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    ></div>
                  </Section>
                ))}

            {/* <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>General Conduct</H4>
              <img alt="" src={conduct} />
              <div dangerouslySetInnerHTML={{ __html: general_conduct }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>
                Property and Information
              </H4>
              <img alt="" src={property} />
              <div
                dangerouslySetInnerHTML={{ __html: property_and_information }}
              ></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Intellectual Property</H4>
              <img alt="" src={ip} />
              <div
                dangerouslySetInnerHTML={{ __html: intellectual_property }}
              ></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Whistleblowing</H4>
              <img alt="" src={whistleblowing_img} />
              <div dangerouslySetInnerHTML={{ __html: whistleblowing }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>
                Anti-Bribery &amp; Corruption
              </H4>
              <img alt="" src={corruption_img} />
              <div dangerouslySetInnerHTML={{ __html: corruption }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Conflict of Interest</H4>
              <img alt="" src={interest_img} />
              <div
                dangerouslySetInnerHTML={{ __html: conflict_of_interest }}
              ></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>
                Gifts, Entertainment and Hospitality
              </H4>
              <img alt="" src={gifts_img} />
              <div
                dangerouslySetInnerHTML={{ __html: gifts_and_hospitality }}
              ></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Our Employees</H4>
              “We believe in developing our talent, because it’s our people who
              make us what we are.”
              <img alt="" src={employees_img} />
              <div dangerouslySetInnerHTML={{ __html: our_employees }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Our Customers</H4>
              <img alt="" src={customers_img} />
              <div dangerouslySetInnerHTML={{ __html: our_customers }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Data Privacy</H4>
              <img alt="" src={privacy_img} />
              <div dangerouslySetInnerHTML={{ __html: data_privacy }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Public Relations</H4>
              <img alt="" src={pr_img} />
              <div dangerouslySetInnerHTML={{ __html: public_relations }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Our Suppliers</H4>
              <img alt="" src={suppliers_img} />
              <div dangerouslySetInnerHTML={{ __html: our_suppliers }}></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>
                Compliance and Governance
              </H4>
              <img alt="" src={governance_img} />
              <div
                dangerouslySetInnerHTML={{ __html: compliance_and_government }}
              ></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>
                Communities, Society and the Environment
              </H4>
              <img alt="" src={society_img} />
              <div
                dangerouslySetInnerHTML={{ __html: society_and_environment }}
              ></div>
            </Section>

            <Section>
              <H4 color={COLORS.DARKER_GREYISH_BROWN}>Guidance</H4>
              <img alt="" src={guidance_img} />
              <div dangerouslySetInnerHTML={{ __html: guidance }}></div>
            </Section> */}

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
Compliance.propTypes = {
  pageContent: PropTypes.array
}

export default connect(state => ({
  pageContent: state.pages.preonboardingPages.compliance
}))(Compliance)
