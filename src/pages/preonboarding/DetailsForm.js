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
import { navigate } from '@reach/router'

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

const phoneRegex = /^(024|054|055|059)([0-9]{7}$)/g

const ValidationSchema = Yup.object().shape({
  surname: Yup.string().required('Surname is required'),
  middleName: Yup.string(),
  firstName: Yup.string().required('First name is required'),
  contactNumber: Yup.number().required('Contact number is required'),
  // dob
  gender: Yup.mixed()
    .oneOf(['M', 'F'])
    .required('Gender is required'),
  nationality: Yup.mixed()
    .oneOf(['Ghanaian', 'Other'])
    .required('Nationality is required'),
  maritalStatus: Yup.mixed()
    .oneOf(['S', 'M'])
    .required('Marital status is required'),
  father: Yup.string().required('Name of father is required'),
  mother: Yup.string().required('Name of mother is required'),
  nok_name: Yup.string().required('Name of next of kin is required'),
  nok_address: Yup.string().required('Address of next of kin is required'),
  nok_contactNumber: Yup.string().required(
    'Contact number of next of kin is required'
  ),
  nok_dob_day: Yup.string().required('Day is required'),
  nok_dob_month: Yup.string().required('Month is required'),
  nok_dob_year: Yup.string().required('Year is required'),
  nationalService_start_month: Yup.string().required('Month is required'),
  nationalService_start_year: Yup.string().required('Year is required'),
  nationalService_end_year: Yup.string().required('Year is required'),
  nationalService_end_month: Yup.string().required('Month is required'),
  residential_address_physical: Yup.string().required(
    'Physical address is required'
  ),
  residential_address_digital: Yup.string().required(
    'Digital address is required'
  ),
  postalAddress: Yup.string(),
  socialSecurity: Yup.string().required('Social Security Number is required'),
  TIN: Yup.string().required('TIN is required'),
  bank_name: Yup.string().required('Bank name is required'),
  bank_branch: Yup.string().required('Bank branch is required'),
  bank_accountNumber: Yup.string().required('Bank account number is required'),
  bank_sortCode: Yup.string().required('Bank sort code is required'),
  family_line_beneficiary: Yup.string().required('Name is required'),
  family_line_relationship: Yup.string().required('Relationship is required'),
  family_line_number: Yup.string()
    .matches(phoneRegex, 'Must be an MTN number')
    .required('Number is required')

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
  dob_day: '',
  dob_month: '',
  dob_year: '',
  gender: '',
  nationality: '',
  region: '',
  nationalId: '',
  maritalStatus: '',
  spouse_name: '',
  spouse_contactNumber: '',
  marriageCertificate: '',
  children: [
    { name: '', dob_month: '', dob_day: '', dob_year: '', birthCertificate: '' }
  ],
  father: '',
  mother: '',

  nok_name: '',
  nok_address: '',
  nok_contactNumber: '',
  nok_dob_day: '',
  nok_dob_month: '',
  nok_dob_year: '',

  educationalCertificates: [],
  professionalBodies: [],
  nationalService_start_month: '',
  nationalService_start_year: '',
  nationalService_end_month: '',
  nationalService_end_year: '',
  nationalService_certificate: '',

  residential_address_physical: '',
  residential_address_digital: '',
  residential_phoneNumber: '',
  postalAddress: '',

  socialSecurity: '',
  TIN: '',
  bank_name: '',
  bank_branch: '',
  bank_accountNumber: '',
  bank_sortCode: '',

  family_line_beneficiary: '',
  family_line_relationship: '',
  family_line_number: '',
  medicalInsurance_provider: '',
  principal_form: '',
  dependent_form: '',
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
    isSubmitting: false,
    errorMessage: '',

    line_manager_details: {}
  }

  async componentDidMount() {
    let { line_manager } = this.props.user
    let { data: line_manager_details } = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/line_managers/${line_manager}/`,
      headers: {
        Authorization: `JWT ${this.props.token}`
      }
    })
    // console.log(hr_partner_details)
    this.setState({ line_manager_details })
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

    let months = moment.months()
    months = months.map((month, i) => ({
      label: month,
      value: i + 1 < 10 ? '0' + (i + 1) : '' + (i + 1)
    }))

    const days = []
    for (let i = 1; i < 32; i++) {
      days.push(i)
    }

    let { user } = this.props
    let { departments } = this.props
    let { divisions } = this.props

    return (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={async (values, props) => {
          props.setSubmitting(true)
          this.setState({ isSubmitting: true })

          console.log(values)

          let newChildren = values.children.map(child => ({
            // ...child,
            name: child.name,
            dob: `${child.dob_year}-${child.dob_month}-${child.dob_day}`,
            birth_certificate: null
          }))

          if (
            values.children.length === 1 &&
            values.children[0].name === '' &&
            values.children[0].birthCertificate === ''
          ) {
            newChildren = []
          }

          let data = {
            employee: this.props.user.id,
            first_name: values.firstName,
            other_names: values.middleName,
            last_name: values.surname,
            dob: `${values.dob_year}-${values.dob_month}-${values.dob_day}`,
            gender: values.gender,
            nationality: values.nationality,
            region: values.region,
            marital_status: values.maritalStatus,
            name_of_spouse: values.spouse_name,
            contact_of_spouse: values.spouse_contactNumber,
            children: newChildren,
            name_of_father: values.father,
            name_of_mother: values.mother,
            nok_name: values.nok_name,
            nok_dob: `${values.nok_dob_year}-${values.nok_dob_month}-${values.nok_dob_day}`,
            nok_address: values.nok_address,
            nok_contact: values.nok_contactNumber,
            nss_start_date: `${values.nationalService_start_year}-${values.nationalService_start_month}-01`,
            nss_end_date: `${values.nationalService_end_year}-${values.nationalService_end_month}-30`, // TODO: fix hardcoded days
            res_physical_address: values.residential_address_physical,
            res_digital_address: values.residential_address_digital,
            res_phone_number: values.residential_phoneNumber,
            postal_address: values.postalAddress,
            ssnit_number: values.socialSecurity,
            tin_number: values.TIN,
            bank_account_number: values.bank_accountNumber,
            bank_branch: values.bank_branch,
            bank_name: values.bank_name,
            sort_code: values.bank_sortCode,
            family_beneficiary: values.family_line_beneficiary,
            relationship_to_beneficiary: values.family_line_relationship,
            beneficiary_phone_number: values.family_line_number,
            medical_insurance_provider: Number(
              values.medicalInsurance_provider
            ),
            fuel_card_option: Number(values.fuelCard)
          }

          let imageFiles = new FormData()
          imageFiles.append('national_id', values.nationalId)
          imageFiles.append('marriage_cert', values.marriageCertificate)
          imageFiles.append('educational_certs', values.educationalCertificates)
          imageFiles.append(
            'professional_body_affiliates',
            values.professionalBodies
          )
          imageFiles.append('nss_cert', values.nationalService_certificate)
          imageFiles.append('principal_form', values.principal_form)
          imageFiles.append('dependant_form', values.dependant_form)

          try {
            let res = await axios({
              method: 'post',
              url: `${process.env.REACT_APP_API_BASE}/profiles/`,
              data,
              headers: {
                Authorization: `JWT ${this.props.token}`
              }
            })
            if (res.status === 201) {
              try {
                await axios({
                  method: 'post',
                  url: `${process.env.REACT_APP_API_BASE}/profiles/${res.data.id}/upload/ `,
                  data: imageFiles,
                  headers: {
                    Authorization: `JWT ${this.props.token}`,
                    'Content-Type': 'multipart/form-data'
                  }
                })

                // let children = res.data.children

                // Todo: Children birth certs

                // await axios({
                //   method: 'post',
                //   url: `${process.env.REACT_APP_API_BASE}/profiles/${res}`
                // })
              } catch (err) {
                console.error(err)
              }
            }
            navigate('/preonboarding/conditions-of-service')
            console.error(res)
          } catch (err) {
            console.error(err)
            this.setState({
              errorMessage: 'Something went wrong. Please try again.'
            })
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
                  type="number"
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
                    name="dob_month"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.dob_month}
                  >
                    <option value="">Month</option>
                    {months &&
                      months.map(month => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                  </Select>
                  <Select
                    as="select"
                    name="dob_day"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.dob_day}
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
                    name="dob_year"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.dob_year}
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
                  <option value="Ghanaian">Ghanaian</option>
                  <option value="Other">Other</option>
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
                      <option key={i} value={r.label}>
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
                  <option value="S">Single</option>
                  <option value="M">Married</option>
                </Select>
                {props.errors.maritalStatus && props.touched.maritalStatus ? (
                  <Error id="feedback">{props.errors.maritalStatus}</Error>
                ) : null}

                <Label htmlFor="spouse_name">
                  Name of Spouse (where applicable)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.spouse_name}
                  name="spouse_name"
                />
                {props.errors.spouse && props.touched.spouse ? (
                  <Error id="feedback">{props.errors.spouse_name}</Error>
                ) : null}

                <Label htmlFor="spouse_contactNumber">Contact Number</Label>
                <Input
                  type="number"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.spouse_contactNumber}
                  name="spouse_contactNumber"
                />
                {props.errors.spouse && props.touched.spouse ? (
                  <Error id="feedback">
                    {props.errors.spouse_contactNumber}
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
                          <Input
                            name={`children.${id}.name`}
                            onChange={props.handleChange}
                          />

                          <Label htmlFor={`children.${id}.dob`}>
                            Date of Birth
                          </Label>

                          <SelectRow>
                            <Select
                              as="select"
                              name={`children.${id}.dob_month`}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.children[id].dob_month}
                            >
                              <option value="">Month</option>
                              {months &&
                                months.map(month => (
                                  <option key={month.value} value={month.value}>
                                    {month.label}
                                  </option>
                                ))}
                            </Select>
                            <Select
                              as="select"
                              name={`children.${id}.dob_day`}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.children[id].dob_day}
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
                              name={`children.${id}.dob_year`}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.children[id].dob_year}
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
                              dob_day: '',
                              dob_month: '',
                              dob_year: ''
                            })
                          }}
                        >
                          +
                        </AddButton>
                        Add child
                      </Label>

                      <Divider />
                    </React.Fragment>
                  )}
                />

                <Label htmlFor="father">Name of Father</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.father}
                  name="father"
                />
                {props.errors.father && props.touched.father ? (
                  <Error id="feedback">{props.errors.father}</Error>
                ) : null}

                <Label htmlFor="mother">Name of Mother</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.mother}
                  name="mother"
                />
                {props.errors.mother && props.touched.mother ? (
                  <Error id="feedback">{props.errors.mother}</Error>
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
                <Label htmlFor="nok_name">Name</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nok_name}
                  name="nok_name"
                />
                {props.errors.nok_name && props.touched.nok_name ? (
                  <Error id="feedback">{props.errors.nok_name}</Error>
                ) : null}

                <Label htmlFor="nok_dob">Date of Birth</Label>
                <SelectRow>
                  <Select
                    as="select"
                    name="nok_dob_month"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nok_dob_month}
                  >
                    <option value="">Month</option>
                    {months &&
                      months.map(month => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                  </Select>
                  <Select
                    as="select"
                    name="nok_dob_day"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nok_dob_day}
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
                    name="nok_dob_year"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.nok_dob_year}
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

                {props.errors.nok_dob_day && props.touched.nok_dob_day ? (
                  <Error id="feedback">{props.errors.nok_dob_day}</Error>
                ) : null}
                {props.errors.nok_dob_month && props.touched.nok_dob_month ? (
                  <Error id="feedback">{props.errors.nok_dob_month}</Error>
                ) : null}
                {props.errors.nok_dob_year && props.touched.nok_dob_year ? (
                  <Error id="feedback">{props.errors.nok_dob_year}</Error>
                ) : null}

                <Label htmlFor="nok_address">Address</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nok_address}
                  name="nok_address"
                />
                {props.errors.nok_address && props.touched.nok_address ? (
                  <Error id="feedback">{props.errors.nok_address}</Error>
                ) : null}

                <Label htmlFor="nok_contactNumber">Contact Number</Label>
                <Input
                  type="number"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nok_contactNumber}
                  name="nok_contactNumber"
                />
                {getIn(props.errors, 'nok_contactNumber') &&
                getIn(props.touched, 'nok_contactNumber') ? (
                  <Error id="feedback">{props.errors.nok_contactNumber}</Error>
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
                        // TODO: allow clicking to add files/push files into array
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
                    <Label htmlFor="nationalService_startDate">
                      Start Date
                    </Label>
                    <SelectRow width="100%">
                      <Select
                        as="select"
                        name="nationalService_start_month"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService_start_month}
                      >
                        <option value="">Month</option>
                        {months &&
                          months.map(month => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                      </Select>
                      <Select
                        as="select"
                        name="nationalService_start_year"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService_start_year}
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
                    <Label htmlFor="nationalService_end_month">End Date</Label>
                    <SelectRow width="100%">
                      <Select
                        as="select"
                        name="nationalService_end_month"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService_end_month}
                      >
                        <option value="">Month</option>
                        {months &&
                          months.map(month => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                      </Select>
                      <Select
                        as="select"
                        name="nationalService_end_year"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nationalService_end_year}
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
                  <label htmlFor="nationalService_certificate">
                    Upload
                    <input
                      id="nationalService_certificate"
                      accept="image/jpeg"
                      type="file"
                      name="nationalService_certificate"
                      onChange={e => {
                        // prettier-ignore
                        props.setFieldValue('nationalService_certificate', e.currentTarget.files[0])
                      }}
                    />
                  </label>
                  <p>
                    {props.values.nationalService_certificate.name
                      ? props.values.nationalService_certificate.name
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
                <Label htmlFor="residential_address_physical">
                  Residential Address (Physical)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.residential_address_physical}
                  name="residential_address_physical"
                />
                {props.errors.residential_address_physical &&
                props.touched.residential_address_physical ? (
                  <Error id="feedback">
                    {props.errors.residential_address_physical}
                  </Error>
                ) : null}

                <Label htmlFor="residential_address_digital">
                  Residential Address (Digital)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.residential_address_digital}
                  name="residential_address_digital"
                />
                {props.errors.residential_address_digital &&
                props.touched.residential_address_digital ? (
                  <Error id="feedback">
                    {props.errors.residential_address_digital}
                  </Error>
                ) : null}

                <Label htmlFor="residential_phoneNumber">
                  Residential Phone Number (if any)
                </Label>
                <Input
                  type="number"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.residential_phoneNumber}
                  name="residential_phoneNumber"
                />
                {props.errors.residential_phoneNumber &&
                props.touched.residential_phoneNumber ? (
                  <Error id="feedback">
                    {props.errors.residential_phoneNumber}
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

                <Label htmlFor="bank_name">Bank</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank_name}
                  name="bank_name"
                />
                {props.errors.bank_name && props.touched.bank_name ? (
                  <Error id="feedback">{props.errors.bank_name}</Error>
                ) : null}

                <Label htmlFor="bank_branch">Branch</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank_branch}
                  name="bank_branch"
                />
                {props.errors.bank_branch && props.touched.bank_branch ? (
                  <Error id="feedback">{props.errors.bank_branch}</Error>
                ) : null}

                <Label htmlFor="bank_accountNumber">Account Number</Label>
                <Input
                  type="number"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank_accountNumber}
                  name="bank_accountNumber"
                />
                {props.errors.bank_accountNumber &&
                props.touched.bank_accountNumber ? (
                  <Error id="feedback">{props.errors.bank_accountNumber}</Error>
                ) : null}

                <Label htmlFor="bank_sortCode">SORT Code</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bank_sortCode}
                  name="bank_sortCode"
                />
                {props.errors.bank_sortCode && props.touched.bank_sortCode ? (
                  <Error id="feedback">{props.errors.bank_sortCode}</Error>
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
                <Label htmlFor="family_line_beneficiary">
                  Name of Family Member to receive monthly airtime (per employee
                  benefit)
                </Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.family_line_beneficiary}
                  name="family_line_beneficiary"
                />
                {props.errors.family_line_beneficiary &&
                props.touched.family_line_beneficiary ? (
                  <Error id="feedback">
                    {props.errors.family_line_beneficiary}
                  </Error>
                ) : null}

                <Label htmlFor="family_line_relationship">Relationship</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.family_line_relationship}
                  name="family_line_relationship"
                />
                {props.errors.family_line_relationship &&
                props.touched.family_line_relationship ? (
                  <Error id="feedback">
                    {props.errors.family_line_relationship}
                  </Error>
                ) : null}

                <Label htmlFor="family_line_number">
                  Mobile Number (MTN Only)
                </Label>
                <Input
                  type="tel"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.family_line_number}
                  name="family_line_number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                />
                {props.errors.family_line_number &&
                props.touched.family_line_number ? (
                  <Error id="feedback">{props.errors.family_line_number}</Error>
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
                <Label htmlFor="medicalInsurance_provider">
                  Select your preferred medical insurance provider:
                </Label>
                <Select
                  as="select"
                  name="medicalInsurance_provider"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.medicalInsurance_provider}
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

                <Label htmlFor="">Upload the principal dependent form</Label>
                <FileInput>
                  <label htmlFor="principal_form">
                    Upload
                    <input
                      multiple
                      id="principal_form"
                      accept="image/jpeg"
                      type="file"
                      name="principal_form"
                      onChange={e => {
                        props.setFieldValue(
                          'principal_form',
                          e.currentTarget.files[0]
                        )
                      }}
                    />
                  </label>

                  <p>
                    {props.values.principal_form.name
                      ? props.values.principal_form.name
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>

                <Label htmlFor="">Upload the dependent form</Label>
                <FileInput>
                  <label htmlFor="dependent_form">
                    Upload
                    <input
                      multiple
                      id="dependent_form"
                      accept="image/jpeg"
                      type="file"
                      name="dependent_form"
                      onChange={e => {
                        props.setFieldValue(
                          'dependent_form',
                          e.currentTarget.files[0]
                        )
                      }}
                    />
                  </label>

                  <p>
                    {props.values.dependent_form.name
                      ? props.values.dependent_form.name
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
                <Label htmlFor="fuelCard">
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
                <p css={mutedCss}>{user.job_title}</p>

                <Label htmlFor="nationalId">Division</Label>
                <p css={mutedCss}>
                  {divisions.length &&
                    divisions.find(division => division.id === user.division)
                      .title}
                </p>

                <Label htmlFor="nationalId">Department</Label>
                <p css={mutedCss}>
                  {departments.length &&
                    departments.find(
                      department => department.id === user.department
                    ).title}
                </p>

                <Label htmlFor="nationalId">Location</Label>
                <p css={mutedCss}>{user.location}</p>

                <Label htmlFor="nationalId">Line Manager</Label>
                <p css={mutedCss}>
                  {this.state.line_manager_details.first_name}{' '}
                  {this.state.line_manager_details.last_name}
                </p>
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

            {this.state.errorMessage && (
              <p style={{ marginTop: '3rem', color: 'red' }}>
                {this.state.errorMessage}
              </p>
            )}
          </>
        )}
      </Formik>
    )
  }
}
DetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    division: PropTypes.number,
    department: PropTypes.number,
    location: PropTypes.string,
    job_title: PropTypes.string,
    line_manager: PropTypes.number
  }),
  divisions: PropTypes.array,
  departments: PropTypes.array,
  token: PropTypes.string,
  insuranceProviders: PropTypes.array,
  fuelCardProviders: PropTypes.array
}

export default connect(state => ({
  token: state.token,
  user: state.user,
  insuranceProviders: state.providers.insuranceProviders,
  fuelCardProviders: state.providers.fuelCardProviders,
  departments: state.organisation.departments,
  divisions: state.organisation.divisions
}))(DetailsForm)
