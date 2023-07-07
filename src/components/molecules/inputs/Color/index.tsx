import { useMemo } from "react";
import { DefaultSettings } from "../defaultSettings";
import { FormControl, ContainerInput } from "./styles";
import { Label } from "@/components/atoms/Label";
import { Error } from "@/components/atoms/Error";

interface IColorText extends DefaultSettings {
  label?: string;
  isRequired?: boolean;
}

export const Color = ({ label, isRequired, form, name }: IColorText) => {
  const error = useMemo(() => {
    return form.getFieldState(name).error;
  }, [form.formState]);

  return (
    <div>
      <Label text={label} isRequired={isRequired} />
      <FormControl>
        <ContainerInput
          type="color"
          {...form.register(name)}
          onChange={(e) => {
            form.register(name).onChange(e);
            form.clearErrors(name);
          }}
        ></ContainerInput>
      </FormControl>
      <Error text={error?.message} />
    </div>
  );
};
