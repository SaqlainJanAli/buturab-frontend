import React from "react";
import NavBar from "./NavBar";
import { Panel } from "rsuite";

const Header = () => {
  return (
    <>
      <Panel bodyFill bordered style={{ overflow: "visible" }}>
        <NavBar />
      </Panel>
    </>
  );
};

export default Header;
