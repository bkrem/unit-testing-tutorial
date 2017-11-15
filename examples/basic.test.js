import React from 'react';
import {shallow} from 'enzyme';

const SimpleComponent = () => (<div>Hello world</div>);

describe('SimpleComponent', () => {

  // either use `it()`
  it('renders', () => {
    const renderedComponent = shallow(<SimpleComponent />);
    expect(renderedComponent).toMatchSnapshot();
  })

  // or `test()`
  test('component renders', () => {
    const renderedComponent = shallow(<SimpleComponent />);
    expect(renderedComponent).toMatchSnapshot();
  })

})
