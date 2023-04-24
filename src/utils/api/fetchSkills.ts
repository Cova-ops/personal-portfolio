import config from '../../config'
import axios from '../axios.ts'
import { skill } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchSkill = async () => {
  const { data } = await axios.get<skill[]>(`${PUBLIC_NEXT_URL_BASE}/api/skills`)
  return data
}

