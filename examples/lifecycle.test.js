import React from 'react';
import styled from 'styled-components'
import { mount } from 'enzyme';

class LifecycleComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      component: 'unmounted'
    }
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }


  render() {
    return (
      <div></div>
    )
  }
}

describe('LifecycleComponent', () => {
  jest.spyOn(LifecycleComponent.prototype, 'componentWillMount');
  jest.spyOn(LifecycleComponent.prototype, 'componentDidMount');

  afterEach(() => jest.clearAllMocks())

  it('calls its lifecycle methods when rendered with `mount`', () => {
    const mountedComponent = mount(<LifecycleComponent />)
    expect(LifecycleComponent.prototype.componentWillMount).toHaveBeenCalledTimes(1);
    expect(LifecycleComponent.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  })
})