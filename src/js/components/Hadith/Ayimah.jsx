import React from "react";
import { useState } from "react";
import { Button, Grid, Modal, Panel, PanelGroup } from "rsuite";

const Ayimah = () => {
  //Ayimah Names
  const AayimmahNames = [
    "Hazrat Muhammad (pbuh)",
    "Hazrat Fatima Zahra s.a",
    "Hazrat Imam Ali a.s",
    "Hazrat Imam Hassan a.s",
    "Hazrat Imam Hussain a.s",
    "Hazrat Imam Ali Zain-ul-abedeen a.s",
    "Hazrat Imam Muhammad Baqir a.s",
    "Hazrat Imam Jaffar Sadiq a.s",
    "Hazrat Imam Musa Kazim a.s",
    "Hazrat Imam Ali Raza a.s",
    "Hazrat Imam Muhammad Taqi a.s",
    "Hazrat Imam Ali Naqi a.s",
    "Hazrat Imam Hassan-ul-askari a.s",
    "Hazrat Imam Mehhdi a.j.t.f",
  ];

  // --Modal Settings
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleModalOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const ImamBaqirManazrah = (
    <Modal size={size} open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title className="urduFontHeader">
          امام محمد باقر ع کا علمی مناظرہ
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Panel bordered header="Imam Muhammad Baqir">
          <h5 className="urduFontHeader">
            امام محمد باقر علیہ السلام کے علمی مناظرات
          </h5>
          <br />
          <br />
          <br />
          <p className="urduFontParagraph">
            امام محمد باقر علیہ السلام نے اسلامی تعلیمات کی ترویج اور شیعی معارف
            <br />
            <br />
            کو وسعت دینے کیلئے دوسرے توحیدی ادیان سے علمی مناظرات انجام دئیے ہیں
            ۔ حضرت آیة اللہ العظمی مکارم شیرازی نے امام علیہ السلام کے مناظرات
            کی تشریح کرتے ہوئے شام میں عیسائی اسقف سے مناظرہ کو بہت اہم شمار کیا
            اور فرمایا : جیسا کہ تاریخ میں نقل ہوا ہے کہ جب امام کو شام کے سفر
            پر مجبور کیا گیا اور آپ شام پہنچ گئے اور پھر شہر دمش سے واپس روانہ
            ہونے لگے تو لوگوں کے افکار کو بیدار کرنے اور اپنے علم کو آشکار کرنے
            کا بہت اچھا موقع فراہم ہوا جس کی وجہ سے شام کے لوکوں کے افکار تبدیل
            ہوگئے (٥)
            <br />
            <br />
            <br />۔ معظم لہ کے کلام میں عیسائی اسقف سے امام محمد باقر علیہ
            السلام کے مناظرہ کی شرح و تفسیر معظم لہ فرماتے ہیں : واقعہ یہ تھا کہ
            ہشام کے پاس ا مام محمد باقر علیہ السلام کی شان میں گستاخی کرنے کا
            کوئی ثبوت نہیں تھا ، لہذا وہ امام کے مدینہ واپس جانے پر راضی ہوگیا
            جس وہ امام اپنے فرزند کے ساتھ قصر خلافت سے خارج ہوئے تو ناگاہ راستہ
            میں ایک مقام پرمجمع کثیرنظرآیا،آپ نے تفحص حال کیاتومعلوم ہواکہ نصاری
            کاایک راہب ہے جوسال میں صرف ایک باراپنے معبدسے نکلتاہے آج اس کے
            نکلنے کادن ہے حضرت امام محمدباقرعلیہ السلام اس مجمع میں عوام کے ساتھ
            جاکربیٹھ گئے ،راہب جوانتہائی ضعیف تھا، مقررہ وقت پربرامدہوا،اوراس نے
            چاروں طرف نظردوڑانے کے بعدامام :علیہ السلام کی طرف مخاطب ہوکربولا
            <br />
            <br />
            <ol>
              <li style={{ listStylePosition: "unset" }}>
                ١۔ کیا آپ ہم میں سے ہیں، فرمایا: میں امت محمدیہ سے ہوں۔
              </li>{" "}
              <br />
              <br />
              <li style={{ listStylePosition: "unset" }}>
                ٢۔آپ علماء سے ہیں یاجہلاء میں سے ہیں ، فرمایا : میں جاہل نہیں
                ہوں۔
              </li>{" "}
              <br />
              <br />
              <li style={{ listStylePosition: "unset" }}>
                ٣۔ آپ مجھ سے کچھ دریافت کرنے کے لیے آئے ہیں؟ فرمایا : نہیں۔
              </li>{" "}
              <br />
              <br />
              <li style={{ listStylePosition: "unset" }}>
                ٤۔ جب کہ آپ عالموں میں سے ہیں کیا؟میں آپ سے کچھ پوچھ سکتاہوں،
                فرمایا: ضرورپوچھیے ۔
              </li>{" "}
              <br />
              <br />
            </ol>
            یہ سن کر راہب نے سوال کیا:
            <ol>
              <li style={{ listStylePosition: "unset" }}>
                ١۔ شب وروزمیں وہ کونساوقت ہے ،جس کاشمارنہ دن میں ہے اورنہ رات
                میں ، فرمایا : وہ سورج کے طلوع سے پہلے کاوقت ہے جس کاشماردن
                اوررات دونوں میں نہیں ،وہ وقت جنت کے اوقات میںسے ہے اورایسامبترک
                ہے کہ اس میں بیماروں کوہوش آجاتاہے ، دردکوسکون ہوتاہے جورات
                بھرنہ سوسکے اسے نیندآتی ہے یہ وقت آخرت کی طرف رغبت رکھنے والوں
                کے لیے خاص الخاص ہے ۔
              </li>{" "}
              <br />
              <br />
              <li style={{ listStylePosition: "unset" }}>
                ٢۔ آپ کاعقیدہ ہے کہ جنت میں پیشاب وپاخانہ کی ضرروت نہ ہوگی ؟کیا
                دنیامیں اس کی مثال ہے ؟ فرمایابطن مادرمیں جوبچے پرورش پاتے ہیں
                ان کافضلہ خارج نہیں ہوتا۔
              </li>{" "}
              <br />
              <br />
              <li style={{ listStylePosition: "unset" }}>
                ٣۔ مسلمانوں کاعقیدہ ہے کہ کھانے سے بہشت کامیوہ کم نہ ہوگااس کی
                یہاں کوئی مثال ہے، فرمایاہاں ایک چراغ سے لاکھوں چراغ جلائے جاتے
                ہیں تب بھی پہلے چراغ کی روشنی میں کمی نہیں ہوتی۔
              </li>{" "}
              <br />
              <br />
              <li style={{ listStylePosition: "unset" }}>
                ٤۔ وہ کون سے دوبھائی ہیں جوایک ساتھ پیداہوئے اورایک ساتھ مرے
                لیکن ایک کی عمرپچاس سال کی ہوئی اوردوسرے کی ڈیڑھ سوسال کی،
                فرمایا''عزیز اورعزیرپیغمبرہیں یہ دونوں دنیامیں ایک ہی
                روزپیداہوئے اورایک ہی روزمرے پیدائش کے بعدتیس برس تک ساتھ رہے
                پھرخدانے عزیرنبی کومارڈالا(جس کاذکرقرآن مجیدمیں موجودہے)
                اورسوبرس کے بعدپھرزندہ فرمایا اس کے بعدوہ اپنے بھائی کے ساتھ
                اورزندہ رہے اورپھرایک ہی روزدونوں نے انتقال کیا۔
              </li>
            </ol>{" "}
            <br />
            <br />
            <strong>
              یہ سن کرراہب اپنے ماننے والوں کی طرف متوجہ ہوکرکہنے لگاکہ جب تک یہ
              شخص شام کے حدودمیں موجودہے میں کسی کے سوال کاجواب نہ دوں گاسب کو
              چاہئے کہ اسی عالم زمانہ سے سوال کرے اس کے بعدوہ مسلمان ہوگیا۔
            </strong>{" "}
            <br />
            <br />
            یہ بات بہت تیزی سے دمشق میں پھیل گئی اور شام کے لوگ بہت زیادہ خوش
            ہوگئے ، ہشام کو امام باقر علیہ السلام کی افتخار آمیز کامیابی سے خوش
            ہونا چاہئے تھا لیکن وہ پہلے سے بھی زیادہ امام سے ڈرنے لگا اور اس نے
            ظاہر سازی کو برقرار رکھنے کیلئے بہت سے ہدایا اور تحائف بھیجے ، ساتھ
            ہی ساتھ حکم دیا کہ آج ہی دمشق سے چلے جائیں
          </p>
        </Panel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );

  //open modal when event key is equals imam baqir
  const handleSelect = (eventKey) => {
    if (eventKey === "Hazrat Imam Muhammad Baqir a.s") handleModalOpen("md");
  };

  //Render Section
  return (
    <>
      <h4
        style={{ margin: 20, marginBottom: 30, fontFamily: "Times New Roman" }}
      >
        Aayimah
      </h4>
      {/* GRID STARTS */}
      <Grid>
        {/* Panel for names List */}
        <Panel
          header="Ayimah Names"
          id="panel1"
          bordered
          collapsible
          style={{ backgroundColor: "#B5EAEA" }}
        >
          <ol>
            {AayimmahNames.map((item) => (
              <li style={{ listStylePosition: "unset" }}>{item}</li>
            ))}
          </ol>
        </Panel>

        {/* Panel for names List Accordion */}
        <PanelGroup
          accordion
          bordered
          onSelect={handleSelect}
          style={{ backgroundColor: "#B5EAEA" }}
        >
          {AayimmahNames.map((item) => (
            <Panel
              id={item}
              header={item}
              eventKey={item}
              bordered
              style={{ listStylePosition: "unset" }}
            >
              {item}
              {ImamBaqirManazrah}
            </Panel>
          ))}
        </PanelGroup>
      </Grid>
      {/* END GRID */}
    </>
  );
};

export default Ayimah;
