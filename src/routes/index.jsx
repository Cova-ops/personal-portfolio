import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'

// components
import { LoadingScreen } from '../components'

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
}

export default function Router () {
  return useRoutes([
    // Main Routes
    { path: '*', element: <MainPage /> }
  ])
}

const MainPage = Loadable(lazy(() => import('../pages/Main/Main')))
