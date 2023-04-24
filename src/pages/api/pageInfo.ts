// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from '../../utils/axios.ts'
import config from '../../config'

import type { pageInfo } from './api.type.ts'
import type { axiosError } from '../../types'

export default async (_: NextApiRequest, res: NextApiResponse<pageInfo>) => {
  let returnObject = <pageInfo>{}

  try {
    const response = await axios.get<pageInfo>(`${config.URL_BACK}/back/portfolio/v1/pageInfo`)
    returnObject = response.data
  } catch (error: unknown) {
    returnObject.error = error as axiosError
  }

  res.status(200).json(returnObject)
}
