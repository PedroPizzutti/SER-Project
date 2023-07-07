import { useMemo } from "react";
import { DefaultSettings } from "../defaultSettings";
import { FormControl, ContainerInput } from "./styles";
import { Label } from "@components/atoms/Label";
import { Error } from "@/components/atoms/Error";

interface ITextProps extends DefaultSettings {
  type: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export const Text = ({
  type,
  label,
  placeholder,
  isRequired,
  form,
  name,
}: ITextProps) => {
  const error = useMemo(() => {
    return form.getFieldState(name).error;
  }, [form.formState]);

  return (
    <div>
      <Label text={label} isRequired={isRequired} />
      <FormControl>
        <ContainerInput
          type={type}
          placeholder={placeholder}
          {...form.register(name)}
          onChange={(event) => {
            form.register(name).onChange(event);
            form.clearErrors(name);
          }}
        ></ContainerInput>
      </FormControl>
      <Error text={error?.message} />
    </div>
  );
};
