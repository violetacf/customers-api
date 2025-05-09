import { FC } from "react";
import { Container } from "./sidebar-navbar-layout.styles";
import { SidebarContainer } from "./sidebar/sidebar-container";
import { Main } from "./main/main";
import { Outlet } from "react-router";
import { NavTab } from "$/common/features/sidebar/nav-tab/nav-tab";
import { Sidebar } from "$/common/features/sidebar/sidebar";

export const SidebarNavbarLayout: FC = () => {
  return (
    <Container>
      <SidebarContainer>
        <Sidebar>
          <NavTab icon="user" label="Customers" to="/customers" />
          <NavTab icon="laptop" label="Tech Exercise Notes" to="/" />
        </Sidebar>
      </SidebarContainer>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
