import React, { PropTypes as T } from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.module.css'

export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }

  renderChildren() {
    const childProps = {
      ...this.props
    };
    const {children} = this.props;
    return React.Children.map(children,
              c => React.cloneElement(c, childProps));
  }

  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        // There was an error
      })
  }

  render() {

    let children = null;
    if (this.props.children) {
      // We have children in the Container component
      children = React.cloneElement(
        this.props.children,
        {
          google: this.props.google,
          places: this.state.places,
          loaded: this.props.loaded
        });
    }
    return (
      <div>

          <Header />
          <Sidebar
              title={'Restaurants'}
              places={this.state.places} />
          <div className={styles.content}>
            {/* Setting children routes to be rendered*/}
            {children}
          </div>

      </div>
    )
  }
}

Container.contextTypes = {
  router: T.object
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
