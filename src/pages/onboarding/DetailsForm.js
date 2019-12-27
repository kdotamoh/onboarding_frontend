import React, { Component } from 'react'
import { Formik, FieldArray, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import PropTypes from 'prop-types'

// import { COLORS, INPUT_WIDTH } from '../../constants'

import { Button } from 'components/styled'

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin-top: 2rem;
// `

// const Input = styled.input`
//   background: white;
//   height: 1.5rem;
//   width: ${INPUT_WIDTH}rem;
//   border: solid 1px ${COLORS.INPUT_BORDER_COLOR};
//   padding: 1.5rem;
//   margin: 0.5rem 0;
// `

// const Label = styled.label`
//   color: ${COLORS.LABEL_COLOR};
// `

const Error = styled.div`
  color: red;
  font-size: 1.2rem;
`

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})

const FormSection = ({ step, children }) => {
  return <div step={step}>{children}</div>
}

FormSection.propTypes = {
  step: PropTypes.number,
  children: PropTypes.node
}

const initialValues = {
  passportPhoto: '',
  surname: '',
  middleName: '',
  firstName: '',
  contactNumber: '',
  dateOfBirth: '',
  gender: '',
  nationality: '',
  region: '',
  nationalId: '',
  maritalStatus: '',
  spouse: {
    name: '',
    contactNumber: ''
  },
  marriageCertificate: '',
  children: [{ name: '', dateOfBirth: '', birthCertificate: '' }],
  parents: { father: '', mother: '' },
  // next of kin
  nexOfKin: {
    name: '',
    dateOfBirth: '',
    address: '',
    contactNumber: ''
  },
  // education
  educationalCertificates: [],
  professionalBodies: [],
  nationalService: {
    startDate: '',
    endDate: '',
    certificate: ''
  },
  // residential
  residentialAddress: {
    physical: '',
    digital: '',
    phoneNumber: ''
  },
  postalAddress: '',
  // salary transfer
  socialSecurity: '',
  TIN: '',
  bank: {
    branch: '',
    accountNumber: '',
    sortCode: ''
  },
  // family line
  familyLine: {
    name: '',
    relationship: '',
    mobileNumber: ''
  },
  medicalInsurance: {
    provider: '',
    form: ''
  },
  fuelCard: ''
}

