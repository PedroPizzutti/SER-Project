import { IColumnsProps } from "@/components/molecules/Table/defaultSettings";
import { IProvider } from "@/interfaces/models";

//IColumnsProps<IProvider>[]
export const headers: any = [
  {
    key: "name",
    label: "usuario",
  },
  {
    key: "email",
    label: "e-mail",
  },
  {
    key: "cpf",
    label: "cpf",
  },
  {
    key: "bio",
    label: "bio",
  },
  {
    key: "actions",
    label: "acao",
  },
];
