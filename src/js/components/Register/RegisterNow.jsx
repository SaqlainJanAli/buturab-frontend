import React from "react";
import {
  Container,
  Divider,
  Panel,
  Form,
  Radio,
  RadioGroup,
  DatePicker,
  Grid,
  Col,
  Row,
  FlexboxGrid,
  CheckboxGroup,
  Checkbox,
  Input,
  Button,
} from "rsuite";
// import { GoogleSpreadsheet } from "google-spreadsheet";
import { useState } from "react";
import axios from "axios";
const RegisterNow = () => {
  const textArea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
  ));

  const {
    // REACT_APP_PRIVATE_KEY,
    // REACT_APP_CLIENT_EMAIL,
    // REACT_APP_SPREADSHEET_ID,
    // REACT_APP_SHEET_ID,
    REACT_APP_SHEET_BEST_URL,
  } = process.env;

  // SpreadSheetWorking STARTS
  // const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  // const appendSpreadsheet = async (row) => {
  //   try {
  //     await doc.useServiceAccountAuth({
  //       client_email: REACT_APP_CLIENT_EMAIL,
  //       private_key: REACT_APP_PRIVATE_KEY,
  //     });

  //     await doc.loadInfo();

  //     console.log(doc.loadInfo());

  //     const sheet = doc.sheetsById[REACT_APP_SHEET_ID];

  //     const result = await sheet.addRow(row);

  //     return result;
  //   } catch (e) {
  //     console.error("Error: ", e);
  //   }
  // };
  // SpreadSheetWorking ENDS
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    DateOfBirth: null,
    Gender: "",
    GuardiansName: "",
    LanguageKnown: "",
    Courses: [],
    Address: "",
  });

  function sendDataToSheet(e) {
    console.log(formData);
    console.log(process.env.REACT_APP_SHEET_BEST_URL);
    axios
      .post(process.env.REACT_APP_SHEET_BEST_URL, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // appendSpreadsheet(formData);
    sendDataToSheet(event);
  };

  return (
    <Container>
      <h4 className="buturab-page-name ">Register Now</h4>
      <Grid>
        <p>
          Please feel free to fill out the following form to take a free trial
          of Online Quran Classes. We will inshaAllah contact you soon.
        </p>
        <p className="urdu-para-center">
          مفت ٹرائل لینے کے لیے براہ کرم درج ذیل فارم کو پُر کریں۔ آن لائن قرآن
          کی کلاسز۔ ہم انشاء اللہ جلد آپ سے رابطہ کریں گے۔
        </p>
        <br />
        <br />
        <Panel
          header="Registration Form"
          className="textAlignCenter"
          bordered
          shaded
          style={{
            color: "black",
            background:
              "linear-gradient(90deg, rgba(239,255,254,1) 0%, rgba(173,233,233,1) 100%)",
          }}
        >
          <Divider>Start</Divider>
          <Form
            style={{
              textAlign: "left",
              paddingLeft: "50px",
            }}
          >
            <Row style={{ display: "flex" }}>
              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="firstName">
                  <Form.ControlLabel>First name : </Form.ControlLabel>
                  <Form.Control
                    required
                    type="text"
                    name="FirstName"
                    onChange={(e) => {
                      formData.FirstName = e;
                    }}
                  />
                </Form.Group>
              </Col>
              <br />

              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="lastName">
                  <Form.ControlLabel>Last name : </Form.ControlLabel>
                  <Form.Control
                    name="LastName"
                    onChange={(e) => {
                      formData.LastName = e;
                    }}
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row style={{ display: "flex" }}>
              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="datePicker">
                  <Form.ControlLabel>Date Of Birth :</Form.ControlLabel>
                  <Form.Control
                    name="DateOfBirth"
                    accepter={DatePicker}
                    style={{ width: "300px" }}
                    format="dd-MM-yyyy"
                    onChange={(e) => {
                      formData.DateOfBirth = e;
                    }}
                  />
                </Form.Group>
              </Col>
              <br />
              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="radio">
                  <Form.ControlLabel>Gender :</Form.ControlLabel>
                  <Form.Control
                    name="Gender"
                    accepter={RadioGroup}
                    inline
                    onSelect={(e) => {
                      formData.Gender = e;
                    }}
                  >
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </Form.Control>
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row style={{ display: "flex" }}>
              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="guardiansName">
                  <Form.ControlLabel>Guardians name :</Form.ControlLabel>
                  <Form.Control
                    name="GuardiansName"
                    onChange={(e) => {
                      formData.GuardiansName = e;
                    }}
                  />
                </Form.Group>
              </Col>
              <br />
              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="language">
                  <Form.ControlLabel>Language Known : </Form.ControlLabel>
                  <Form.Control
                    name="LanguageKnown"
                    onChange={(e) => {
                      formData.LanguageKnown = e;
                    }}
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row style={{ display: "flex" }}>
              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="checkbox">
                  <Form.ControlLabel>Select Courses : </Form.ControlLabel>
                  <Form.Control
                    name="Courses"
                    accepter={CheckboxGroup}
                    onChange={(e) => {
                      formData.Courses = e;
                    }}
                  >
                    <Checkbox value="Basic Qaida Reading">
                      Basic Qaida Reading
                    </Checkbox>
                    <Checkbox value="Quran Reading">Quran Reading</Checkbox>
                    <Checkbox value="Quran Translation">
                      Quran Translation
                    </Checkbox>
                    <Checkbox value="Quran Tafseer">Quran Tafseer</Checkbox>
                    <Checkbox value="Hifz-e-Quran">Hifz-e-Quran</Checkbox>
                    <Checkbox value="Fiqah">
                      Specialization in Fiqah & Usool
                    </Checkbox>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col xs={12} md={12} lg={12} sm={12}>
                <Form.Group controlId="Address">
                  <Form.ControlLabel>Address :</Form.ControlLabel>
                  <Form.Control
                    name="Address"
                    rows={10}
                    accepter={textArea}
                    onChange={(e) => {
                      formData.Address = e;
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Button type="submit" onClick={handleSubmit} appearance="primary">
              Submit
            </Button>
          </Form>
          <Divider>End</Divider>
        </Panel>
      </Grid>
    </Container>
  );
};

export default RegisterNow;
