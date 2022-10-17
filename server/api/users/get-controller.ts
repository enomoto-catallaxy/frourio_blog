import { GetInitialUserResponse } from './get-response'

export const get = async (): Promise<GetInitialUserResponse> => {
  return {
    userId: 1,
    firstName: 'sasaki',
    lastName: 'hisato',
    email: 'hisato@majong.pro',
    isAdmin: false,
    introduction: '日本麻雀プロ連盟所属/別名魔王'
  }
}
