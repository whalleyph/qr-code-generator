import React from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [allQRCodes, setAllQRCodes] = React.useState([]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function generateQRCode() {
    QRCode.toDataURL(searchTerm, function (err, searchTerm) {
      setAllQRCodes([searchTerm, ...allQRCodes]);
    });
  }

  const returnFiveNewestQRCodes = allQRCodes.slice(0, 5).map((code, index) => (
    <div className="qr-code" key={index}>
      <img src={code}></img>
    </div>
  ));

  return (
    <>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
      <br />
      <button onClick={generateQRCode}>Generate</button>
      <br />
      {returnFiveNewestQRCodes}
    </>
  );
}

export default App;
