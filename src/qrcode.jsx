import React from "react";
import { useNavigate } from "react-router-dom";
import qrcode from "./assets/qr-code.png";

const Qrcode = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate("/terms");
  };

  return (
    <>
    <div className="qr-mid-align">
        <img src={qrcode} alt="qrcodebabo" className="qr-code-image" />
        <div className="scan-button-mid" type="button" onClick={handleAgree}>Scan Code!</div>
    </div>
    </>
  );
};

export default Qrcode;