import { IColumnsProps } from "@/components/molecules/Table/defaultSettings";
import { IProvider } from "@/interfaces/models";

export const headers: IColumnsProps<IProvider>[] = [
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
    label: "Acao",
  },
];
