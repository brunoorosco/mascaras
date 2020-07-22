import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaHome,
  FaEdge,
  FaPaperPlane,
  FaQuestion,
  FaImage,
  FaCopy,
} from "react-icons/fa";

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import HeaderSidebar from './Header'
import './styles.css'

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <HeaderSidebar />
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">

        <SubMenu title="Cadastro" icon={FaHome} items={submenus[0]} />
        <SubMenu title="Consulta" icon={FaCopy} items={submenus[1]} />

        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FaHome className="mr-2" />
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FaHome className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FaHome className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FaHome className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/teste"}>
            <FaHome className="mr-2" />
            teste
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Entrada - Estoque ",
      target: "/estoque/entrada",
    },

    {
      title: "Fornecedor",
      target: "/fornecedor/new",
    },
    {
      title: "Material",
      target: "/material/new",
    },
    {
      title: "Produto",
      target: "/product",
    },
    {
      title: "Saída - Estoque ",
      target: "/estoque/saida",
    },
    {
      title: "Usuário",
      target: "/produto",
    },
  ],
  [
    {
      title: "Estoque",
      target: "/estoque",
    },
    {
      title: "Fornecedor",
      target: "/fornecedor",
    },
  ],
];

export default SideBar;
