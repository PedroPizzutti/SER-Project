import { HeaderComponent, Navbar, ItemMenu } from "./styles";
import { useLocation } from "react-router-dom";
import logo from "@assets/logo.png";
import { useAuth } from "@/stores/hook/useAuth";
import { Button } from "../molecules/buttons";

export const Header = () => {
  const { pathname } = useLocation();
  const { signOut } = useAuth();
  const menus = [
    {
      id: 1,
      title: "HOME",
      path: "/home",
    },
    {
      id: 2,
      title: "PRESTADORES",
      path: "/providers",
    },
  ];

  return (
    <div>
      <HeaderComponent>
        <img src={logo} />
        <Navbar>
          <ul>
            {menus.map((menu) => (
              <ItemMenu
                to={menu.path}
                key={menu.id}
                $isActive={pathname.includes(menu.path)}
              >
                {menu.title}
              </ItemMenu>
            ))}
            <Button.IconB
              icon="logout"
              color="#CE275C"
              size="lg"
              onClick={signOut}
            ></Button.IconB>
          </ul>
        </Navbar>
      </HeaderComponent>
    </div>
  );
};
