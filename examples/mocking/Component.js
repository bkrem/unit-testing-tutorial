import React from 'react';
import {fakeNetworkRequest} from './networkModule'

export default class Component extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      current: 'no data'
    }
  }

  componentDidMount() {
    fakeNetworkRequest().then((response) => {
      this.setState({current: response}) 
    })
  }

  render() {
    return (
      <div>
        {this.state.current}
      </div>
    )
  }
}