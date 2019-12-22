import React, { Component } from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { COLORS } from '../../constants'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  background: white;
  height: 15px;
  width: 100%;
  border: solid 1px ${COLORS.INPUT_BORDER_COLOR};
  padding: 1.5rem;
  margin: 0.5rem 0;
`

const SubmitButton = styled.button`
  font-size: 12px;
  color: ${COLORS.WHITE};
  background: ${COLORS.BUTTON_PRIMARY};
  text-transform: uppercase;
  padding: 1rem;
  border-color: ${COLORS.BUTTON_PRIMARY};
`

const FormHeading = styled.h2`
  color: ${COLORS.TWILIGHT_BLUE};
  margin-bottom: 2rem;
`

const Label = styled.label`
  color: ${COLORS.LABEL_COLOR};
`

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <FormHeading>Pre-Onboarding Login</FormHeading>
        <Formik
          initialValues={{ username: 'jared', password: '' }}
          onSubmit={() => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2))
            //   actions.setSubmitting(false)
            // }, 1000)
            navigate('/welcome')
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="username"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name="password"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <SubmitButton type="submit">Log in</SubmitButton>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
