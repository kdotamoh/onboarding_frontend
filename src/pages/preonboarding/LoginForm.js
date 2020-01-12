import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import axios from 'axios'
import { connect } from 'react-redux'

import { setToken } from 'store/auth'
import { setUser } from 'store/user'

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
class LoginForm extends Component {
  handleSubmit = async values => {
    try {
      let res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_BASE}/api-token-auth/`,
        data: {
          email: values.username, // Todo: actually use a username
          password: values.password
        }
      })
      console.log(res)
      let {
        data: { jwt, user }
      } = res
      await this.props.setToken(jwt)
      await this.props.setUser(user)
      navigate(`${this.props.next}`)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(
            values
            // { setSubmitting }
          ) => {
            this.handleSubmit(values)
            // setSubmitting(false)
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
              <Button
                style={{ padding: '0.5rem' }}
                mt="1rem"
                color="blue"
                type="submit"
              >
                LOG IN
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

const mapDispatch = { setToken, setUser }

export default connect(null, mapDispatch)(LoginForm)

LoginForm.propTypes = {
  setToken: PropTypes.func,
  setUser: PropTypes.func,
  next: PropTypes.string
}
