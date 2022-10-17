import { defineController } from './$relay'
import { get } from './get-controller'

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await get()
  })
}))
