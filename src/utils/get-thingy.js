import axios from 'axios'
import store from 'store'
import { setInsuranceProviders, setFuelProviders } from '../store/providers'
import { setDivisions, setDepartments } from '../store/organisation'
import {
  setAboutPages,
  setFunctionalPages,
  setCompliancePage,
  setOverviewPage,
  setIntroductionPage,
  setFirstDaysPage,
  setCodeOfEthicsPage,
  setConditionsOfServicePage,
  setEmployeeDetailsPage
} from '../store/pages'

export const getInsuranceProviders = async token => {
  let res = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/insurance_providers/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data } = res
  store.dispatch(setInsuranceProviders(data))
}

export const getFuelProviders = async token => {
  let res = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/fuel_cards/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data } = res
  store.dispatch(setFuelProviders(data))
}

export const getDivisions = async token => {
  let res = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/divisions/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data } = res
  store.dispatch(setDivisions(data))
}

export const getDepartments = async token => {
  let res = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/departments/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data } = res
  store.dispatch(setDepartments(data))
}

export const getAboutPages = async token => {
  let res = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/about-pages/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data } = res
  store.dispatch(setAboutPages(data))
}

export const getFunctionalPages = async token => {
  let res = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/functional-pages/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data } = res
  store.dispatch(setFunctionalPages(data))
}

export const getPreonboardingPages = async token => {
  let { data: compliance } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/preonboarding/compliance/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data: overview } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/preonboarding/overview/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data: introduction } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/preonboarding/introduction/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data: firstDays } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/preonboarding/first-days/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data: codeOfEthics } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/preonboarding/code-of-ethics/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data: conditionsOfService } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/preonboarding/conditions-of-service/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  let { data: employeeDetails } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_BASE}/preonboarding/employee-details/`,
    headers: {
      Authorization: `JWT ${token}`
    }
  })
  store.dispatch(setCompliancePage(compliance[0]))
  store.dispatch(setOverviewPage(overview[0]))
  store.dispatch(setIntroductionPage(introduction[0]))
  store.dispatch(setFirstDaysPage(firstDays[0]))
  store.dispatch(setCodeOfEthicsPage(codeOfEthics[0]))
  store.dispatch(setConditionsOfServicePage(conditionsOfService[0]))
  store.dispatch(setEmployeeDetailsPage(employeeDetails[0]))
}
