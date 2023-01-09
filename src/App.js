import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

function App() {
  const [step, setStep] = useState(0);
  const [changecolor, setChangeColor] = useState(false);
  const [changecolor1, setChangeColor1] = useState(false);

  const handleButton = () => {
    console.log("change color");
    setChangeColor(!changecolor);
  };
  const handleButton1 = () => {
    setChangeColor1(!changecolor1);
  };
  console.log(step);
  const previoushandle = () => {
    setStep(step - 1);
  };
  const nexthandle = () => {
    setStep(step + 1);
  };
  return (
    <div className="App">
      <h1>Book an Appointment</h1>
      <br />
      <Container>
        <div className="stephead">
          <div className={step === 0 ? "step2" : "step1"}>
            <CheckCircleOutlineIcon /> <Col>select vaccine</Col>
          </div>
          <div className={`step1 ${step === 1 && "step2"}`}>
            <CheckCircleOutlineIcon /> <Col>search pharmacy</Col>
          </div>
          <div className={`step1 ${step === 2 && "step2"}`}>
            <CheckCircleOutlineIcon /> <Col>select time slot</Col>
          </div>
          <div className={`step1 ${step === 3 && "step2"}`}>
            <CheckCircleOutlineIcon /> <Col>enter your details</Col>
          </div>
          <div className={`step1 ${step === 4 && "step2"}`}>
            <CheckCircleOutlineIcon /> <Col>pre-assessment</Col>
          </div>
          <div className={`step1 ${step === 5 && "step2"}`}>
            <CheckCircleOutlineIcon /> <Col>Questionnaire</Col>
          </div>
          <div className={`step1 ${step === 6 && "step2"}`}>
            <CheckCircleOutlineIcon /> <Col>confirmation</Col>
          </div>
        </div>
      </Container>

      {step === 0 && (
        <>
          <div>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="custom"
                  onClick={handleButton}
                  style={
                    changecolor === true
                      ? {
                          backgroundColor: "orange",
                          height: "50px",
                          width: "17%",
                        }
                      : { borderColor: "black", height: "50px", width: "17%" }
                  }
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                  Daptacel
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Tenivac
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  generic
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Adacel
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Quadracel
                </Button>

                <Button
                  variant="custom"
                  onClick={handleButton1}
                  style={
                    changecolor1 === true
                      ? {
                          backgroundColor: "orange",
                          height: "50px",
                          width: "17%",
                        }
                      : { borderColor: "black", height: "50px", width: "17%" }
                  }
                >
                  {changecolor1 === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                  Kinrix
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Pediarix
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Vaxelis
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Boostrix
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Vaqta
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Havrix
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginLeft: "13.5%",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  DTaP-HepB-IPV
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  DTaP-IPV-Hib-HepB
                </Button>
              </div>
            </Container>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <div>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                  Apollo Pharmacy
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Westminster
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Cosme Mati
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Global Healthline
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Guardian
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Koel Colours
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  MedPlus Health
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  NuFuture Digital 
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Sabari Distribution
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Trust Chemists 
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Vestige Marketing
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Ajinkya Big Bazar
                </Button>
              </div>
            </Container>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                  6.00-9.00
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  9.00-12.00
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  12.00-3.00
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  3.00-6.00
                </Button>
              </div>
            </Container>

            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginLeft: "13.5%",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  6.00-9.00
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  9.00-12.00
                </Button>
              </div>
            </Container>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                 Name
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                 surname
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  FatherName
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                    occupation
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  aadhar no
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                 pan no
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  location
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  address
                </Button>
              </div>
            </Container>
           
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <div>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                I Know Knew That
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                 answer  question
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Collect responses
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Tally  Responses
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Thumbs Up
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Thumbs Down
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Skills Conference
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Wonder Box
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Dry-Erase Boards
                </Button>

              </div>
            </Container>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <div>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "35%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                  How healthy do you consider yourself 
                </Button>

                

                <Button
                  variant="light"
                  style={{ width: "35%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  How often do you get a health checkup
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "35%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                 What do you say about your  health
                </Button>

                

                <Button
                  variant="light"
                  style={{ width: "35%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Do you have any chronic diseases
                </Button>
              </div>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "35%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                  Do you have any hereditary diseases
                </Button>

                

                <Button
                  variant="light"
                  style={{ width: "35%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Are you habitual to drugs and alcoho
                </Button>
              </div>
            </Container>
          </div>
        </>
      )}

      {step === 6 && (
        <>
          <div>
            <Container>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  {changecolor === true ? (
                    <>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <AddIcon />
                    </>
                  )}
                 Confirm
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                 cancel
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  ready to admit
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  ready to go home
                </Button>
              </div>
            </Container>
          
          </div>
        </>
      )}

      <hr className="hr" />
      <div>
        {step === 0 ? (
          <div style={{ display: "flex", marginLeft: "19%" }}>
            <Button variant="warning" style={{ width: "15%" }} disabled>
              previous
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex", marginLeft: "19%" }}>
            <Button
              variant="warning"
              style={{ width: "15%" }}
              onClick={previoushandle}
            >
              previous
            </Button>
          </div>
        )}

        {step === 6 ? (
          <div
            style={{ display: "flex", marginTop: "-2.5%", marginLeft: "68%" }}
          >
            <Button variant="primary" style={{ width: "40%" }} disabled>
              Next
            </Button>
          </div>
        ) : (
          <div
            style={{ display: "flex", marginTop: "-2.5%", marginLeft: "68%" }}
          >
            <Button
              variant="primary"
              style={{ width: "40%" }}
              onClick={nexthandle}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
