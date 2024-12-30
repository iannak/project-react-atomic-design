import { StyledChip } from "./Chip.styles"

interface ChipProps {
    label: string
    color?: string
    backgroundColor?: string
}

export const Chip = ({ label, color = "white", backgroundColor = "#007bff" }: ChipProps) => {
    return (
        <StyledChip color={color} backgroundColor={backgroundColor}>
            {label}
        </StyledChip>
    )
}