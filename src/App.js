import React, { useState } from 'react';
import styled from 'styled-components';

import { Dropdown, DropdownOption } from './Components/Dropdown';
import { MoreIcon } from './Components/Icons/MoreIcon';

const DropdownWrapper = styled.div`
  position:absolute;
  left:50%;
  top:50%;
`;

const PageWrapper = styled.div`
  padding: 50px;
`

const placement = [
 'auto',
 'auto-start',
 'auto-end',
 'top',
 'top-start',
 'top-end',
 'bottom',
 'bottom-start',
 'bottom-end',
 'right',
 'right-start',
 'right-end',
 'left',
 'left-start',
 'left-end'
];

function App() {
  const [option, setOption] = useState('bottom-end')
  console.log('option: ', option);
  return (
    <PageWrapper>
      <select value={option} onChange={(event) => setOption(event.target.value)}>
        { placement.map(place =>
          <option value={place} key={place}>{place}</option>
        )}
      </select>
      <DropdownWrapper>
        <Dropdown position={option} controlContent={<MoreIcon size="38"/>}>
          <DropdownOption clickHandler={() => alert('button1 clicked')}>Rename</DropdownOption>
          <DropdownOption clickHandler={() => alert('button2 clicked')}>Delate</DropdownOption>
          <DropdownOption link="/" target="_blank">Help</DropdownOption>
        </Dropdown>
      </DropdownWrapper>
    </PageWrapper>
  )
}

export default App;
