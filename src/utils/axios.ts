import axios from 'axios'

import configENV from '../config'
import logger from './logger.ts'

const instance = axios.create({
  timeout: 1000,
})

instance.interceptors.request.use((config) => {

  config.headers.sendTime = new Date().toUTCString()

  if (configENV.ENV === 'PROD') return config

  logger.log('-------------------REQUEST-------------------------------')
  if (config.url) logger.log('url:', config.url)
  if (config.data) logger.log('data:', config.data)
  if (config.params) logger.log('params:', config.params)
  if (config.method) logger.log('method:', config.method.toUpperCase())
  if (config.headers) logger.log('headers:', config.headers)
  logger.log('---------------------------------------------------------')

  return config
}, (error) => {
  logger.error(error)
  logger.error(Object.keys(error))
  return Promise.reject(error)
}, { synchronous: true })

instance.interceptors.response.use(function(response) {

  const { headers, method } = response.config

  const initial = new Date(headers.sendTime)
  const final = new Date()
  const duration: number = (final.getTime() - initial.getTime()) / 1000

  if (configENV.ENV === 'PROD') {
    logger.log('-------------------RESPONSE------------------------------')
    if (response.request.url) logger.log('url:', response.request.url)
    if (duration) logger.log('duration:', duration, 's')
    logger.log('---------------------------------------------------------')
  } else {
    logger.log('-------------------RESPONSE------------------------------')
    if (response.request.url) logger.log('url:', response.request.url)
    if (duration) logger.log('duration:', duration, 's')
    if (method) logger.log('method:', method.toUpperCase())
    if (response.status) logger.log('status:', response.status)
    if (response.statusText) logger.log('description:', response.statusText)
    if (response.headers) logger.log('headers:', response.headers)
    if (response.data) logger.log('data', response.data)
    logger.log('---------------------------------------------------------')
  }

  return response
}, function(error) {

  const { url, method, data, headers } = error.config

  const initial = new Date(headers.sendTime)
  const final = new Date()
  const duration: number = (final.getTime() - initial.getTime()) / 1000

  logger.log('-------------------ERROR RESPONSE-------------------------')
  if (url) logger.log('url:', url)
  if (duration) logger.log('duration:', duration, 's')
  if (method) logger.log('method:', method.toUpperCase())
  if (data) logger.log('data:', data)
  if (error.message) logger.log('message', error.message)
  if (error.name) logger.log('name', error.name)
  if (error.code) logger.log('code', error.code)
  logger.log('---------------------------------------------------------')

  return Promise.reject(error);
});

export default instance
