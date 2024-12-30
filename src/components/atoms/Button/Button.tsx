import { StyledButton } from "./Button.styles";

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  size?: "small" | "medium" | "large";
  borderRadius?: string;
}

export const Button = ({ label, onClick, color = "#007bff", size = "medium", borderRadius = "5px" }: ButtonProps) => {
  return (
    <StyledButton color={color} size={size} borderRadius={borderRadius} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
