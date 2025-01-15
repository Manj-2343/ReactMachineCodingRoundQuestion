import React from "react";
import Tabs from "./Tabs";

const RandomComponent = () => {
  return <h1>Some Random Content</h1>;
};

const TabsParent = () => {
  const tabs = [
    { label: "Tab 1", content: <div>This is content for tab1</div> },
    { label: "Tab 2", content: <div>This is content for tab2</div> },
    { label: "Tab 3", content: <div>This is content for tab3</div> },
    { label: "Tab 4", content: <RandomComponent /> },
  ];
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
};

export default TabsParent;
