import styled from 'styled-components';
import { darken } from '../../utils/darken';

interface ChipProps {
    color: string
    backgroundColor: string
}

export const StyledChip = styled.div<ChipProps>`
    display: inline-block;
    align-items: center;
    justify-content: center;
    padding: 5px 12px;
    background-color: ${({ backgroundColor }) => backgroundColor || "#007bff"};
    color: ${({ color }) => color || "#fff"};
    border-radius: 16px;
    font-size: 14px;
    margin: 5px;
    cursor: default;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ backgroundColor }) => backgroundColor ? darken(backgroundColor, 0.1) : "#0056b3"};
    }
`;