import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Thankyou = () => {
  const [modal, setModal] = useState(false);
  const serviceID = "service_empxgwh";
  const templateID = "template_p5ekyrs";
  const userID = "r_RiIwtDiTIr1C7fQ";
  const [templateParams, setTempleteParams] = useState({
    name: "",
    email: "",
    addr: "",
    message: "",
  });
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.message == 200) {
      setModal(true);
    }
  }, []);
  function handleSubmit(e) {
    const templateParamsDemo = {
      from_name: templateParams.name,
      from_email: templateParams.email,
      from_address: templateParams.addr,
      message: templateParams.message,
    };
    e.preventDefault();
    console.log(templateParamsDemo);
    emailjs
      .send(serviceID, templateID, templateParamsDemo, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        if (response.status == 200) {
          setModal(true);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
  return (
    <div className="Thankyou">
      <center>
        {!modal && (
          <h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            Invalid request <br /> Please fill the form
            <br />
            <br />
            <br />
            <br />
            <br />
          </h1>
        )}
      </center>
      <Dialog
        open={modal}
        style={{ textAlign: "center" }}
        className="modal"
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <br />
        <img
          src="/materials/mail.png"
          width={100}
          style={{ margin: "auto" }}
          alt=""
        />
        <DialogTitle id="alert-dialog-title">Thank You</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Submission has been received.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            We will be in touch and contact you soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
            variant="contained"
            style={{ backgroundColor: "#0E416A", width: "100%" }}
          >
            Return
          </Button>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Thankyou;
