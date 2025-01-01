import styled from 'styled-components';
import { darken } from '../../utils/darken';

interface ChipProps {
    color: string
    backgroundColor: string
}

export const StyledChip = styled.div<ChipProps>`
  border-radius: 12px;
  padding: 10px;
  font-size: 15px;
  background-color: #EAEAEC;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    background-color: ${({ backgroundColor }) => darken(backgroundColor, 0.2)};
    color: #EAEAEC;
  }
`;