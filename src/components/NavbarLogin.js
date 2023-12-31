import React, { useState } from "react";
import "./navbar.scss";
import Logo from "./img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Outlet } from "react-router-dom";

function NavbarLogin(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar expand="md" {...args}>
        <NavbarBrand href="/" className="text-light">
          <img
            src={Logo}
            alt="logo"
            className="me-2"
            style={{
              height: 40,
              width: 100,
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav caret className="text-light">
                MENU
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem>
                  <NavLink className="text-light" href="/LoginAdm">
                    Administrador Sistema
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="text-light" href="/">
                    Becario
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="text-light" href="/LoginPer">
                    Personal
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sobre Nosotros...</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavbarLogin;
