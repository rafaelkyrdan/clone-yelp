import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'
import Detail from './Detail/Detail'
import Map from './Map/Map'

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      {/* Lazy-loading */}
      <Route path="map" component={Map} />
      <Route path="detail/:placeId"
            component={Detail} />
            <IndexRoute component={Map} />
    </Route>
  )  
}
export default makeMainRoutes
