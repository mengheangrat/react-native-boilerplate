import apisauce from 'apisauce'
import { ApiResponse } from './Types/Api.type'
import { User } from '../Redux/Types/AuthType'

const api = () => {
  const myApi = apisauce.create({
    baseURL: 'http://www.mocky.io/v2/',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: 30000,
  })

  const getCustomer = () => myApi.get<ApiResponse<User>>('5eae5b7f2f00004b00198939')

  return {
    getCustomer,
  }
}
// let's return back our create method as the default.
export { api }
