import { useState } from "react";
import SipCal from "./components/SipCal";
import Otp from "./components/Otp";

function App() {
  return (
    <>
      <SipCal /> {/*SIP  */}
      <Otp /> {/*OTP SCREEN */}
    </>
  );
}

export default App;
