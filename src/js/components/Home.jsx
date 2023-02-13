import { Image } from "@rsuite/icons";
import React from "react";
import { FaBook } from "react-icons/fa";
import {
  Container,
  Panel,
  Grid,
  Col,
  ButtonGroup,
  IconButton,
  Button,
  ButtonToolbar,
  Row,
  FlexboxGrid,
  Carousel,
} from "rsuite";
import TwitterIcon from "@rsuite/icons/legacy/Twitter";
import muslimGirl from "./../../resources/images/muslimGirl.jpg";
import bannerImage_01 from "./../../resources/images/WebsiteBannerButurab.png";
import bannerImage_02 from "./../../resources/images/WebsiteBannerButurab_02.jpg";
const Home = () => {
  return (
    <>
      <Container className="textAlignCenter">
        <Panel className="carousal-panel">
          {/* <Carousel autoplay> */}

          <div>
            <div
              className="imgContainer"
              style={{
                background: "linear-gradient(90deg, red 0%, darkred 100%)",
              }}
            >
              <img
                src={muslimGirl}
                alt="BannerImage_01"
                className="imgBgFade"
              />

              <div className="dataContainer urdu-header-center buturab-name-heading">
                <h1>Buturab Online Quran Academy</h1>
                <h1>بوتراب آنلائن قرآن اکیڈمی</h1>
              </div>

              {/* <div className="imgContainer">
                  <img
                    src={muslimGirl}
                    alt="BannerImage_01"
                    className="imgBgFade"
                  />
                </div> */}
            </div>
          </div>
          {/* </Carousel> */}
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
        </Panel>

        <Panel className="sloganPanel">
          <Grid>
            <h3>Learn, Love & Live the Quran... Everyday!</h3>
            <p>
              Discover technology-based resources to connect with the Quran in
              these modern times.
            </p>
            <br />
            <br />
            <p className="urdu-para-center">
              جدید دور میں قرآن سے مربوط ہونے کے لیے ٹیکنالوجی پر مبنی وسائل
              دریافت کریں۔
            </p>
          </Grid>
        </Panel>

        <Container className="welcomeStatement">
          <h3>Welcome to Buturab Online Quran Academy. </h3>
          <br />
          <br />
          <p>
            Thank you for taking the time to visit Quran Academy.
            <br /> We really appreciate you being here and hope you enjoy
            exploring all the resources we have made available to help you
            engage the Quran daily.
          </p>
          <br />
          <br />
          <p className="urdu-para-center">
            قرآن اکیڈمی کو وقت دینے کے لیے شکریہ۔
            <br />
            ہم واقعی آپ کے یہاں آنے کی تعریف کرتے ہیں اور امید کرتے ہیں کہ آپ ان
            تمام وسائل کو تلاش کرنے سے لطف اندوز ہوں گے جو ہم نے روزانہ قرآن سے
            مشغول ہونے میں آپ کی مدد کے لیے دستیاب کرائے ہیں۔
          </p>
        </Container>

        <Grid className="grid-cards">
          <FlexboxGrid className="cards" justify="space-between">
            <Row>
              <FlexboxGrid.Item
                colspan={12}
                as={Col}
                xs={16}
                sm={16}
                md={12}
                lg={8}
                className="card"
              >
                <Panel bordered shaded className="textAlignCenter card">
                  <br />
                  <img src="quranIconPngColored.png" alt="qurn icon png" />
                  <br />
                  <br />
                  <h6>Quran Reading & Recitation</h6>
                  <p className="textAlignJustify" style={{ padding: 15 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint distinctio veritatis laudantium ipsam fuga
                    perspiciatis, quasi aliquam magnam eveniet minima illum.
                  </p>
                </Panel>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item
                colspan={12}
                as={Col}
                xs={16}
                sm={16}
                md={12}
                lg={8}
                className="card"
              >
                <Panel bordered shaded className="textAlignCenter card">
                  <br />
                  <img src="quranIconPngColored.png" alt="quran pic" />
                  <br />
                  <br />
                  <h6>Quran Tafseer</h6>

                  <p className="textAlignJustify" style={{ padding: 15 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint distinctio veritatis laudantium ipsam fuga
                    perspiciatis, quasi aliquam magnam eveniet minima illum.
                  </p>
                  {/* </ButtonGroup> */}
                </Panel>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item
                colspan={12}
                as={Col}
                xs={16}
                sm={16}
                md={12}
                lg={8}
                className="card"
              >
                <Panel bordered shaded className="textAlignCenter card">
                  <br />
                  <img src="quranIconPngColored.png" alt="quran info" />
                  <br />
                  <br />
                  <h6>Fiqhi Masail (Modern Prepositions)</h6>

                  <p className="textAlignJustify" style={{ padding: 15 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint distinctio veritatis laudantium ipsam fuga
                    perspiciatis, quasi aliquam magnam eveniet minima illum.
                  </p>
                </Panel>
              </FlexboxGrid.Item>
            </Row>
          </FlexboxGrid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
