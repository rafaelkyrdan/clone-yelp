import React, { PropTypes } from 'react';
import { Router } from 'react-router';

import styles from '../../app.css'

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render () {
     return (
       <div  className={styles['container']}>
         {this.content}
         <h1>Environment: {__NODE_ENV__}</h1>
       </div>
     )
   }
}

export default App;
