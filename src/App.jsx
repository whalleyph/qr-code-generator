import React from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [myDataURL, setMyDataURL] = React.useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function generateQRCode() {
    QRCode.toDataURL(searchTerm, function (err, searchTerm) {
      console.log(myDataURL);
      setMyDataURL(searchTerm);
    })
  }

  return (
    <>
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="Type something..." onChange={handleChange} />
      <br />
      <button onClick={generateQRCode}>Generate</button>
      <div className="qr-code">
        <img src={myDataURL}></img>
      </div>
    </>
  );
}

export default App;
