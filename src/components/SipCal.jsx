import React from "react";
import { TabBar } from "./CurrentTab";
import Sip from "./Sip";

const SipCal = () => {
  const tabs = [
    {
      name: "Sip",
      content: <Sip />,
    },
    {
      name: "LumpSum",
      content: <div>LumpSum</div>,
    },
  ];
  return (
    <div className="max-w-full w-3xl mx-auto border border-gray-300 rounded-lg p-4 mt-20">
      <TabBar tabs={tabs} />
    </div>
  );
};

export default SipCal;
