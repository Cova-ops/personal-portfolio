export type axiosError = {
  url?: string
  duration?: number
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'
  data?: Object
  message?: string
  name?: string
  code?: string
}

