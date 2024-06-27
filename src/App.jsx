import React from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [allQRCodes, setAllQRCodes] = React.useState([]);
  const [allSearchTerms, setAllSearchTerms] = React.useState([]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function generateQRCode() {
    setAllSearchTerms([searchTerm, ...allSearchTerms]);
    QRCode.toDataURL(searchTerm, function (err, searchTerm) {
      setAllQRCodes([searchTerm, ...allQRCodes]);
    });
  }

  const returnFiveNewestQRCodes = allQRCodes.slice(0, 5).map((code, index) => (
    <div className="qr-code" key={index}>
      <img src={code}></img>
    </div>
  ));

  function ReturnFiveNewestInfo() {
    const firstFiveCodes = allQRCodes.slice(0, 5);
    const firstFiveSearchTerms = allSearchTerms.slice(0, 5);

    return firstFiveCodes.map((code, index) => (
      <div className="qr-code" key={index}>
        <h2>{firstFiveSearchTerms[index]}</h2>
        <img src={code} alt={`QR Code for ${firstFiveSearchTerms[index]}`} />
      </div>
    ));
  }

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
      <ReturnFiveNewestInfo />
    </>
  );
}

export default App;
