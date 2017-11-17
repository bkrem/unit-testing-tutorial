import React from 'react';
import styled from 'styled-components'
import { mount } from 'enzyme';
import Component from './Component';

jest.mock('./networkModule', () => ({
  fakeNetworkRequest: () => ({
    then: () => 'hey this is a mocked function'
  })
}))


//  jest.mock('gsap', () => ({
//   TweenLite: {
//     set: jest.fn(),
//     to: jest.fn(() => ({
//       eventCallback: () => {},
//     })),
//   },
// }));

describe('Component with mocks', () => {
  it('renders', () => {
    const renderedComponent = mount(<Component />)
    console.log(renderedComponent.debug())
  })
})