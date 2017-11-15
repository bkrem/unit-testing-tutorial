import React from 'react';
import styled from 'styled-components'
import { shallow } from 'enzyme';

const LaBuvette = styled.div`
  width: 100%;
  height: 100%;
`

const Steak = styled.li`
  width: 100%;
  height: 200px;
`
const FridayLunch = (props) => (
  <LaBuvette>
    <ul>{props.portalTeam.map(member => <Steak key={member.name} owner={member.name}>{member.name}</Steak>)}</ul>
  </LaBuvette>
);

describe('FridayLunch', () => {
  const props = { 
    portalTeam: [
      { name: 'Tobi' }, 
      { name: 'Antonella' }, 
      { name: 'Arpad' }, 
      { name: 'Evzen' }, 
      { name: 'Carlos' }, 
      { name: 'Ben' }
    ] 
  }

  it('renders LaBuvette', () => {
    const renderedComponent = shallow(<FridayLunch {...props} />);
    expect(renderedComponent.find(LaBuvette).length).toBe(1);
  })

  describe('FridayLunch (with setup func)', () => {
    function setup(addedProps = {}, render = shallow) {
      const props = {
        portalTeam: [
          { name: 'Tobi' },
          { name: 'Ben' },
          { name: 'Arpad' },
          { name: 'Evzen' },
          { name: 'Carlos' },
          { name: 'Antonella' }
        ],
        ...addedProps
      }
      return render(<FridayLunch {...props} />) 
    };

    it('renders a styled Steak for each team member 🍖', () => {
      const props = {
        portalTeam: [
          { name: 'Tobi' },
          { name: 'Antonella' },
          { name: 'Arpad' },
        ]
      }
      const renderedComponent = setup(props) // <-- so much cleaner ✨
      expect(renderedComponent.find(Steak).length).toBe(props.portalTeam.length)
    })

    it('sets each Steak with the team member\'s name as owner', () => {
      const renderedComponent = setup();
      expect(renderedComponent.find(Steak).first().props().owner).toBe('Tobi') 
      expect(renderedComponent.find(Steak).last().props().owner).toBe('Antonella') 
    })

    it('labels each steak with the name of its owner', () => {
      const renderedComponent = setup();
      expect(renderedComponent.find(Steak).first().contains('Tobi')).toBe(true)
      expect(renderedComponent.find(Steak).last().contains('Antonella')).toBe(true) 
    })
  })
})