import { Container } from "./styles";
import { Icon } from "@components/atoms/Icon";

const sizes = {
  xs: ".5rem",
  sm: ".7rem",
  md: ".85rem",
  lg: "1.3rem",
  xl: "2rem",
};

interface IDefaultProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  background?: string;
  size?: keyof typeof sizes;
  startIcon?: string;
  endIcon?: string;
  isLoading?: boolean;
}

export const Default = (props: IDefaultProps) => {
  const fontSize = sizes[props.size ?? "sm"];
  return (
    <Container
      color={props.color}
      background={props.background}
      size={fontSize}
      onClick={props.onClick}
    >
      {props.isLoading ? (
        <span>carregando...</span>
      ) : (
        <>
          {props.startIcon && (
            <Icon name={props.startIcon ?? ""} color={props.color} />
          )}
          {props.text}
          {props.endIcon && (
            <Icon name={props.endIcon ?? ""} color={props.color} />
          )}
        </>
      )}
    </Container>
  );
};
