import React, { Component } from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  background: red;
`

const Button = styled.button`
  font-size: 12px;
`

const FormHeading = styled.h2`
  color: green;
`

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <FormHeading>Pre-Onboarding Login</FormHeading>
        <Formik
          initialValues={{ username: 'jared', password: '' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
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
              <p>Forgot password and username?</p>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
