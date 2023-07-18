import { Container, Link, Item } from "./styles";

type TMenu = {
  label: string;
  path?: string;
};

interface IBreadcrumbsProps {
  menus: TMenu[];
}

const Breadcrumbs = ({ menus }: IBreadcrumbsProps) => {
  return (
    <Container>
      {menus.map((menu) =>
        menu.path ? (
          <Link to={menu.path} key={menu.label}>
            {menu.label}
          </Link>
        ) : (
          <Item key={menu.label}> 
            {menu.label}
          </Item>
        )
      )}
    </Container>
  );
};

export default Breadcrumbs;
