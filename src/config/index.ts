const ENV = process.env.ENV || 'PROD'

const config = {
  ENV,
  URL_BACK: process.env[`${ENV}_PUBLIC_BACK_URL_BASE`] || 'http://localhost:3000',
  PUBLIC_NEXT_URL_BASE: process.env[`${ENV}_PUBLIC_NEXT_URL_BASE`] || 'http://localhost:3001'
}

export default config
