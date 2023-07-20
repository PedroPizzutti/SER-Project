import { HeaderComponent, Navbar, ItemMenu } from "./styles";
import { useLocation } from "react-router-dom";
import logo from "@assets/logo.png";
import { useAuth } from "@/stores/hook/useAuth";
import { Button } from "../molecules/buttons";

export const Header = () => {
  const { pathname } = useLocation();
  const { signOut } = useAuth();

  return (
    <div>
      <HeaderComponent>
        <img src={logo} />
      </HeaderComponent>
    </div>
  );
};
