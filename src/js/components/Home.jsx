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
} from "rsuite";

const Home = () => {
  return (
    <>
      <Container className="textAlignCenter">
        <Panel className="sloganPanel">
          <Grid>
            <h3>Learn, Love & Live the Quran... Everyday!</h3>
            <p>
              Discover technology-based resources to connect with the Quran in
              these modern times.
            </p>
            <br />
            <br />
            <p className="urduFontParagraph">
              جدید دور میں قرآن سے مربوط ہونے کے لیے ٹیکنالوجی پر مبنی وسائل
              دریافت کریں۔
            </p>
          </Grid>
        </Panel>
        <br />
        <br />
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
          <p className="urduFontParagraph">
            قرآن اکیڈمی کو وقت دینے کے لیے شکریہ۔
            <br />
            ہم واقعی آپ کے یہاں آنے کی تعریف کرتے ہیں اور امید کرتے ہیں کہ آپ ان
            تمام وسائل کو تلاش کرنے سے لطف اندوز ہوں گے جو ہم نے روزانہ قرآن سے
            مشغول ہونے میں آپ کی مدد کے لیے دستیاب کرائے ہیں۔
          </p>
        </Container>
        <br />
        <br />
        <br />
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
              //style={{ gap: "1rem" }}
            >
              <Panel
                bordered
                shaded
                style={{
                  height: 480,
                  width: 300,
                  backgroundColor: "#6cbabd",
                  color: "white",
                }}
                header=""
                className="textAlignCenter"
              >
                <br />
                <img
                  src="quranIconPngColored.png"
                  style={{ boxShadow: "0px 0px 5px white" }}
                />
                <br />
                <br />
                {/* <ButtonGroup> */}
                <Button
                  size="lg"
                  style={{
                    color: "white",
                    background: "none",
                    border: "1px solid white",
                  }}
                >
                  Quran Reading & Recitation
                </Button>
                {/* </ButtonGroup> */}
                <br />

                <p className="textAlignJustify" style={{ padding: 15 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                  distinctio veritatis laudantium ipsam fuga perspiciatis, quasi
                  aliquam magnam eveniet minima illum.
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
              <Panel
                bordered
                shaded
                style={{
                  height: 480,
                  width: 300,
                  backgroundColor: "#6cbabd",
                  color: "white",
                }}
                header=""
                className="textAlignCenter"
              >
                <br />
                <img
                  src="quranIconPngColored.png"
                  style={{ boxShadow: "0px 0px 5px white" }}
                />
                <br />
                <br />
                {/* <ButtonGroup> */}
                {/* <IconButton
                  icon={<FaBook />}
                  size="lg"
                  // appearance="ghost"
                  style={{
                    color: "white",
                    background: "none",
                    border: "1px solid white",
                  }}
                ></IconButton> */}
                <Button
                  size="lg"
                  style={{
                    color: "white",
                    background: "none",
                    border: "1px solid white",
                  }}
                >
                  Quran Tafseer
                </Button>
                <br />

                <p className="textAlignJustify" style={{ padding: 15 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                  distinctio veritatis laudantium ipsam fuga perspiciatis, quasi
                  aliquam magnam eveniet minima illum.
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
              <Panel
                bordered
                shaded
                style={{
                  height: 480,
                  width: 300,
                  backgroundColor: "#6cbabd",
                  color: "white",
                }}
                header=""
                className="textAlignCenter"
              >
                <br />
                <img
                  src="quranIconPngColored.png"
                  style={{ boxShadow: "0px 0px 5px white" }}
                />
                <br />
                <br />
                <Button
                  size="lg"
                  style={{
                    color: "white",
                    background: "none",
                    border: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  Fiqhi Masail <br /> (Modern Prepositions)
                </Button>
                <br />

                <p className="textAlignJustify" style={{ padding: 15 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                  distinctio veritatis laudantium ipsam fuga perspiciatis,
                  quasi.
                </p>
              </Panel>
            </FlexboxGrid.Item>
          </Row>
        </FlexboxGrid>
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default Home;
