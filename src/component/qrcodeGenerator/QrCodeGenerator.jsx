import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleClickQrCodeGenerate = () => {
    setQrCode(input);
  };
  return (
    <div>
      <h1 className="text-red-500 text-xl mx-2 my-3">QrCodeGenerator</h1>
      <input
        type="text"
        name="qr-code"
        placeholder="Enter  your value here"
        onChange={(e) => setInput(e.target.value)}
        className="mx-3 my-5 px-3 py-2 border outline-none"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleClickQrCodeGenerate}
        className="my-2 px-3 py-2 bg-gray-500 text-gray-50"
      >
        Generator
      </button>
      <div className="mx-3 my-3">
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          className="bg-gray-50"
        />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
