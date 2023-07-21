import theme from "@/global/styles/theme";
import { Container } from "./styles";
import { Icon } from "@components/atoms/Icon";
import { TFontSizeKeys } from "@/interfaces/theme";

interface IDefaultProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: keyof typeof theme.colors;
  background?: keyof typeof theme.colors;
  size?: TFontSizeKeys;
  startIcon?: string;
  endIcon?: string;
  isLoading?: boolean;
}

export const Default = (props: IDefaultProps) => {
  return (
    <Container
      color={props.color}
      background={props.background}
      size={props.size}
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
