import { Icon } from "@/components/atoms/Icon";
import { Container } from "./styles";

const sizes = {
  sm: ".7rem",
  md: ".85rem",
  lg: "1.3rem",
};

interface IDefaultProps extends React.ButtonHTMLAttributes<any> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: keyof typeof sizes;
  icon?: string;
  isLoading?: boolean;
}

export const IconB = (props: IDefaultProps) => {
  return (
    <Container color={props.color} onClick={props.onClick}>
      <Icon name={props.icon ?? ""} color={props.color} size={props.size}/>
    </Container>
  );
};
