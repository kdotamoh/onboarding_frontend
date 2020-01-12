import React, { Component } from 'react'
import { Formik, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import PropTypes from 'prop-types'

import { Button } from 'components/styled'
// import HorizontalSelect from 'components/horizontal-select'

import downArrow from 'images/select/down-arrow.svg'

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

  /* * {
    font-family: PTSans-Regular;
    /* font-size: 85%; */
  } */

  section {
    font-size: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  label {
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

  background-image: url(${downArrow});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 1rem);
  background-position-y: 50%;
  background-size: 0.5rem;
`

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
  padding: 0.3rem;
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
`

const ValidationSchema = Yup.object().shape({
  surname: Yup.string().required('Surname is required')
  // middleName: Yup.string().required('Middle name is required'),
  // firstName: Yup.string().required('First name is required'),
  // contactNumber: Yup.number().required('Contact number is required'),
  // // dateOfBirth
  // gender: Yup.mixed()
  //   .oneOf(['M', 'F'])
  //   .required('Gender is required'),
  // nextOfKin: Yup.object().shape({
  //   name: Yup.string().required(),
  //   dateOfBirth: '',
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
  test: 'G',
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
  nextOfKin: {
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
    form: ''
  },
  fuelCard: ''
}

export default class DetailsForm extends Component {
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
    functional: true
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
    // const options = [
    //   { value: 'G', text: 'Green', selected: false },
    //   { value: 'O', text: 'Orange', selected: false }
    // ]
    return (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={() => {
          navigate('/preonboarding/conditions-of-service')
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

                <Label htmlFor="dateOfBirth">Date of Birth</Label>
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
                  onChange={e => console.log(e)}
                  onBlur={props.handleBlur}
                  value={props.values.nationality}
                  name="nationality"
                >
                  <option value=""></option>
                  <option value="M">Ghanaian</option>
                  <option value="F">Other</option>
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
                  <option value="M">Male</option>
                  <option value="F">Female</option>
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
                    {props.values.passportPhoto.name
                      ? props.values.passportPhoto.name
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>
                {props.errors.nationalId && props.touched.nationalId ? (
                  <Error id="feedback">{props.errors.nationalId}</Error>
                ) : null}

                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.maritalStatus}
                  name="maritalStatus"
                />
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

                          <Label htmlFor={`children.${id}.dateOfBirth`}>
                            Date of Birth
                          </Label>
                          <Input name={`children.${id}.dateOfBirth`} />

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
                              {props.values.passportPhoto.name
                                ? props.values.passportPhoto.name
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
                              dateOfBirth: ''
                            })
                          }}
                        >
                          +
                        </AddButton>
                        Add child
                      </Label>

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

                <Divider />

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

                <Label htmlFor="nextOfKin.dateOfBirth">Date of Birth</Label>
                <Input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nextOfKin.dateOfBirth}
                  name="nextOfKin.dateOfBirth"
                />
                {props.errors.nexOfKin && props.touched.nexOfKin ? (
                  <Error id="feedback">
                    {props.errors.nextOfKin.dateOfBirth}
                  </Error>
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
                >
                  Continue to Education
                </ShowSectionButton>
              </section>

              <Heading>3. Educational Information</Heading>

              <section hidden={this.state.education}>
                {/* // Todo: handle multiple file upload  */}
                <Label htmlFor="educationalCertificates">
                  Upload Educational Certificates
                </Label>
                <input
                  accept="image/jpeg"
                  type="file"
                  name="educationalCertificates"
                  onChange={e => {
                    // prettier-ignore
                    props.setFieldValue('educationalCertificates', e.currentTarget.files)
                  }}
                />

                <Label htmlFor="professionalBodies">
                  Upload Evidence of Professional Body Affliations
                </Label>
                <input
                  accept="image/jpeg"
                  type="file"
                  name="professionalBodies"
                  onChange={e => {
                    // prettier-ignore
                    props.setFieldValue('professionalBodies', e.currentTarget.files)
                  }}
                />
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('nationalService')}
                >
                  Continue to National Service
                </ShowSectionButton>
              </section>

              <Heading>4. National Service Information</Heading>

              <section hidden={this.state.nationalService}>
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
                    {props.values.passportPhoto.name
                      ? props.values.passportPhoto.name
                      : 'Please upload JPEG format, no larger than 3mb in size'}
                  </p>
                </FileInput>
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('residential')}
                >
                  Continue to Residential
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
                >
                  Continue to Salary
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
                >
                  Continue to Family Line
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
                  <option value="NMI">Nationwide Medical Insurance</option>
                  <option value="AHI">Acacia Health Insurance</option>
                </Select>

                <Label htmlFor="medicalInsurance.form">
                  Upload the completed forms here
                </Label>
                <input
                  accept="image/jpeg"
                  type="file"
                  name="medicalInsurance.form"
                  onChange={e => {
                    // prettier-ignore
                    props.setFieldValue('medicalInsurance.form', e.currentTarget.files[0])
                  }}
                />
                <ShowSectionButton
                  type="button"
                  onClick={() => this.handleOpenSection('fuelCard')}
                >
                  Continue to Fuel Card
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
                  <option value="TT">Total TomCard</option>
                  <option value="GG">Goil GOCard</option>
                </Select>
              </section>
            </Form>

            <Button
              mt="4rem"
              color="blue"
              type="submit"
              onClick={props.handleSubmit}
            >
              Submit and Continue >
            </Button>
          </>
        )}
      </Formik>
    )
  }
}

DetailsForm.propTypes = {
  handleSubmit: PropTypes.func
}
