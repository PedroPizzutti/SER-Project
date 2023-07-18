import { Icon } from "@/components/atoms/Icon";
import { PropsWithChildren } from "react";
import {
  Container,
  Content,
  Navbar,
  NavbarItem,
  NavbarList,
  ToggleContent,
  ContentChildren,
} from "./styles";
import { sidebar_menus } from "./settings";

const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Content>
        <ToggleContent>
          <Icon name="menu" size="xlg" />
        </ToggleContent>
        <Navbar>
          <NavbarList>
            {sidebar_menus.map((menu) => (
              <NavbarItem key={menu.id}>
                <Icon name={menu.icon} size="lg" />
                {menu.label}
              </NavbarItem>
            ))}
          </NavbarList>
          <NavbarItem>Logout</NavbarItem>
        </Navbar>
      </Content>
      <ContentChildren>{children}</ContentChildren>
    </Container>
  );
};

export default Sidebar;
