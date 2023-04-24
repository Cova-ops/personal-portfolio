import config from '../../config'
import axios from '../axios.ts'
import { social } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchSocial = async () => {
  const { data } = await axios.get<social>(`${PUBLIC_NEXT_URL_BASE}/api/social`)
  return data
}

