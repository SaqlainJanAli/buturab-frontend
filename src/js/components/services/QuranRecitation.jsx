import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";

import {
  Button,
  ButtonGroup,
  Col,
  Container,
  FlexboxGrid,
  IconButton,
  Modal,
  Panel,
  Row,
} from "rsuite";
import { TwitterEmbed } from "react-social-media-embed";
const QuranRecitation = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleModalOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //Modal Admission
  const modalAdmission = (
    <Modal size={size} open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Who can get Admission</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        All learners of quran will be getting a great deal from this course
        adults can also utilize this course by sitting at their homes.
        <p className="urduFontParagraph">
          تمام قرآن سیکھنے والوں کو اس کورس سے بہت فائدہ ہوگا۔ بالغ افراد بھی
          گھر بیٹھے اس کورس سے استفادہ کر سکتے ہیں۔
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
        <Button onClick={handleClose} appearance="primary">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );

  //Render Portion
  return (
    <>
      <Container>
        {/* <Grid> */}
        <FlexboxGrid justify="center" style={{ margin: "20px" }}>
          <FlexboxGrid.Item
            as={Col}
            colspan={24}
            xs={20}
            sm={18}
            md={12}
            lg={17}
          >
            <Panel style={{ minHeight: "710px" }}>
              <br />
              <h5>Quran Recitation, Reading and Translation</h5>
              <hr />
              <ol>
                <li>
                  <strong>Basic Qaida Reading</strong>
                  <br /> <br />
                  After the completion of this step the student will be able to
                  know the following
                  <ol>
                    <li>
                      To know how to read and pronounces the Arabic alphabets
                      correctly.
                    </li>
                    <li>To understand the basic rules of Tajweed properly.</li>
                  </ol>
                  <br />
                  <ButtonGroup>
                    <Button
                      appearance="primary"
                      onClick={() => handleModalOpen("md")}
                    >
                      Who will get admission in this step?{" "}
                    </Button>
                    <IconButton
                      icon={<FaQuestion />}
                      appearance="primary"
                    ></IconButton>
                  </ButtonGroup>
                  {modalAdmission}
                  <br />
                  <br />
                </li>
                <li>
                  <strong>Quran Reading</strong>
                  <br />
                  <br />
                  In this important step learner will learn how to read and
                  pronounce the holy Quran with tajweed rules
                  <br />
                  <br />
                  After completion of this course the learner will be able to
                  recite the holy Quran with tajweed rules fluently
                  <br />
                  <br />
                </li>
                <li>
                  <strong>Quran Translation</strong>
                  <br />
                  <br />
                  This is suitable for those who can recite the holy Quran with
                  tajweed, because the most important and basic right of the
                  holy Quran is to recite with proper pronunciation, and second
                  is to understand it properly.
                  <br />
                  <br />
                </li>
              </ol>
            </Panel>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            as={Col}
            colspan={24}
            xs={20}
            sm={18}
            md={12}
            lg={7}
          >
            {/* <div class="vl"></div> */}
            <Panel
              bordered
              header="Social Media Links"
              className="textAlignCenter backgroundFaded"
            >
              <Row>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TwitterEmbed
                    url="https://twitter.com/SaqlainJanAli/status/1609267301349740545?s=20&t=NLO3G6gTt4LiOqwgnZAw7w"
                    width={400}
                    height={800}
                  />
                </div>
              </Row>
            </Panel>
            {/* Links */}
          </FlexboxGrid.Item>
        </FlexboxGrid>
        {/* </Grid> */}
      </Container>
    </>
  );
};

export default QuranRecitation;
