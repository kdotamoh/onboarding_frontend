import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { layout } from 'styled-system'
// import { navigate } from '@reach/router'
import PropTypes from 'prop-types'
import moment from 'moment'
import axios from 'axios'
import { regions } from '../../constants'

import { Button } from 'components/styled'
// import HorizontalSelect from 'components/horizontal-select'

import downArrow from 'images/select/down-arrow.svg'
import downloadTray from 'images/employee_details/download_tray.svg'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  flex-basis: 100%;
  flex: 1;
  background: #f2f2ef;
  border: 0.5px solid #e6e6e6;
  padding: 3rem;
  width: 100%;

  section {
    font-size: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const Link = styled.a`
  color: #4f4f4f;
  text-decoration: none;

  &:before {
    content: '';
    display: inline-block;
    background: url(${downloadTray}) no-repeat;
    opacity: 0.7;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`

const Input = styled.input`
  width: 100%;
  border: 0.5px solid #e6e6e6;
  border-radius: 0.02rem;
  padding: 0.4rem;
`

const Select = styled(Input)`
  appearance: none;
  outline: none;
  background-color: white;

  background-image: url(${downArrow});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 1rem);
  background-position-y: 50%;
  background-size: 0.5rem;
`

const SelectRow = styled.div`
  ${layout}

  display: flex;

  select {
    margin-right: 1rem;
  }
`
SelectRow.defaultProps = {
  width: '50%'
}

const Heading = styled.p`
  text-align: left;
  border-bottom: 0.5px solid #e6e6e6;
  font-size: 120%;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
`

const FileInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    color: white;
    background-color: #666666;
    padding: 0.3rem;
    border-radius: 2px;
    width: 8rem;
    display: inline-block;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #7d7d7d;
    }

    input[type='file'] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }
  }
  p {
    font-size: 65%;
    margin: 0 0.5rem;
  }
`

const AddButton = styled.button`
  color: white;
  background-color: #666666;
  padding-bottom: 0.1rem;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  display: inline-block;
  font-size: 1rem;
  margin-right: 0.5rem;
`

const ShowSectionButton = styled(AddButton)`
  background-color: #000000;
  font-size: unset;
  width: unset;
  height: unset;
  padding: 0.3rem 1.5rem;
  margin-top: 2rem;
  /* visibility: ${props => (props.visible ? 'visible' : 'hidden')}; */
`

const Label = styled.label`
  text-align: left;
  margin-top: 1rem;
  margin-top: 1.5rem;
  display: block;

  margin-bottom: 0.2rem;
`

const Error = styled.div`
  text-align: left;
  color: red;
  font-size: 70%;
`

const Divider = styled.hr`
  border-top: 0.5px solid #e6e6e6;
  margin-top: 2rem;
  width: 100%;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FlexRow = styled.div`
  ${layout}

  display: flex;
  flex-direction: row;
`

