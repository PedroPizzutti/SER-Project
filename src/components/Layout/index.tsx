import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { useEffect } from "react";
import Sidebar from "../templates/Sidebar";

export const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('TOKEN');
  useEffect(() => {
    if (!token) {
      navigate('/auth/sign-in')
    }
  }, [token]); 

  return (
    <Sidebar>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Sidebar>
  );
};
