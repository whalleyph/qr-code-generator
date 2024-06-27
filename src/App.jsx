import React from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [myDataURL, setMyDataURL] = React.useState("");
  const [allQRCodes, setAllQRCodes] = React.useState([]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function generateQRCode() {
    QRCode.toDataURL(searchTerm, function (err, searchTerm) {
      setMyDataURL(searchTerm);
    });
    setAllQRCodes([myDataURL, ...allQRCodes]);
  }

  const returnPreviousQRCodes = allQRCodes.map((code) => (
    <div className="qr-code">
      <img src={code} key={code}></img>
    </div>
  ));

  const lastFour = returnPreviousQRCodes.slice(0, 5);

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
      <img src={myDataURL} key="Current Code"></img>
      {lastFour}
    </>
  );
}

export default App;
