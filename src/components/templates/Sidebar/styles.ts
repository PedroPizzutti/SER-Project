import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  height: 100vh;
  background-color: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

export const ToggleContent = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1rem;
`;

export const ContentChildren = styled.div``;
