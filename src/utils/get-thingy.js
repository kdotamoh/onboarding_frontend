import axios from 'axios'
import store from 'store'
import { setInsuranceProviders, setFuelProviders } from '../store/providers'
import { setDivisions, setDepartments } from '../store/organisation'

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
