import React, { useRef, useState } from "react";

const Otp = () => {
  const [otps, setOtps] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const handleChange = (e, index) => {
    const newOtps = [...otps];
    newOtps[index] = e.target.value;
    setOtps(newOtps);
    if (index < 3) inputs.current[index + 1].focus();
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otps[index] === "" && index > 0)
      inputs.current[index - 1].focus();
  };
  return (
    <div className="mx-auto w-3xl items-center space-x-4 mt-20">
      <h1>OTP</h1>
      {otps.map((otp, index) => (
        <input
          type="text"
          maxLength={1}
          value={otp}
          onChange={(e) => handleChange(e, index)}
          ref={(input) => (inputs.current[index] = input)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`border border-gray-300 w-12 h-12 text-center text-2xl ${
            otps[index]
              ? "focus:outline-none focus:border border-green-600"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Otp;
