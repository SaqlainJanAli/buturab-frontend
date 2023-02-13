import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  ButtonGroup,
  Col,
  Divider,
  Grid,
  IconButton,
  Row,
} from "rsuite";

const Footer = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Grid fluid>
        <Row className="show-grid">
          <Col md={6} xs={4} xsPush={4}>
            <h5>Buturab Online Quran Academy</h5>
            {/* <Divider class="is-divider" /> */}
            <div class="is-divider small"></div>
            <p className="textAlignJustify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, expedita harum. Fugiat, molestias? Obcaecati aut, eaque
              architecto rerum omnis sequi exercitationem mollitia a quaerat
              perferendis ea sapiente porro officiis similique?
            </p>
          </Col>
          <Col md={6} xs={4} xsPush={5}>
            <h5>Contacts</h5>
            <div class="is-divider"></div>
            <FontAwesomeIcon icon={faEnvelope} /> Email : info@abc.com
            <br />
            <FontAwesomeIcon icon={faPhone} /> +92 312 34567890 <br />
          </Col>
          <Col md={6} xs={4} xsPush={4}>
            <h5>Useful Links</h5>
            <div class="is-divider small"></div>
            <p className="textAlignJustify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, expedita harum. Fugiat, molestias? Obcaecati aut, eaque
              architecto rerum omnis sequi exercitationem mollitia a quaerat
              perferendis ea sapiente porro officiis similique?
            </p>
          </Col>
        </Row>
      </Grid>
      <br />
      <br />

      {/* CopyRights section */}
      <div className="textAlignCenter">
        <FacebookShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        <p>
          All Rights Reserved &copy;
          <br /> 2020-{new Date().getFullYear()} Buturab Development Team
        </p>
        <br />
        <br />
        <br />
        <Grid>
          Disclaimer:
          <br />
          <p style={{ textAlign: "justify" }}>
            The information provided on "Buturab Academy" is for general
            informational purposes only. All information on the Site is provided
            in good faith, however we make no representation or warranty of any
            kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability or completeness of any
            information on the Site. Under no circumstance shall we have any
            liability to you for any loss or damage of any kind incurred as a
            result of the use of the site or reliance on any information
            provided on the site. Your use of the site and your reliance on any
            information on the site is solely at your own risk.
          </p>
          <p className="urdu-para-center">
            اعلان:
            <br />
            <strong>بوتراب اکیڈمی</strong> پر فراہم کردہ معلومات صرف عام
            معلوماتی مقاصد کے لیے ہیں۔ سائٹ پر تمام معلومات نیک نیتی کے ساتھ
            فراہم کی جاتی ہیں، تاہم ہم درستگی، مناسبیت کے حوالے سے کسی بھی قسم
            کی، اظہار یا مضمر، کوئی نمائندگی یا وارنٹی نہیں دیتے ہیں۔ سائٹ پر
            کسی بھی معلومات کی درستگی، وشوسنییتا، دستیابی یا مکمل ہونا۔ کسی بھی
            حالت میں سائٹ کے استعمال یا سائٹ پر فراہم کردہ کسی بھی معلومات پر
            انحصار کرنے کے نتیجے میں ہونے والے کسی بھی قسم کے نقصان یا نقصان کے
            لیے ہم آپ پر کوئی ذمہ داری نہیں رکھتے۔ سائٹ کا آپ کا استعمال اور
            سائٹ پر موجود کسی بھی معلومات پر آپ کا انحصار مکمل طور پر آپ کے اپنے
            خطرے پر ہے۔
          </p>
          <br />
        </Grid>
      </div>
    </>
  );
};

export default Footer;
