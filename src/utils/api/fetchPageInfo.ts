import config from '../../config'
import axios from '../axios.ts'
import { pageInfo } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchPageInfo = async () => {
  const { data } = await axios.get<pageInfo>(`${PUBLIC_NEXT_URL_BASE}/api/pageInfo`)
  return data
}
