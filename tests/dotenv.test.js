import {jest} from '@jest/globals'
import { getEnv } from '../index'

it('inside async function', async () => {
  let val = await getEnv('TEST')
  expect(val).toBe('this is a test')
}) 