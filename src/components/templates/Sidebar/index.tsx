import { Icon } from "@/components/atoms/Icon";
import { PropsWithChildren, useState } from "react";
import {
  Container,
  Content,
  Navbar,
  NavbarItem,
  NavbarList,
  ToggleContent,
  ContentChildren,
  Link,
} from "./styles";
import { sidebar_menus } from "./settings";
import { useLocation } from "react-router-dom";

const Sidebar = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

  return (
    <Container>
      <Content $isOpenSideBar={isOpenSideBar}>
        <ToggleContent
          onClick={() => setIsOpenSideBar((oldState) => !oldState)}
        >
          <Icon name="menu" size="xlg" />
        </ToggleContent>
        <Navbar>
          <NavbarList>
            {sidebar_menus.map((menu) => (
              <Link
                key={menu.id}
                $isActive={pathname.includes(menu.path ?? "")}
                $isOpenSideBar={isOpenSideBar}
                to={menu.path ?? ""}
              >
                <Icon name={menu.icon} size="lg" />
                {isOpenSideBar && menu.label}
              </Link>
            ))}
          </NavbarList>
          <NavbarItem>Logout</NavbarItem>
        </Navbar>
      </Content>
      <ContentChildren $isOpenSideBar={isOpenSideBar}>
        {children}
      </ContentChildren>
    </Container>
  );
};

export default Sidebar;
