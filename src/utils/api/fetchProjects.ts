import config from '../../config'
import axios from '../axios.ts'
import { project } from '../../pages/api/api.type.ts'

const { PUBLIC_NEXT_URL_BASE } = config

export const fetchProject = async () => {
  const { data } = await axios.get<project[]>(`${PUBLIC_NEXT_URL_BASE}/api/projects`)
  return data
}

