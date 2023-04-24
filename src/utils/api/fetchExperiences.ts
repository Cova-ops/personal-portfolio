import config from '../../config'
import axios from '../axios.ts'
import { experience } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchExperience = async () => {
  const { data } = await axios.get<experience[]>(`${PUBLIC_NEXT_URL_BASE}/api/experiences`)
  return data
}

