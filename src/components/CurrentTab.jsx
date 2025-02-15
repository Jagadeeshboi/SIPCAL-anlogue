import { useState, } from "react";

export const TabBar = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(tabs?.[0]?.name);

  return (
    <>
      <div className="w-full max-w-full bg-white rounded-md mx-auto ">
        <div className="w-full max-w-full flex rounded-t-md flex-row justify-left gap-2 md:gap-10 overflow-auto border-b border-gray-200">
          {tabs?.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex-shrink-0  text-left md:w-auto px-4 py-2 font-medium transition ${activeTab === tab.name
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600"
                }`}
            >
              <p>{tab.name}</p>
            </button>
          ))}
        </div>
        <div className="mt-0 h-auto overflow-y-hidden p-1 md:p-4 text-center rounded-b-md">
          {tabs?.find((tab) => tab.name === activeTab)?.content}
        </div>
      </div>
    </>
  );
};
