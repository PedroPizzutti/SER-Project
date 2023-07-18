import { Span } from "./styles";

const sizes = {
  sm: ".7rem",
  md: "1rem",
  lg: "1.3rem",
  xlg: '2rem',
};

interface IIconProps {
  name: string;
  color?: string;
  size?: keyof typeof sizes;
}
// Select icon by https://fonts.google.com/icons?selected=Material+Icons:home
export const Icon = ({ name, color, size }: IIconProps) => {
  return (
    <Span color={color} style={{ fontSize: sizes[size ?? "md"] }}>
      {name}
    </Span>
  );
};