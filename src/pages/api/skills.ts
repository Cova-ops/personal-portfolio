// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from '../../utils/axios.ts'
import config from '../../config'

import type { skill } from './api.type.ts'
import type { axiosError } from '../../types'

export default async (_: NextApiRequest, res: NextApiResponse<skill>) => {
  let returnObject = <skill>{}

  try {
    const response = await axios.get<skill>(`${config.URL_BACK}/back/portfolio/v1/skills`)
    returnObject = response.data
  } catch (error: unknown) {
    returnObject.error = error as axiosError
  }

  res.status(200).json(returnObject)
}

