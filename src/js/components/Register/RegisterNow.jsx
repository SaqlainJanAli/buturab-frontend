import React from "react";
import { Form, Grid, Panel } from "rsuite";

export default function RegisterNow() {
  return (
    <>
      <Grid>
        <br />
        <br />
        <h4>Register Now</h4>
        <p>
          Please feel free to fill out the following form to take a free trial
          of Online Quran Classes. We will inshaAllah contact you soon.
        </p>
        <br />
        <div>
          <Panel header="Regitration Form" shaded bordered>
            <Form>
              <Form.Group controlId="firstName">
                <Form.ControlLabel>First Name : </Form.ControlLabel>
                <Form.Control name="firstName" type="textbox"></Form.Control>
              </Form.Group>
            </Form>
          </Panel>
        </div>
      </Grid>
    </>
  );
}
