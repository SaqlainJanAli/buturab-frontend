import React from "react";
import NavBar from "./NavBar";
import { Button, IconButton, Panel } from "rsuite";
import TwitterIcon from "@rsuite/icons/legacy/Twitter";

import muslimGirl from "./../../resources/images/muslimGirl.jpg";
// import bannerImage_01 from "./../../resources/WebsiteBannerButurab.png";
// import bannerImage_02 from "./../../resources/WebsiteBannerButurab_02.jpg";
const Header = () => {
  return (
    <>
      <Panel bodyFill bordered style={{ overflow: "visible" }}>
        {/* <Carousel autoplay> */}
        {/* <img src={muslimGirl} alt="BannerImage_01" /> */}

        {/* </Carousel> */}
        <NavBar />
      </Panel>

      {/* <Panel className="panelSlider"> */}
      {/* <div class="mask-custom">
          <h3 class="text-white mb-0">Can you see me?</h3>
        </div> */}
      {/* <div className="imgContainer"> */}
      {/* <img src={muslimGirl} alt="BannerImage_01" className="imgBgFade" /> */}
      {/* </div> */}
      {/* <div className="dataContainer">
          <h1 className="header">
            Buturab Online Quran Academy
            <text className="urduFontHeader">بوتراب آنلائن قرآن اکیڈمی</text>
          </h1> */}
      {/* <Button className="roundedButton">Contact us</Button> */}

      {/* <IconButton
            icon={<TwitterIcon />}
            color="cyan"
            appearance="primary"
            circle
          /> */}
      {/* </div> */}
      {/* <h1 className="header">Buturab Online Quran Academy</h1> */}
      {/* </Panel> */}
    </>
  );
};

export default Header;
