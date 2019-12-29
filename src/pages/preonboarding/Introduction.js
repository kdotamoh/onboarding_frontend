import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Formik } from 'formik'

import { SmallNav } from 'components/navigation'
import { H4, Container, Img, Button } from 'components/styled'
import { Hero } from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/introduce_yourself.svg'
// import property from 'images/compliance_property.svg'
// import ip from 'images/compliance_ip.svg'
// import whistleblowing from 'images/compliance_whistleblowing.svg'

// import { COLORS } from '../../constants'

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

const initialValues = {
  bio: '',
  hobbies: '',
  current_charity: {
    education: false,
    health: false,
    economic_empowerment: false,
    other: ''
  },
  future_charity: '',
  recreation: '',
  social_media: '',
  referrer: ''
}

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <Container>
          <H4>Get introduced</H4>
          <Hero>
            <div className="row">
              <p className="column">
                You’re almost (75%) done but first we’d like to know a bit more
                about you, so we can introduce you to the rest of the team.
              </p>
              <img className="column" src={heroImg} alt="" />
            </div>
          </Hero>

          <p>
            Please answer the following questions and we’ll send out a quick
            introduction email to the people you’ll be working with.
          </p>

          <Formik
            initialValues={initialValues}
            onSubmit={() => {
              navigate('/preonboarding/first-three-days')
            }}
          >
            {props => (
              <form className="column">
                <label htmlFor="bio">
                  Tell us a bit more about yourself (750 characters limit)
                </label>
                <textarea
                  name="bio"
                  value={props.values.bio}
                  onChange={props.handleChange}
                ></textarea>

                <label htmlFor="hobbies">What are some of your hobbies?</label>
                <textarea
                  name="hobbies"
                  value={props.values.hobbies}
                  onChange={props.handleChange}
                ></textarea>

                <label htmlFor="current_charity">
                  What are some of the “Charity activities” you personally
                  support?
                </label>
                {/* 
                <Field name="lastName">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <label htmlFor="">
                      <input type="radio" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                      Education
                    </label>
                  )}
                </Field> */}

                <label htmlFor="">
                  <input
                    type="radio"
                    value={props.values.current_charity.education}
                    onChange={props.handleChange}
                    name="current_charity.education"
                    // id=""
                  />
                  Education
                </label>

                <label htmlFor="">
                  <input
                    type="radio"
                    value={props.values.current_charity.health}
                    onChange={props.handleChange}
                    name="current_charity.health"
                    // id=""
                  />
                  Health
                </label>

                <label htmlFor="">
                  <input
                    type="radio"
                    value={props.values.current_charity.economic_empowerment}
                    onChange={props.handleChange}
                    name="current_charity.economic_empowerment"
                    // id=""
                  />
                  Economic Empowerment
                </label>

                {/* <label htmlFor="future_charity">
                  What are some of the “Charity activities” you will want to
                  support in the future?
                </label>

                <label htmlFor="recreation">
                  Which of these recreational activities do you participate in?
                </label> */}
              </form>
            )}
          </Formik>

          <Button
            color="blue"
            onClick={() => navigate('/preonboarding/first-three-days')}
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
