import "./App.css";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";
import Header from "./js/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./js/components/Footer";
import Home from "./js/components/Home";
import OurServices from "./js/components/OurServices";
import FiqhiMasail from "./js/components/services/FiqhiMasail";
import QuranRecitation from "./js/components/services/QuranRecitation";
import QuranTafseer from "./js/components/services/QuranTafseer";
import { Container } from "rsuite";
import RegisterNow from "./js/components/Register/RegisterNow";
import arabicPatternBackground from "./resources/images/arabicPatternBackground.png";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header Section Start */}
        <Container
          style={{
            // background: "linear-gradient(90deg, skyblue 0%, lightcyan 100%)",
            backgroundImage: { arabicPatternBackground },
          }}
        >
          <Header />
        </Container>
        {/* Header Section Ends */}

        {/* Body Section Starts  */}
        <Container
          style={{
            minHeight: "700px",
            margin: "10px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/RegisterNow" element={<RegisterNow />} /> */}
            {/* <Route path="/AcadmeyPortal" element={<AcademyPortal />} /> */}
            {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
            <Route path="/OurServices" element={<OurServices />} />
            <Route path="/FiqhiMasail" element={<FiqhiMasail />} />
            <Route path="/QuranRecitation" element={<QuranRecitation />} />
            <Route path="/QuranTafseer" element={<QuranTafseer />} />
            <Route path="/RegisterNow" element={<RegisterNow />} />
          </Routes>
        </Container>
        {/* Body Section Ends */}

        {/* Footer Section Starts */}
        <Container
          style={{
            background:
              "linear-gradient(90deg, rgba(213,225,244,1) 0%, rgba(133,210,221,1) 100%)",
          }}
        >
          <Footer />
        </Container>
        {/* Footer Section End */}
      </BrowserRouter>
    </>
  );
}

export default App;
