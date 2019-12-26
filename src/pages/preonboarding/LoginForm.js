import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { COLORS, INPUT_WIDTH } from '../../constants'

import { Button } from 'components/styled'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Input = styled.input`
  background: white;
  height: 1.5rem;
  width: ${INPUT_WIDTH}rem;
  border: solid 1px ${COLORS.INPUT_BORDER_COLOR};
  padding: 1.5rem;
  margin: 0.5rem 0;
`

const FormHeading = styled.h2`
  color: ${COLORS.TWILIGHT_BLUE};
  font-family: MTNBrighterSans-Regular;
`

const Label = styled.label`
  color: ${COLORS.LABEL_COLOR};
`

const Error = styled.div`
  color: red;
  font-size: 1.2rem;
`

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <FormHeading>
          Pre-onboarding
          <br />
          Log In
        </FormHeading>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={() => {
            navigate('/preonboarding/welcome')
          }}
          validationSchema={LoginSchema}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.username}
                name="username"
              />
              {props.errors.username && props.touched.username ? (
                <Error id="feedback">{props.errors.username}</Error>
              ) : null}
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name="password"
              />
              {props.errors.password && props.touched.password ? (
                <Error id="feedback">{props.errors.password}</Error>
              ) : null}
              <Button color="blue" type="submit">
                LOG IN
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
