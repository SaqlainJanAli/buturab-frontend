import React from "react";
import { Nav, Navbar } from "rsuite";

import PagesList from "./../data/NavPages";
import { Link } from "react-router-dom";
import ButurabAppLogo from "./../../resources/images/ButurabLogo.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        appearance="inverse"
        style={{
          background: "none",
          color: "black",
          border: "2",
          borderColor: "black",
        }}
      >
        <Nav>
          <Nav.Item>
            <img src={ButurabAppLogo} alt="Logo" height={50} width={50} />
          </Nav.Item>
          {/* <Nav.Item> */}
          <Navbar.Brand className="buturab-brand-name">
            BUTURAB QURAN ACADEMY
          </Navbar.Brand>
          {/* </Nav.Item> */}

          {PagesList.map((itemPage) =>
            itemPage.isDropDown && itemPage.childItems.length > 0 ? (
              <Nav.Menu title={itemPage.title}>
                {itemPage.childItems.map((childItem) => (
                  <Nav.Item as={Link} to={childItem.link}>
                    {childItem.title}
                  </Nav.Item>
                ))}
              </Nav.Menu>
            ) : (
              <Nav.Item as={Link} to={itemPage.link}>
                {itemPage.title}
              </Nav.Item>
            )
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
