export type TMenu = {
  id: number;
  icon: string;
  label: string;
  path?: string;
  subMenu?: TMenu[];
};

export const sidebar_menus: TMenu[] = [
  {
    id: 1,
    label: "HOME",
    path: "/home",
    icon: "home",
  },
  {
    id: 2,
    label: "PRESTADORES",
    path: "/providers",
    icon: "person",
  },
];