const ValidationSchema = Yup.object().shape({
  // surname: Yup.string().required('Surname is required')
  // middleName: Yup.string().required('Middle name is required'),
  // firstName: Yup.string().required('First name is required'),
  // contactNumber: Yup.number().required('Contact number is required'),
  // // dob
  // gender: Yup.mixed()
  //   .oneOf(['M', 'F'])
  //   .required('Gender is required'),
  // nextOfKin: Yup.object().shape({
  //   name: Yup.string().required(),
  //   dob: '',
  //   address: '',
  //   contactNumber: Yup.number().required()
  // })
  // For when I wanna validate children: https://codesandbox.io/s/myqmyq3plx
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
  dob: {
    day: '',
    month: '',
    year: ''
  },
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
  children: [
    { name: '', dob: { month: '', day: '', year: '' }, birthCertificate: '' }
  ],
  parents: { father: '', mother: '' },
  // next of kin
  nextOfKin: {
    name: '',
    dob: {
      day: '',
      month: '',
      year: ''
    },
    address: '',
    contactNumber: ''
  },
  // education
  educationalCertificates: [],
  professionalBodies: [],
  nationalService: {
    startDate: {
      month: '',
      year: ''
    },
    endDate: {
      month: '',
      year: ''
    },
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
    name: '',
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
    form: []
  },
  fuelCard: ''
}

class DetailsForm extends Component {
  state = {
    currentSection: 'this one',
    // Toggle whether a section is hidden
    personal: false,
    nextOfKin: true,
    education: true,
    nationalService: true,
    residential: true,
    salary: true,
    familyLine: true,
    medicalInsurance: true,
    fuelCard: true,
    functional: true,

    // Is submitting
    isSubmitting: false
  }

  handleBirthCertificate = (props, event, id) => {
    const newChildren = props.values.children.map((child, childId) => {
      if (id !== childId) return child
      return {
        ...child,
        birthCertificate: event.currentTarget.files[0]
      }
    })
    // Todo: Fix `birthCertificate: undefined` if user cancels from input dialog
    props.setValues({
      ...props.values,
      children: newChildren
    })
  }

  handleOpenSection = sectionName => {
    this.setState({ [sectionName]: !this.state[sectionName] })
  }

  render() {
    let mutedCss = `
      color: #757575;
    `

    const currYear = new Date().getFullYear()
    const years = []
    for (let i = currYear; i > 1950; i--) {
      years.push(i)
    }

    const nssYears = []
    for (let i = currYear; i > 1972; i--) {
      nssYears.push(i)
    }

    const months = moment.months()

    const days = []
    for (let i = 1; i < 32; i++) {
      days.push(i)
    }

    return (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={async (values, props) => {
          props.setSubmitting(true)
          this.setState({ isSubmitting: true })

          console.log(values)

          let newChildren = values.children.map(child => ({
            ...child,
            dob: `${child.dob.year}-${child.dob.month}-${child.dob.day}`
          }))

          if (
            values.children.length === 1 &&
            values.children[0].name === '' &&
            values.children[0].birthCertificate === ''
          ) {
            newChildren = []
          }

          let data = {
            dob: `${values.dob.year}-${values.dob.month}-${values.dob.day}`,
            gender: values.gender,
            nationality: values.nationality,
            region: values.region,
            national_id: values.nationalId,
            marital_status: values.maritalStatus,
            name_of_spouse: values.spouse.name,
            contact_of_spouse: values.spouse.contactNumber,
            marriage_cert: values.marriageCertificate,
            children: newChildren,
            name_of_father: values.parents.father,
            name_of_mother: values.parents.mother,
            nok_name: values.nextOfKin.name,
            nok_dob: `${values.nextOfKin.dob.year}-${values.nextOfKin.dob.month}-${values.nextOfKin.dob.day}`,
            nok_address: values.nextOfKin.address,
            nok_contact: values.nextOfKin.contactNumber,
            educational_cert: values.educationalCertificates,
            professional_body_affiliates: values.professionalBodies,
            nss_start_date: `${values.nationalService.startDate.year}-${values.nationalService.startDate.month}-01`,
            nss_end_date: `${values.nationalService.endDate.year}-${values.nationalService.endDate.month}-30`, // TODO: fix hardcoded days
            nss_cert: values.nationalService.certificate,
            res_physical_address: values.residentialAddress.physical,
            res_digital_address: values.residentialAddress.digital,
            res_phone_number: values.residentialAddress.phoneNumber,
            postal_address: values.postalAddress,
            ssnit_number: values.socialSecurity,
            tin_number: values.TIN,
            bank_account_number: values.bank.accountNumber,
            bank_branch: values.bank.branch,
            bank_name: values.bank.name,
            sort_code: values.bank.sortCode,
            family_beneficiary: values.familyLine.name,
            relationship_to_beneficiary: values.familyLine.relationship,
            beneficiary_phone_number: values.familyLine.mobileNumber,
            medical_insurance_provider: values.medicalInsurance.provider,
            // TODO: forms
            fuel_card_option: values.fuelCard
          }
          console.log(data)

          try {
            let res = await axios({
              method: 'post',
              url: `${process.env.REACT_APP_API_BASE}/profiles/`,
              data,
              headers: {
                Authorization: `JWT ${this.props.token}`
              }
            })
            console.log(res)
          } catch (err) {
            console.log(err)
          }

          props.setSubmitting(false)
          this.setState({ isSubmitting: false })
        }}
        validationSchema={ValidationSchema}
      >
        {props => (
          <>
            <Form onSubmit={props.handleSubmit}>
              <Heading>1. Personal Information</Heading>

              {/* <HorizontalSelect
                options={options}
                name="test"
                value={props.values.test}
                onChange={e => {
                  props.setFieldValue('test', e.target.value)
                }}
              /> */}

              <section>
                <Label>Upload your passport photograph here</Label>
                <FileInput>
                  <label htmlFor="passportPhoto">
                    Upload
                    <input
                      id="passportPhoto"
                      accept="image/jpeg"
                      type="file"
                      name="passportPhoto"
                      onChange={e => {
                        props.setFieldValue(
                          'passportPhoto',
                          e.currentTarget.files[0]
                        )
                      }}
                    />
                  </label>
                  <p>
                    {props.values.passportPhoto.name
                      ? props.values.passportPhoto.name
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>

                <Label htmlFor="surname">Surname</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.surname}
                  name="surname"
                />
                {props.errors.surname && props.touched.surname ? (
                  <Error id="feedback">{props.errors.surname}</Error>
                ) : null}

                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.middleName}
                  name="middleName"
                />
                {props.errors.middleName && props.touched.middleName ? (
                  <Error id="feedback">{props.errors.middleName}</Error>
                ) : null}

                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.firstName}
                  name="firstName"
                />
                {props.errors.firstName && props.touched.firstName ? (
                  <Error id="feedback">{props.errors.firstName}</Error>
                ) : null}

                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.contactNumber}
                  name="contactNumber"
                />
                {props.errors.contactNumber && props.touched.contactNumber ? (
                  <Error id="feedback">{props.errors.contactNumber}</Error>
                ) : null}

                <Label htmlFor="dob">Date of Birth</Label>

                <SelectRow>
                  <Select
                    as="select"
                    name="dob.month"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.dob.month}
                  >
                    <option value="">Month</option>
                    {months &&
                      months.map((m, i) => (
                        <option key={months[i]} value={months[i]}>
                          {months[i]}
                        </option>
                      ))}
                  </Select>
                  <Select
                    as="select"
                    name="dob.day"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.dob.day}
                  >
                    <option value="">Day</option>
                    {days &&
                      days.map((d, i) => (
                        <option key={days[i]} value={days[i]}>
                          {days[i]}
                        </option>
                      ))}
                  </Select>
                  <Select
                    as="select"
                    name="dob.year"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.dob.year}
                  >
                    <option value="">Year</option>
                    {years &&
                      years.map((year, i) => (
                        <option key={years[i]} value={years[i]}>
                          {years[i]}
                        </option>
                      ))}
                  </Select>
                </SelectRow>

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

                <Label htmlFor="gender">Gender</Label>
                <Select
                  as="select"
                  name="gender"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.gender}
                >
                  <option value=""></option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </Select>
                {props.errors.gender && props.touched.gender ? (
                  <Error id="feedback">{props.errors.gender}</Error>
                ) : null}

                <Label htmlFor="nationality">Nationality</Label>
                <Select
                  as="select"
                  // onChange={props.handleChange}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nationality}
                  name="nationality"
                >
                  <option value=""></option>
                  <option value="G">Ghanaian</option>
                  <option value="O">Other</option>
                </Select>
                {props.errors.nationality && props.touched.nationality ? (
                  <Error id="feedback">{props.errors.nationality}</Error>
                ) : null}

                <Label htmlFor="region">Region</Label>
                <Select
                  as="select"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.region}
                  name="region"
                >
                  <option value=""></option>
                  {regions &&
                    regions.map((r, i) => (
                      <option key={i} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                </Select>
                {props.errors.region && props.touched.region ? (
                  <Error id="feedback">{props.errors.region}</Error>
                ) : null}

                <Label htmlFor="nationalId">
                  National ID details (Voters ID/Passport/Driver’s
                  License/Ghana)
                </Label>
                <FileInput>
                  <label htmlFor="nationalId">
                    Upload
                    <input
                      id="nationalId"
                      accept="image/jpeg"
                      type="file"
                      name="nationalId"
                      onChange={e => {
                        props.setFieldValue(
                          'nationalId',
                          e.currentTarget.files[0]
                        )
                      }}
                    />
                  </label>
                  <p>
                    {props.values.nationalId.name
                      ? props.values.nationalId.name
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>
                {props.errors.nationalId && props.touched.nationalId ? (
                  <Error id="feedback">{props.errors.nationalId}</Error>
                ) : null}

                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select
                  as="select"
                  name="maritalStatus"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.maritalStatus}
                >
                  <option value=""></option>
                  <option value="SINGLE">Single</option>
                  <option value="MARRIED">Married</option>
                </Select>
                {props.errors.maritalStatus && props.touched.maritalStatus ? (
                  <Error id="feedback">{props.errors.maritalStatus}</Error>
                ) : null}

                <Label htmlFor="spouse.name">
                  Name of Spouse (where applicable)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.spouse.name}
                  name="spouse.name"
                />
                {props.errors.spouse && props.touched.spouse ? (
                  <Error id="feedback">{props.errors.spouse.name}</Error>
                ) : null}

                <Label htmlFor="spouse.contactNumber">Contact Number</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.spouse.contactNumber}
                  name="spouse.contactNumber"
                />
                {props.errors.spouse && props.touched.spouse ? (
                  <Error id="feedback">
                    {props.errors.spouse.contactNumber}
                  </Error>
                ) : null}

                <Label htmlFor="marriageCertificate">
                  Upload Marriage Certificate (if applicable)
                </Label>

                <FileInput>
                  <label htmlFor="marriageCertificate">
                    Upload
                    <input
                      id="marriageCertificate"
                      accept="image/jpeg"
                      type="file"
                      name="marriageCertificate"
                      onChange={e => {
                        // prettier-ignore
                        props.setFieldValue('marriageCertificate', e.currentTarget.files[0])
                      }}
                    />
                  </label>
                  <p>
                    {props.values.marriageCertificate.name
                      ? props.values.marriageCertificate.name
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>
                {props.errors.marriageCertificate &&
                props.touched.marriageCertificate ? (
                  <Error id="feedback">
                    {props.errors.marriageCertificate}
                  </Error>
                ) : null}

                {/* CHILDREN */}
                <Divider />

                <FieldArray
                  name="children"
                  render={arrayHelpers => (
                    <React.Fragment>
                      {props.values.children.map((child, id) => (
                        <React.Fragment key={id}>
                          <Label htmlFor={`children.${id}.name`}>
                            Name of Child
                          </Label>
                          <Input name={`children.${id}.name`} />

                          <Label htmlFor={`children.${id}.dob`}>
                            Date of Birth
                          </Label>

                          <SelectRow>
                            <Select
                              as="select"
                              name={`children.${id}.dob.month`}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.children[id].dob.month}
                            >
                              <option value="">Month</option>
                              {months &&
                                months.map((m, i) => (
                                  <option key={months[i]} value={months[i]}>
                                    {months[i]}
                                  </option>
                                ))}
                            </Select>
                            <Select
                              as="select"
                              name={`children.${id}.dob.day`}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.children[id].dob.day}
                            >
                              <option value="">Day</option>
                              {days &&
                                days.map((d, i) => (
                                  <option key={days[i]} value={days[i]}>
                                    {days[i]}
                                  </option>
                                ))}
                            </Select>
                            <Select
                              as="select"
                              name={`children.${id}.dob.year`}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.children[id].dob.year}
                            >
                              <option value="">Year</option>
                              {years &&
                                years.map((year, i) => (
                                  <option key={years[i]} value={years[i]}>
                                    {years[i]}
                                  </option>
                                ))}
                            </Select>
                          </SelectRow>

                          <Label>
                            Upload Birth Certificate (if applicable)
                          </Label>
                          <FileInput>
                            <label htmlFor={`children.${id}.birthCertificate`}>
                              Upload
                              <input
                                id={`children.${id}.birthCertificate`}
                                accept="image/jpeg"
                                type="file"
                                name={`children.${id}.birthCertificate`}
                                onChange={event =>
                                  this.handleBirthCertificate(props, event, id)
                                }
                              />
                            </label>
                            <p>
                              {props.values.children[id].birthCertificate.name
                                ? props.values.children[id].birthCertificate
                                    .name
                                : 'Please upload JPEG format, no larger than 3mb in size'}
                            </p>
                          </FileInput>
                        </React.Fragment>
                      ))}

                      <Label htmlFor="">
                        <AddButton
                          type="button"
                          onClick={e => {
                            e.preventDefault()
                            console.log('i been clicked')
                            arrayHelpers.push({
                              name: '',
                              birthCertificate: '',
                              dob: ''
                            })
                          }}
                        >
                          +
                        </AddButton>
                        Add child
                      </Label>

                      <Divider />

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
                  { name: '', dob: '', birthCertificate: '' }
                ])
              }}
            >
              Add child
            </button> */}

                {/* <Divider /> */}

                <Label htmlFor="parents.father">Name of Father</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.parents.father}
                  name="parents.father"
                />
                {props.errors.parents && props.touched.parents ? (
                  <Error id="feedback">{props.errors.parents.father}</Error>
                ) : null}

                <Label htmlFor="parents.mother">Name of Mother</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.parents.mother}
                  name="parents.mother"
                />
                {props.errors.parents && props.touched.parents ? (
                  <Error id="feedback">{props.errors.parents.mother}</Error>
                ) : null}

                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('nextOfKin')}
                  hidden={!this.state.nextOfKin}
                >
                  Continue to Next of Kin
                </ShowSectionButton>
              </section>

              {/* NEXT OF KIN */}

              <Heading>2. Next of Kin Details</Heading>

              <section hidden={this.state.nextOfKin}>
                <Label htmlFor="nextOfKin.name">Name</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nextOfKin.name}
                  name="nextOfKin.name"
                />
                {props.errors.nexOfKin && props.touched.nexOfKin ? (
                  <Error id="feedback">{props.errors.nextOfKin.name}</Error>
                ) : null}

                <Label htmlFor="nextOfKin.dob">Date of Birth</Label>
                <SelectRow>
                  <Select
                    as="select"
                    name="nextOfKin.dob.month"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nextOfKin.dob.month}
                  >
                    <option value="">Month</option>
                    {months &&
                      months.map((m, i) => (
                        <option key={months[i]} value={months[i]}>
                          {months[i]}
                        </option>
                      ))}
                  </Select>
                  <Select
                    as="select"
                    name="nextOfKin.dob.day"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nextOfKin.dob.day}
                  >
                    <option value="">Day</option>
                    {days &&
                      days.map((d, i) => (
                        <option key={days[i]} value={days[i]}>
                          {days[i]}
                        </option>
                      ))}
                  </Select>
                  <Select
                    as="select"
                    name="nextOfKin.dob.year"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nextOfKin.dob.year}
                  >
                    <option value="">Year</option>
                    {years &&
                      years.map((year, i) => (
                        <option key={years[i]} value={years[i]}>
                          {years[i]}
                        </option>
                      ))}
                  </Select>
                </SelectRow>

                {props.errors.nexOfKin && props.touched.nexOfKin ? (
                  <Error id="feedback">{props.errors.nextOfKin.dob}</Error>
                ) : null}

                <Label htmlFor="nextOfKin.address">Address</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nextOfKin.address}
                  name="nextOfKin.address"
                />
                {props.errors.nexOfKin && props.touched.nexOfKin ? (
                  <Error id="feedback">{props.errors.nextOfKin.address}</Error>
                ) : null}

                <Label htmlFor="nextOfKin.contactNumber">Contact Number</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nextOfKin.contactNumber}
                  name="nextOfKin.contactNumber"
                />
                {getIn(props.errors, 'nexOfKin.contactNumber') &&
                getIn(props.touched, 'nexOfKin.contactNumber') ? (
                  <Error id="feedback">
                    {props.errors.nextOfKin.contactNumber}
                  </Error>
                ) : null}
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('education')}
                  hidden={!this.state.education}
                >
                  Continue to Educational Information
                </ShowSectionButton>
              </section>

              <Heading>3. Educational Information</Heading>

              <section hidden={this.state.education}>
                {/* // Todo: handle multiple file upload  */}
                <Label htmlFor="educationalCertificates">
                  Upload Educational Certificates
                </Label>
                {/* <input
                  accept="image/jpeg"
                  type="file"
                  name="educationalCertificates"
                  onChange={e => {
                    // prettier-ignore
                    props.setFieldValue('educationalCertificates', e.currentTarget.files)
                  }}
                /> */}
                <FileInput>
                  <label htmlFor="educationalCertificates">
                    Upload
                    <input
                      multiple
                      id="educationalCertificates"
                      accept="image/jpeg"
                      type="file"
                      name="educationalCertificates"
                      onChange={e => {
                        if (e.target.files.length) {
                          const arrFiles = Array.from(e.target.files)
                          const files = arrFiles.map((file, index) => {
                            const src = window.URL.createObjectURL(file)
                            return { file, id: index, src }
                          })
                          props.setFieldValue('educationalCertificates', files)
                        }
                      }}
                    />
                  </label>

                  <p>
                    {props.values.educationalCertificates.length
                      ? props.values.educationalCertificates.length +
                        ' file(s) uploaded'
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>

                <Label htmlFor="professionalBodies">
                  Upload Evidence of Professional Body Affliations
                </Label>
                {/* <input
                  accept="image/jpeg"
                  type="file"
                  name="professionalBodies"
                  onChange={e => {
                    // prettier-ignore
                    props.setFieldValue('professionalBodies', e.currentTarget.files)
                  }}
                /> */}
                <FileInput>
                  <label htmlFor="professionalBodies">
                    Upload
                    <input
                      multiple
                      id="professionalBodies"
                      accept="image/jpeg"
                      type="file"
                      name="professionalBodies"
                      onChange={e => {
                        if (e.target.files.length) {
                          const arrFiles = Array.from(e.target.files)
                          const files = arrFiles.map((file, index) => {
                            const src = window.URL.createObjectURL(file)
                            return { file, id: index, src }
                          })
                          props.setFieldValue('professionalBodies', files)
                        }
                      }}
                    />
                  </label>

                  <p>
                    {props.values.professionalBodies.length
                      ? props.values.professionalBodies.length +
                        ' file(s) uploaded'
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('nationalService')}
                  hidden={!this.state.nationalService}
                >
                  Continue to National Service Information
                </ShowSectionButton>
              </section>

              <Heading>4. National Service Information</Heading>

              <section hidden={this.state.nationalService}>
                <FlexRow width="70%">
                  <FlexColumn>
                    <Label htmlFor="nationalService.startDate">
                      Start Date
                    </Label>
                    <SelectRow width="100%">
                      <Select
                        as="select"
                        name="nationalService.startDate.month"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService.startDate.month}
                      >
                        <option value="">Month</option>
                        {months &&
                          months.map((m, i) => (
                            <option key={months[i]} value={months[i]}>
                              {months[i]}
                            </option>
                          ))}
                      </Select>
                      <Select
                        as="select"
                        name="nationalService.startDate.year"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService.startDate.year}
                      >
                        <option value="">Year</option>
                        {nssYears &&
                          nssYears.map((d, i) => (
                            <option key={nssYears[i]} value={nssYears[i]}>
                              {nssYears[i]}
                            </option>
                          ))}
                      </Select>
                    </SelectRow>
                  </FlexColumn>

                  <FlexColumn>
                    <Label htmlFor="nationalService.endDate">End Date</Label>
                    <SelectRow width="100%">
                      <Select
                        as="select"
                        name="nationalService.endDate.month"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService.endDate.month}
                      >
                        <option value="">Month</option>
                        {months &&
                          months.map((m, i) => (
                            <option key={months[i]} value={months[i]}>
                              {months[i]}
                            </option>
                          ))}
                      </Select>
                      <Select
                        as="select"
                        name="nationalService.endDate.year"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService.endDate.year}
                      >
                        <option value="">Year</option>
                        {years &&
                          nssYears.map((year, i) => (
                            <option key={nssYears[i]} value={nssYears[i]}>
                              {years[i]}
                            </option>
                          ))}
                      </Select>
                    </SelectRow>
                  </FlexColumn>
                </FlexRow>

                <Label>Upload National Service Certificate</Label>
                <FileInput>
                  <label htmlFor="nationalService.certificate">
                    Upload
                    <input
                      id="nationalService.certificate"
                      accept="image/jpeg"
                      type="file"
                      name="nationalService.certificate"
                      onChange={e => {
                        // prettier-ignore
                        props.setFieldValue('nationalService.certificate', e.currentTarget.files[0])
                      }}
                    />
                  </label>
                  <p>
                    {props.values.nationalService.certificate.name
                      ? props.values.nationalService.certificate.name
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('residential')}
                  hidden={!this.state.residential}
                >
                  Continue to Residential/Postal Information
                </ShowSectionButton>
              </section>

              <Heading>5. Residential/Postal Information</Heading>

              <section hidden={this.state.residential}>
                <Label htmlFor="residentialAddress.physical">
                  Residential Address (Physical)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.residentialAddress.physical}
                  name="residentialAddress.physical"
                />
                {props.errors.residentialAddress &&
                props.touched.residentAddress ? (
                  <Error id="feedback">
                    {props.errors.residentialAddress.physical}
                  </Error>
                ) : null}

                <Label htmlFor="residentialAddress.digital">
                  Residential Address (Digital)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.residentialAddress.digital}
                  name="residentialAddress.digital"
                />
                {props.errors.residentialAddress &&
                props.touched.residentAddress ? (
                  <Error id="feedback">
                    {props.errors.residentialAddress.digital}
                  </Error>
                ) : null}

                <Label htmlFor="residentialAddress.phoneNumber">
                  Residential Phone Number (if any)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.residentialAddress.phoneNumber}
                  name="residentialAddress.phoneNumber"
                />
                {props.errors.residentialAddress &&
                props.touched.residentAddress ? (
                  <Error id="feedback">
                    {props.errors.residentialAddress.phoneNumber}
                  </Error>
                ) : null}

                <Label htmlFor="postalAddress">Postal Address (if any)</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.postalAddress}
                  name="postalAddress"
                />
                {props.errors.postalAddress && props.touched.postalAddress ? (
                  <Error id="feedback">{props.errors.postalAddress}</Error>
                ) : null}
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('salary')}
                  hidden={!this.state.salary}
                >
                  Continue to Salary Transfer Information
                </ShowSectionButton>
              </section>

              <Heading>6. Salary Transfer Information</Heading>
              <section hidden={this.state.salary}>
                <Label htmlFor="socialSecurity">Social Security Number</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.socialSecurity}
                  name="socialSecurity"
                />
                {props.errors.socialSecurity && props.touched.socialSecurity ? (
                  <Error id="feedback">{props.errors.socialSecurity}</Error>
                ) : null}

                <Label htmlFor="socialSecurity">TIN Number</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.TIN}
                  name="TIN"
                />
                {props.errors.TIN && props.touched.TIN ? (
                  <Error id="feedback">{props.errors.TIN}</Error>
                ) : null}

                <Label htmlFor="bank.name">Bank</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank.name}
                  name="bank.name"
                />
                {props.errors.bank && props.touched.bank ? (
                  <Error id="feedback">{props.errors.bank.name}</Error>
                ) : null}

                <Label htmlFor="bank.branch">Branch</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank.branch}
                  name="bank.branch"
                />
                {props.errors.bank && props.touched.bank ? (
                  <Error id="feedback">{props.errors.bank.branch}</Error>
                ) : null}

                <Label htmlFor="bank.accountNumber">Account Number</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank.accountNumber}
                  name="bank.accountNumber"
                />
                {props.errors.bank && props.touched.bank ? (
                  <Error id="feedback">{props.errors.bank.accountNumber}</Error>
                ) : null}

                <Label htmlFor="bank.sortCode">SORT Code</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank.sortCode}
                  name="bank.sortCode"
                />
                {props.errors.bank && props.touched.bank ? (
                  <Error id="feedback">{props.errors.bank.sortCode}</Error>
                ) : null}
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('familyLine')}
                  hidden={!this.state.familyLine}
                >
                  Continue to Family Line Information
                </ShowSectionButton>
              </section>

              <Heading>7. Employee Family Line Information</Heading>

              <section hidden={this.state.familyLine}>
                <Label htmlFor="familyLine.name">
                  Name of Family Member to receive monthly airtime (per employee
                  benefit)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.familyLine.name}
                  name="familyLine.name"
                />
                {props.errors.familyLine && props.touched.familyLine.name ? (
                  <Error id="feedback">{props.errors.familyLine.name}</Error>
                ) : null}

                <Label htmlFor="familyLine.relationship">Relationship</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.familyLine.relationship}
                  name="familyLine.relationship"
                />
                {props.errors.familyLine &&
                props.touched.familyLine.relationship ? (
                  <Error id="feedback">
                    {props.errors.familyLine.relationship}
                  </Error>
                ) : null}

                <Label htmlFor="familyLine.mobileNumber">
                  Mobile Number (MTN Only)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.familyLine.mobileNumber}
                  name="familyLine.mobileNumber"
                />
                {props.errors.familyLine &&
                props.touched.familyLine.mobileNumber ? (
                  <Error id="feedback">
                    {props.errors.familyLine.mobileNumber}
                  </Error>
                ) : null}
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('medicalInsurance')}
                  hidden={!this.state.medicalInsurance}
                >
                  Continue to Medical Insurance
                </ShowSectionButton>
              </section>

              <Heading>8. Medical Insurance</Heading>
              <section hidden={this.state.medicalInsurance}>
                <Label htmlFor="medicalInsurance.provider">
                  Select your preferred medical insurance provider:
                </Label>
                <Select
                  as="select"
                  name="medicalInsurance.provider"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.medicalInsurance.provider}
                >
                  <option value=""></option>
                  {this.props.insuranceProviders &&
                    this.props.insuranceProviders.map(insuranceProvider => (
                      <option
                        key={insuranceProvider.id}
                        value={insuranceProvider.id}
                      >
                        {insuranceProvider.name}
                      </option>
                    ))}
                </Select>
                <p>
                  Download the Principal &amp; Dependent Application Forms
                  (where applicable):
                </p>

                <Link href="/#" download>
                  Nationwide Medical Insurance Principal Application Form
                </Link>
                <Link href="/#" download>
                  Nationwide Medical Insurance Dependent Application Form Acacia
                </Link>
                <Link href="/#" download>
                  Medical Insurance Principal Application Form Acacia Medical
                </Link>
                <Link href="/#" download>
                  Insurance Dependent Application Form
                </Link>

                <Label htmlFor="medicalInsurance.form">
                  Upload the completed forms here
                </Label>
                {/* <input
                  accept="image/jpeg"
                  type="file"
                  name="medicalInsurance.form"
                  onChange={e => {
                    // prettier-ignore
                    props.setFieldValue('medicalInsurance.form', e.currentTarget.files[0])
                  }}
                /> */}

                <FileInput>
                  <label htmlFor="medicalInsurance.form">
                    Upload
                    <input
                      multiple
                      id="medicalInsurance.form"
                      accept="image/jpeg"
                      type="file"
                      name="medicalInsurance.form"
                      onChange={e => {
                        if (e.target.files.length) {
                          const arrFiles = Array.from(e.target.files)
                          const files = arrFiles.map((file, index) => {
                            const src = window.URL.createObjectURL(file)
                            return { file, id: index, src }
                          })
                          props.setFieldValue('medicalInsurance.form', files)
                        }
                      }}
                    />
                  </label>

                  <p>
                    {props.values.medicalInsurance.form.length
                      ? props.values.medicalInsurance.form.length +
                        ' file(s) uploaded'
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>

                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('fuelCard')}
                  hidden={!this.state.fuelCard}
                >
                  Continue to Fuel Card Option
                </ShowSectionButton>
              </section>

              <Heading>9. Fuel Card Option</Heading>
              <section hidden={this.state.fuelCard}>
                <Label htmlFor="medicalInsurance.provider">
                  Select your preferred fuel provider:
                </Label>

                <Select
                  as="select"
                  name="fuelCard"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.fuelCard}
                >
                  <option value=""></option>
                  {this.props.fuelCardProviders &&
                    this.props.fuelCardProviders.map(fuelProvider => (
                      <option key={fuelProvider.id} value={fuelProvider.id}>
                        {fuelProvider.name}
                      </option>
                    ))}
                </Select>

                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('functional')}
                  hidden={!this.state.functional}
                >
                  Continue to Functional Information
                </ShowSectionButton>
              </section>

              <Heading>10. Functional Information</Heading>
              <section hidden={this.state.functional}>
                <Label htmlFor="nationalId">Job Title</Label>
                <p css={mutedCss}>XXXXXXXX</p>

                <Label htmlFor="nationalId">Division</Label>
                <p css={mutedCss}>XXXXXXXX</p>

                <Label htmlFor="nationalId">Department</Label>
                <p css={mutedCss}>XXXXXXXX</p>

                <Label htmlFor="nationalId">Location</Label>
                <p css={mutedCss}>XXXXXXXX</p>

                <Label htmlFor="nationalId">Line Manager</Label>
                <p css={mutedCss}>XXXXXXXX</p>
              </section>
            </Form>

            <Button
              mt="4rem"
              color="blue"
              type="submit"
              onClick={props.handleSubmit}
            >
              {props.isSubmitting ? 'Submitting...' : 'Submit and Continue >'}
            </Button>
          </>
        )}
      </Formik>
    )
  }
}
DetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  token: PropTypes.string,
  insuranceProviders: PropTypes.array,
  fuelCardProviders: PropTypes.array
}

export default connect(state => ({
  token: state.token,
  user: state.user,
  insuranceProviders: state.providers.insuranceProviders,
  fuelCardProviders: state.providers.fuelCardProviders
}))(DetailsForm)
