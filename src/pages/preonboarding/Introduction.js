import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { SmallNav, StepNav } from 'components/navigation'
import { H3, Container, Img, Button } from 'components/styled'
import { Hero } from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/introduce_yourself.svg'

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

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 7rem;

  input[type='checkbox'] {
    margin-right: 0.5rem;
    background: transparent;
  }

  small {
    font-size: 65%;
  }

  p {
    margin: 1rem 0;
    margin-top: 3rem;
  }

  input[type='text'] {
    border: 0;
    border-bottom: 1px solid #e6e6e6;
    width: 45%;
    padding-left: 1rem;
    padding-right: 1rem;
    background: transparent;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

const Textarea = styled.textarea.attrs(() => ({
  rows: '5'
}))`
  border: 0.5px solid #e6e6e6;
  border-radius: 2px;
  resize: none;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Error = styled.div`
  text-align: left;
  color: red;
  font-size: 70%;
`

const initialValues = {
  bio: '',
  hobbies: '',
  current_charity: {
    education: false,
    health: false,
    economic_empowerment: false,
    other: {
      checked: false,
      text: ''
    }
  },
  future_charity: {
    education: false,
    health: false,
    economic_empowerment: false,
    other: {
      checked: false,
      text: ''
    }
  },
  recreation: {
    soccer: false,
    handball: false,
    tennis: false,
    basketball: false,
    other: {
      checked: false,
      text: ''
    }
  },
  social_media: {
    facebook: false,
    instagram: false,
    twitter: false,
    snapchat: false,
    whatsapp: false,
    other: {
      checked: false,
      text: ''
    }
  },
  referrer: {
    mtnCareerPage: false,
    linkedIn: false,
    twitter: false,
    referrals: false,
    other: {
      checked: false,
      text: ''
    }
  }
}

let ValidationSchema = Yup.object().shape({
  bio: Yup.string().required('This field is required'),
  hobbies: Yup.string().required('This field is required')
})

class Introduction extends Component {
  state = {
    isSubmitting: false,
    errorMessage: ''
  }
  render() {
    const { title } = this.props.pageContent ? this.props.pageContent : {}
    const { hero_text } = this.props.pageContent ? this.props.pageContent : {}
    const { description } = this.props.pageContent ? this.props.pageContent : {}

    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem" dangerouslySetInnerHTML={{ __html: title }}></H3>
          <Hero>
            <div className="row">
              <img className="column hero__image" src={heroImg} alt="" />
              <p
                className="column hero__text"
                dangerouslySetInnerHTML={{ __html: hero_text }}
              ></p>
            </div>
          </Hero>

          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={async (values, props) => {
              props.setSubmitting(true)
              this.setState({ isSubmitting: true })

              let current_charity = Object.keys(values.current_charity).filter(
                key => values.current_charity[key] === true
              )
              if (values.current_charity.other.checked === true) {
                current_charity.push(values.current_charity.other.text)
              }

              let future_charity = Object.keys(values.future_charity).filter(
                key => values.future_charity[key] === true
              )
              if (values.future_charity.other.checked === true) {
                future_charity.push(values.future_charity.other.text)
              }

              let recreation = Object.keys(values.recreation).filter(
                key => values.recreation[key] === true
              )
              if (values.recreation.other.checked === true) {
                recreation.push(values.recreation.other.text)
              }

              let social_media = Object.keys(values.social_media).filter(
                key => values.social_media[key] === true
              )
              if (values.social_media.other.checked === true) {
                social_media.push(values.social_media.other.text)
              }

              let referrer = Object.keys(values.referrer).filter(
                key => values.referrer[key] === true
              )
              if (values.referrer.other.checked === true) {
                referrer.push(values.referrer.other.text)
              }

              let data = {
                bio: values.bio,
                hobbies: values.hobbies,
                current_charity,
                future_charity,
                recreation,
                social_media,
                referrer
              }
              console.log(data)

              try {
                await axios({
                  method: 'post',
                  url: `${process.env.REACT_APP_API_BASE}/introduction/ `,
                  data,
                  headers: {
                    Authorization: `JWT ${this.props.token}`
                  }
                })
                navigate('/preonboarding/your-first-three-days')
              } catch (err) {
                console.error(err)
                this.setState({
                  errorMessage: 'Something went wrong. Please try again.'
                })
              } finally {
                this.setState({ isSubmitting: false })
              }
            }}
            validationSchema={ValidationSchema}
          >
            {props => (
              <>
                <Form onSubmit={props.handleSubmit}>
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                  <label htmlFor="bio">
                    <span>Tell us a bit more about yourself </span>
                    <small>(750 characters limit)</small>
                  </label>
                  <Textarea
                    type="text"
                    name="bio"
                    value={props.values.bio}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    maxLength="750"
                  ></Textarea>
                  {props.errors.bio && props.touched.bio ? (
                    <Error id="feedback">{props.errors.bio}</Error>
                  ) : null}

                  <p>What are some of your hobbies?</p>
                  <Textarea
                    type="text"
                    name="hobbies"
                    value={props.values.hobbies}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                  ></Textarea>
                  {props.errors.hobbies && props.touched.hobbies ? (
                    <Error id="feedback">{props.errors.hobbies}</Error>
                  ) : null}

                  <p>
                    What are some of the “Charity activities” you personally
                    support?
                  </p>

                  <label htmlFor="current_charity.education">
                    <input
                      type="checkbox"
                      checked={props.values.current_charity.education}
                      value={props.values.current_charity.education}
                      onChange={props.handleChange}
                      name="current_charity.education"
                    />
                    Education
                  </label>

                  <label htmlFor="current_charity.health">
                    <input
                      type="checkbox"
                      checked={props.values.current_charity.health}
                      value={props.values.current_charity.health}
                      onChange={props.handleChange}
                      name="current_charity.health"
                    />
                    Health
                  </label>

                  <label htmlFor="current_charity.economic_empowerment">
                    <input
                      type="checkbox"
                      checked={
                        props.values.current_charity.economic_empowerment
                      }
                      value={props.values.current_charity.economic_empowerment}
                      onChange={props.handleChange}
                      name="current_charity.economic_empowerment"
                    />
                    Economic Empowerment
                  </label>

                  <label htmlFor="current_charity.other.checked">
                    <input
                      type="checkbox"
                      checked={props.values.current_charity.other.checked}
                      value={props.values.current_charity.other.checked}
                      onChange={props.handleChange}
                      name="current_charity.other.checked"
                    />
                    Other (specify)
                    <input
                      type="text"
                      hidden={!props.values.current_charity.other.checked}
                      value={props.values.current_charity.other.text}
                      onChange={props.handleChange}
                      name="current_charity.other.text"
                    />
                  </label>

                  <p>
                    What are some of the “Charity activities” you will want to
                    support in the future?
                  </p>

                  <label htmlFor="future_charity.education">
                    <input
                      type="checkbox"
                      checked={props.values.future_charity.education}
                      value={props.values.future_charity.education}
                      onChange={props.handleChange}
                      name="future_charity.education"
                    />
                    Education
                  </label>

                  <label htmlFor="future_charity.health">
                    <input
                      type="checkbox"
                      checked={props.values.future_charity.health}
                      value={props.values.future_charity.health}
                      onChange={props.handleChange}
                      name="future_charity.health"
                    />
                    Health
                  </label>

                  <label htmlFor="future_charity.economic_empowerment">
                    <input
                      type="checkbox"
                      checked={props.values.future_charity.economic_empowerment}
                      value={props.values.future_charity.economic_empowerment}
                      onChange={props.handleChange}
                      name="future_charity.economic_empowerment"
                    />
                    Economic Empowerment
                  </label>

                  <label htmlFor="future_charity.other.checked">
                    <input
                      type="checkbox"
                      checked={props.values.future_charity.other.checked}
                      value={props.values.future_charity.other.checked}
                      onChange={props.handleChange}
                      name="future_charity.other.checked"
                    />
                    Other (specify)
                    <input
                      hidden={!props.values.future_charity.other.checked}
                      type="text"
                      value={props.values.future_charity.other.text}
                      onChange={props.handleChange}
                      name="future_charity.other.text"
                    />
                  </label>

                  <p>
                    Which of these recreational activities do you participate
                    in?
                  </p>

                  <label htmlFor="recreation.soccer">
                    <input
                      type="checkbox"
                      checked={props.values.recreation.soccer}
                      value={props.values.recreation.soccer}
                      onChange={props.handleChange}
                      name="recreation.soccer"
                    />
                    Soccer
                  </label>

                  <label htmlFor="recreation.handball">
                    <input
                      type="checkbox"
                      checked={props.values.recreation.handball}
                      value={props.values.recreation.handball}
                      onChange={props.handleChange}
                      name="recreation.handball"
                    />
                    Handball
                  </label>

                  <label htmlFor="recreation.tennis">
                    <input
                      type="checkbox"
                      checked={props.values.recreation.tennis}
                      value={props.values.recreation.tennis}
                      onChange={props.handleChange}
                      name="recreation.tennis"
                    />
                    Tennis
                  </label>

                  <label htmlFor="recreation.basketball">
                    <input
                      type="checkbox"
                      checked={props.values.recreation.basketball}
                      value={props.values.recreation.basketball}
                      onChange={props.handleChange}
                      name="recreation.basketball"
                    />
                    Basketball
                  </label>

                  <label htmlFor="recreation.other.checked">
                    <input
                      type="checkbox"
                      checked={props.values.recreation.other.checked}
                      value={props.values.recreation.other.checked}
                      onChange={props.handleChange}
                      name="recreation.other.checked"
                    />
                    Other (specify)
                    <input
                      type="text"
                      hidden={!props.values.recreation.other.checked}
                      value={props.values.recreation.other.text}
                      onChange={props.handleChange}
                      name="recreation.other.text"
                    />
                  </label>

                  <p>What are some of your favourite social media platforms?</p>

                  <label htmlFor="social_media.facebook">
                    <input
                      type="checkbox"
                      checked={props.values.social_media.facebook}
                      value={props.values.social_media.facebook}
                      onChange={props.handleChange}
                      name="social_media.facebook"
                    />
                    Facebook
                  </label>

                  <label htmlFor="social_media.instagram">
                    <input
                      type="checkbox"
                      checked={props.values.social_media.instagram}
                      value={props.values.social_media.instagram}
                      onChange={props.handleChange}
                      name="social_media.instagram"
                    />
                    Instagram
                  </label>

                  <label htmlFor="social_media.twitter">
                    <input
                      type="checkbox"
                      checked={props.values.social_media.twitter}
                      value={props.values.social_media.twitter}
                      onChange={props.handleChange}
                      name="social_media.twitter"
                    />
                    Twitter
                  </label>

                  <label htmlFor="social_media.snapchat">
                    <input
                      type="checkbox"
                      checked={props.values.social_media.snapchat}
                      value={props.values.social_media.snapchat}
                      onChange={props.handleChange}
                      name="social_media.snapchat"
                    />
                    Snapchat
                  </label>

                  <label htmlFor="social_media.whatsapp">
                    <input
                      type="checkbox"
                      checked={props.values.social_media.whatsapp}
                      value={props.values.social_media.whatsapp}
                      onChange={props.handleChange}
                      name="social_media.whatsapp"
                    />
                    Whatsapp
                  </label>

                  <label htmlFor="social_media.other.checked">
                    <input
                      type="checkbox"
                      checked={props.values.social_media.other.checked}
                      value={props.values.social_media.other.checked}
                      onChange={props.handleChange}
                      name="social_media.other.checked"
                    />
                    Other (specify)
                    <input
                      type="text"
                      hidden={!props.values.social_media.other.checked}
                      value={props.values.social_media.other.text}
                      onChange={props.handleChange}
                      name="social_media.other.text"
                    />
                  </label>

                  <p>How did you get to know about this job vacancy?</p>

                  <label htmlFor="referrer.mtnCareerPage">
                    <input
                      type="checkbox"
                      checked={props.values.referrer.mtnCareerPage}
                      value={props.values.referrer.mtnCareerPage}
                      onChange={props.handleChange}
                      name="referrer.mtnCareerPage"
                    />
                    MTN Ghana Career Page
                  </label>

                  <label htmlFor="referrer.linkedIn">
                    <input
                      type="checkbox"
                      checked={props.values.referrer.linkedIn}
                      value={props.values.referrer.linkedIn}
                      onChange={props.handleChange}
                      name="referrer.linkedIn"
                    />
                    LinkedIn
                  </label>

                  <label htmlFor="referrer.twitter">
                    <input
                      type="checkbox"
                      checked={props.values.referrer.twitter}
                      value={props.values.referrer.twitter}
                      onChange={props.handleChange}
                      name="referrer.twitter"
                    />
                    Twitter
                  </label>

                  <label htmlFor="referrer.referrals">
                    <input
                      type="checkbox"
                      checked={props.values.referrer.referrals}
                      value={props.values.referrer.referrals}
                      onChange={props.handleChange}
                      name="referrer.referrals"
                    />
                    Referrals
                  </label>

                  <label htmlFor="referrer.other.checked">
                    <input
                      type="checkbox"
                      checked={props.values.referrer.other.checked}
                      value={props.values.referrer.other.checked}
                      onChange={props.handleChange}
                      name="referrer.other.checked"
                    />
                    Other (specify)
                    <input
                      type="text"
                      hidden={!props.values.referrer.other.checked}
                      value={props.values.referrer.other.text}
                      onChange={props.handleChange}
                      name="referrer.other.text"
                    />
                  </label>
                </Form>

                <Button
                  style={{
                    marginBottom: '5rem',
                    fontSize: '110%',
                    padding: '1rem 4rem'
                  }}
                  color="blue"
                  type="submit"
                  onClick={props.handleSubmit}
                  // onClick={() => navigate('/preonboarding/your-first-three-days')}
                >
                  {this.state.isSubmitting ? 'Submitting...' : 'Next Step >'}
                </Button>

                {this.state.errorMessage && (
                  <p style={{ marginTop: '3rem', color: 'red' }}>
                    {this.state.errorMessage}
                  </p>
                )}
              </>
            )}
          </Formik>

          <BgImgContainer>
            <BgImg src={bgImg} />
          </BgImgContainer>
        </Container>
      </div>
    )
  }
}
Introduction.propTypes = {
  token: PropTypes.string,
  pageContent: PropTypes.object
}
export default connect(state => ({
  token: state.token,
  pageContent: state.pages.preonboardingPages.introduction
}))(Introduction)
