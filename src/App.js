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

  const handleButton = () => {
    console.log("change color");
    setChangeColor(!changecolor);
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
                  yello button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>
              </div>
            </Container>
          </div>
        </>
      )}
      {step === 1 && 
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
                  yello button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>
              </div>
            </Container>
          </div>
      </>
      }
      {step === 2 && 
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
                  yello button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>
              </div>
            </Container>
          </div>
      </>
      }
      {step === 3 && 
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
                  yello button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>
              </div>
            </Container>
          </div>
      </>}
      {step === 4 && 
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
                  yello button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>
              </div>
            </Container>
          </div>
      </>}
      {step === 5 && 
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
                  yello button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>
              </div>
            </Container>
          </div>
      </>}
      {step === 6 && 
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
                  yello button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "17%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
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
                  Primary button
                </Button>

                <Button
                  variant="light"
                  style={{ width: "20%", height: "50px", borderColor: "black" }}
                >
                  <AddIcon />
                  Primary button
                </Button>
              </div>
            </Container>
          </div>
      </>}

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
          <div style={{ display: "flex", marginTop: "-2.5%", marginLeft: "68%" }}>
            <Button variant="primary" style={{ width: "40%" }} disabled>
              Next
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex", marginTop: "-2.5%", marginLeft: "68%" }}>
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
