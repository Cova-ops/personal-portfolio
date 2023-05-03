import { axiosError } from '../../types'

type Link = string

type errorHandle = {
  error: axiosError | null
}

export type pageInfo = errorHandle & {
  _type: "pageInfo"
  address: string
  backgroundInformation: string
  email: string
  role: string
  heroImage: Link
  name: string
  phoneNumber: Link
}

export type technology = errorHandle & {
  _type: 'technology'
  image: Link
  progress: number
  title: string
}

export type social = errorHandle & {
  _type: "social"
  title: string
  url: Link
}

export type skill = errorHandle & {
  _type: 'skill'
  image: Link
  progress: number
  title: string
}

export type project = errorHandle & {
  _type: 'project'
  title: string
  image: Link
  linkToBuild: Link
  summary: string
  technologies: technology[]
}

export type experience = errorHandle & {
  _type: 'experience'
  company: string
  companyImage: Link
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorkingHere: boolean
  jobTitle: string
  points: string[]
  technologies: technology[]
}

