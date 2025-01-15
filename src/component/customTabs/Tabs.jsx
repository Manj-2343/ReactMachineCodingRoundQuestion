import React, { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-gray-900 underline">Tabs</h1>
      <div className="flex justify-center">
        {tabsContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            onClick={() => handleClick(index)}
            className="flex flex-col w-1/12"
          >
            <span className="mx-2 my-5 px-2 py-3 bg-red-700 text-gray-50">
              {tabItem.label}
            </span>
          </div>
        ))}
      </div>
      <div className="text-xl text-indigo-700 mx-10 px-2 my-10 text-center">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
