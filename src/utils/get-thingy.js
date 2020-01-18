import axios from 'axios'
import store from 'store'
import { setInsuranceProviders, setFuelProviders } from '../store/providers'

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
