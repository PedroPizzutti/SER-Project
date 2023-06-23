import { FormControl, ContainerInput, Button } from "./styles";
import { Icon } from "@components/atoms/Icon";
import { DefaultSettings } from "../defaultSettings";

interface ISearchProps extends DefaultSettings {
  type: "text" | "email";
  label?: string;
  placeholder?: string;
  handleClick?: (text: string) => void;
}

export const Search = ({type, label, placeholder, form, name, handleClick}: ISearchProps) => {
  const value = form.watch(name);
  return (
    <div>
      <label>{label}</label>
      <FormControl>
        <ContainerInput
          type={type}
          placeholder={placeholder}
          {...form.register(name)}
        ></ContainerInput>
        <Button onClick={() => handleClick?.(value)}>
          <Icon name="search" color="#fff" />
        </Button>
      </FormControl>
    </div>
  );
};
