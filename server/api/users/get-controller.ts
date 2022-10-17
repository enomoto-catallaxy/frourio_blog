import { GetInitialUserResponse } from './get-response'

export const get = async (): Promise<GetInitialUserResponse> => {
  return {
    userId: 1,
    firstName: 'sasaki',
    lastName: 'hisato',
    email: 'hisato@majong.pro',
    isAdmin: false
  }
}
