import React from "react";
import { Container, Grid } from "rsuite";

const Footer = () => {
  return (
    <>
      <Container
        style={{
          backgroundColor:
            "linear-gradient(90deg, rgba(202,241,246,1) 0%, rgba(1,168,255,1) 100%)",
        }}
      >
        <footer class="footer">
          <div class="footer__addr">
            <h1 class="footer__logo">Buturab Online Quran Academy</h1>

            <a class="footer__btn" href="mailto:buturab5127232@gmail.com">
              Email Us
            </a>

            <h2 class="nav__title">Contact</h2>
            <address>Islamabad, Pakistan</address>
          </div>

          <ul class="footer__nav">
            <li class="nav__item">
              <h2 class="nav__title">Media</h2>

              <ul class="nav__ul">
                <li>
                  <a href="#">Online</a>
                </li>

                <li>
                  <a href="#">Physical</a>
                </li>
              </ul>
            </li>

            <li class="nav__item">
              <h2 class="nav__title">Online</h2>

              <ul class="nav__ul nav__ul--extra">
                <li>
                  <a href="#">Skype</a>
                </li>

                <li>
                  <a href="#">Whatsapp</a>
                </li>

                <li>
                  <a href="#">Google Meet</a>
                </li>

                <li>
                  <a href="#">Zoom</a>
                </li>
              </ul>
            </li>

            <li class="nav__item">
              <h2 class="nav__title">Legal</h2>

              <ul class="nav__ul">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="legal">
            <p>
              Copyrights &copy; {new Date().getFullYear()} Buturab Online Quran
              Academy. All Rights Reserved.
            </p>

            <div class="legal__links">
              <span>Developed By @SaqlainJanAli</span>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
