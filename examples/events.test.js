import React from 'react';
import styled from 'styled-components'
import { shallow } from 'enzyme';

const TypicalButton = styled.button``

const ButtonComponent = (props) => <TypicalButton onClick={props.onButtonClick} />

describe('ButtonComponent', () => {
  function setup(addedProps = {}, render = shallow) {
    const props = {
      onButtonClick: () => {},
      ...addedProps
    }
    return render(<ButtonComponent {...props} />)
  }

  it('triggers `props.onButtonClick` when TypicalButton is clicked', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = setup({onButtonClick: onClickSpy});
    renderedComponent.simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  })
})


// **************************************************************

class ComponentWithCustomClickHandler extends React.PureComponent {
  customOnClickHandler(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    // ...
  }
  render() {
    return <TypicalButton onClick={this.customOnClickHandler} />
  }
}

describe('ComponentWithCustomClickHandler', () => {
  jest.spyOn(ComponentWithCustomClickHandler.prototype, 'customOnClickHandler');

  it('triggers `customOnClickHandler` when TypicalButton is clicked', () => {
    const renderedComponent = shallow(<ComponentWithCustomClickHandler />)
    const mockEvent = {preventDefault: () => {}, stopPropagation: () => {}}
    renderedComponent.simulate('click', mockEvent);
    expect(renderedComponent.instance().customOnClickHandler).toHaveBeenCalledTimes(1);
  })
})