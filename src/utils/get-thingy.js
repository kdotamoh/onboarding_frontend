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
  setEmployeeDetailsPage,
  setEmployeeValues,
  setPrenboardingLoaded,
  setFunctionalLoaded,
  setAboutLoaded
} from '../store/pages'
import { setUncompletedTasks, setCompletedTasks } from '../store/tasks'

export const getTasks = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/tasks/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    let uncompleted = data.filter(function(task) {
      if (task.task_status.length)
        return task.task_status[0].completed === false
    })
    let completed = data.filter(function(task) {
      if (task.task_status.length) return task.task_status[0].completed === true
    })
    store.dispatch(setUncompletedTasks(uncompleted))
    store.dispatch(setCompletedTasks(completed))
  } catch (err) {
    console.error(err)
  }
}

export const getInsuranceProviders = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/insurance_providers/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    store.dispatch(setInsuranceProviders(data))
  } catch (err) {
    console.error(err)
  }
}

export const getFuelProviders = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/fuel_cards/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    store.dispatch(setFuelProviders(data))
  } catch (err) {
    console.error(err)
  }
}

export const getDivisions = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/divisions/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    store.dispatch(setDivisions(data))
  } catch (err) {
    console.error(err)
  }
}

export const getDepartments = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/departments/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    store.dispatch(setDepartments(data))
  } catch (err) {
    console.error(err)
  }
}

export const getAboutPages = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/about-pages/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    store.dispatch(setAboutPages(data))
    store.dispatch(setAboutLoaded())
  } catch (err) {
    console.error(err)
  }
}

export const getFunctionalPages = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/functional-pages/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    store.dispatch(setFunctionalPages(data))
    store.dispatch(setFunctionalLoaded())
  } catch (err) {
    console.error(err)
  }
}

export const getValueProposition = async token => {
  try {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/employee-value-proposition/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    let { data } = res
    store.dispatch(setEmployeeValues(data))
  } catch (err) {
    console.error(err)
  }
}

export const getPreonboardingPages = async token => {
  try {
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
    store.dispatch(setCompliancePage(compliance))
    store.dispatch(setOverviewPage(overview[0]))
    store.dispatch(setIntroductionPage(introduction[0]))
    store.dispatch(setFirstDaysPage(firstDays[0]))
    store.dispatch(setCodeOfEthicsPage(codeOfEthics[0]))
    store.dispatch(setConditionsOfServicePage(conditionsOfService[0]))
    store.dispatch(setEmployeeDetailsPage(employeeDetails[0]))
    store.dispatch(setPrenboardingLoaded())
  } catch (err) {
    console.error(err)
  }
}
