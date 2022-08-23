import styled from 'styled-components';
import { colours } from './colours';

export const OptionStyled = styled.button`
  all: unset;
  cursor: pointer;
  background: ${colours.black100};
  color: ${colours.white100};
  border: none;
  padding: 15px;
  border-radius: 0;
  min-width: 120px;
  display: block;

  &:hover { 
    background: ${colours.blue100};
  }

  &:focus{ 
    border-radius: 0;
    outline:  ${colours.white200} solid 1px;
  }
`;