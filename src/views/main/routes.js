import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'
import IndexPage from './indexPage/IndexPage'
import Map from './Map/Map'

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      {/* Lazy-loading */}
      <Route path="map" component={Map} />
    </Route>
  )

  // {/* inline loading */}
  // <IndexRoute component={IndexPage} />
}
export default makeMainRoutes
