import styled from 'styled-components';

import { colours } from './colours';

export const DropdownButton = styled.button`
  all: unset;
  cursor: pointer;
  background: ${colours.black100};
  color: ${colours.white100};
  border: none;
  border: none;
  padding: 7px;
  width: auto;
  border-radius: 0;

  &:hover { 
    background: ${colours.blue100};
  }

  &:focus{ 
    background: ${colours.blue400};
    border-radius: 0;
  }

  * {
    vertical-align: middle;
  }
`;
