import styled from 'styled-components';
import { darken } from '../../../utils/darken';

interface ButtonProps {
  color: string;
  size: 'small' | 'medium' | 'large';
  borderRadius: string;
}

const sizeStyles = {
  small: '8px 16px',
  medium: '12px 24px',
  large: '16px 32px',
};

export const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => sizeStyles[size] || sizeStyles.medium};
  background-color: ${({ color }) => color || "#007BFF"};
  color: white;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "5px"};
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ color }) =>
      color ? darken(color, 0.1) : "#0056b3"};
  }

  &:focus {
    outline: none;
  }
`;