export default class DetailsForm extends Component {
  handleBirthCertificate = (props, event, id) => {
    const newChildren = props.values.children.map((child, childId) => {
      if (id !== childId) return child
      return {
        ...child,
        birthCertificate: event.currentTarget.files[0]
      }
    })
    // Todo: Fix undefined input if user cancels from input dialog
    props.setValues({
      ...props.values,
      ['children']: newChildren
    })
  }
  render() {
    return (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={() => {
          navigate('/preonboarding/welcome')
        }}
        validationSchema={LoginSchema}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="column">
            <p>1. Personal Information</p>

            <label htmlFor="passportPhoto">
              Upload your passport photograph here
              <input
                accept="image/jpeg"
                type="file"
                name="passportPhoto"
                onChange={e => {
                  props.setFieldValue('passportPhoto', e.currentTarget.files[0])
                }}
              />
            </label>

            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.surname}
              name="surname"
            />
            {props.errors.surname && props.touched.surname ? (
              <Error id="feedback">{props.errors.surname}</Error>
            ) : null}

            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.middleName}
              name="middleName"
            />
            {props.errors.middleName && props.touched.middleName ? (
              <Error id="feedback">{props.errors.middleName}</Error>
            ) : null}

            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.contactNumber}
              name="contactNumber"
            />
            {props.errors.contactNumber && props.touched.contactNumber ? (
              <Error id="feedback">{props.errors.contactNumber}</Error>
            ) : null}

            <label htmlFor="dateOfBirth">Date of Birth</label>
            {/* <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.firstName}
                name="firstName"
              />
              {props.errors.firstName && props.touched.firstName ? (
                <Error id="feedback">{props.errors.firstName}</Error>
              ) : null} */}

            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.gender}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            {props.errors.gender && props.touched.gender ? (
              <Error id="feedback">{props.errors.gender}</Error>
            ) : null}

            <label htmlFor="nationality">Nationality</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.nationality}
              name="nationality"
            />
            {props.errors.nationality && props.touched.nationality ? (
              <Error id="feedback">{props.errors.nationality}</Error>
            ) : null}

            <label htmlFor="region">Region</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.region}
              name="region"
            />
            {props.errors.region && props.touched.region ? (
              <Error id="feedback">{props.errors.region}</Error>
            ) : null}

            <label htmlFor="nationalId">National ID</label>

            <label htmlFor="nationalId">
              Upload your passport photograph here
              <input
                accept="image/jpeg"
                type="file"
                name="nationalId"
                onChange={e => {
                  props.setFieldValue('nationalId', e.currentTarget.files[0])
                }}
              />
            </label>
            {props.errors.nationalId && props.touched.nationalId ? (
              <Error id="feedback">{props.errors.nationalId}</Error>
            ) : null}

            <label htmlFor="maritalStatus">Marital Status</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.maritalStatus}
              name="maritalStatus"
            />
            {props.errors.maritalStatus && props.touched.maritalStatus ? (
              <Error id="feedback">{props.errors.maritalStatus}</Error>
            ) : null}

            <label htmlFor="spouse.name">
              Name of Spouse (where applicable)
            </label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.spouse.name}
              name="spouse.name"
            />
            {props.errors.spouse && props.touched.spouse ? (
              <Error id="feedback">{props.errors.spouse.name}</Error>
            ) : null}

            <label htmlFor="spouse.contactNumber">Contact Number</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.spouse.contactNumber}
              name="spouse.contactNumber"
            />
            {props.errors.spouse && props.touched.spouse ? (
              <Error id="feedback">{props.errors.spouse.contactNumber}</Error>
            ) : null}

            <label htmlFor="marriageCertificate">
              Upload Marriage Certificate (if applicable)
            </label>

            <label htmlFor="marriageCertificate">
              Upload your passport photograph here
              <input
                accept="image/jpeg"
                type="file"
                name="marriageCertificate"
                onChange={e => {
                  // prettier-ignore
                  props.setFieldValue('marriageCertificate', e.currentTarget.files[0])
                }}
              />
            </label>
            {props.errors.marriageCertificate &&
            props.touched.marriageCertificate ? (
              <Error id="feedback">{props.errors.marriageCertificate}</Error>
            ) : null}

            {/* CHILDREN */}
            <hr />

            <FieldArray
              name="children"
              render={arrayHelpers => (
                <React.Fragment>
                  {props.values.children.map((child, id) => (
                    <React.Fragment key={id}>
                      <Field name={`children.${id}.name`} />
                      <Field name={`children.${id}.dateOfBirth`} />
                      <label htmlFor="marriageCertificate">
                        Upload Birth Certificate (if applicable)
                        <input
                          accept="image/jpeg"
                          type="file"
                          name={`children.${id}.birthCertificate`}
                          onChange={event =>
                            this.handleBirthCertificate(props, event, id)
                          }
                        />
                      </label>
                    </React.Fragment>
                  ))}

                  <button
                    type="button"
                    onClick={e => {
                      e.preventDefault()
                      console.log('i been clicked')
                      arrayHelpers.push({
                        name: '',
                        birthCertificate: '',
                        dateOfBirth: ''
                      })
                    }}
                  >
                    Add child
                  </button>

                  {/* <label htmlFor="parents.father">Date of Birth</label>

                  <label htmlFor="marriageCertificate">
                    Upload Birth Certificate (if applicable)
                    <input
                      accept="image/jpeg"
                      type="file"
                      name="marriageCertificate"
                      onChange={e => {
                        // prettier-ignore
                        props.setFieldValue('marriageCertificate', e.currentTarget.files[0])
                      }}
                    />
                  </label> */}
                </React.Fragment>
              )}
            />

            {/* {props.values.children.map((child, id) => (
              <React.Fragment key={id}>
                <label htmlFor="parents.father">Name of Child</label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={child.name}
                  name="child.name"
                />
                {props.errors.parents && props.touched.parents ? (
                  <Error id="feedback">{props.errors.parents.father}</Error>
                ) : null}

                <label htmlFor="parents.father">Date of Birth</label>
                

                <label htmlFor="marriageCertificate">
                  Upload Birth Certificate (if applicable)
                  <input
                    accept="image/jpeg"
                    type="file"
                    name="marriageCertificate"
                    onChange={e => {
                      // prettier-ignore
                      props.setFieldValue('marriageCertificate', e.currentTarget.files[0])
                    }}
                  />
                </label>
              </React.Fragment>
            ))} */}

            {/* <button
              onClick={e => {
                e.preventDefault()
                console.log('i been clicked')
                initialValues.children.concat([
                  { name: '', dateOfBirth: '', birthCertificate: '' }
                ])
              }}
            >
              Add child
            </button> */}

            <hr />

            <label htmlFor="parents.father">Name of Father</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.parents.father}
              name="parents.father"
            />
            {props.errors.parents && props.touched.parents ? (
              <Error id="feedback">{props.errors.parents.father}</Error>
            ) : null}

            <label htmlFor="parents.mother">Name of Mother</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.parents.mother}
              name="parents.mother"
            />
            {props.errors.parents && props.touched.parents ? (
              <Error id="feedback">{props.errors.parents.mother}</Error>
            ) : null}

            {/* NEXT OF KIN */}

            <p>2. Next of Kin Details</p>

            <label htmlFor="nextOfKin.name">Name</label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.nexOfKin.name}
              name=""
            />
            {props.errors.nexOfKin && props.touched.nexOfKin ? (
              <Error id="feedback">{props.errors.nextOfKin.name}</Error>
            ) : null}

            <Button color="blue" type="submit">
              LOG IN
            </Button>
          </form>
        )}
      </Formik>
    )
  }
}
