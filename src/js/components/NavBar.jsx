import React from "react";
import { Nav, Navbar } from "rsuite";

import PagesList from "./../data/NavPages";
import { Link } from "react-router-dom";
import ButurabAppLogo from "./../../resources/images/BUTURAB_LOGO_PLUS_NAME.png";

const NavBar = () => {
  return (
    <>
      {/* <Nav.Item> */}
      <Navbar.Brand className="buturab-brand-name">
        <img
          src={ButurabAppLogo}
          className
          alt="Logo"
          height={90}
          width={300}
        />
      </Navbar.Brand>
      {/* </Nav.Item> */}
      <div style={{ paddingTop: "25px" }}>
        <Navbar
          appearance="inverse"
          style={{
            background: "none",
            color: "black",
            border: "2",
            borderColor: "black",
            float: "right",
            marginTop: "50",
          }}
        >
          <Nav
            style={{
              background: "none",
              color: "black",
              border: "2",
              borderColor: "black",
            }}
          >
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
      </div>
    </>
  );
};

export default NavBar;
