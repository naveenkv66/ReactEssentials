import { useState } from "react";
import React from "react";
import TabButton from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";
import Section from "./Section.jsx";

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState();
  function handleTabClick(data) {
    setSelectedTab(data);
  }
  return (
    <Section id="examples" title={"Examples"}>
      <menu>
        <TabButton
          isSelected={selectedTab === "components"}
          onClick={() => handleTabClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTab === "jsx"}
          onClick={() => handleTabClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTab === "props"}
          onClick={() => handleTabClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTab === "state"}
          onClick={() => handleTabClick("state")}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        <TabContent selectedTab={selectedTab} />
      </div>
    </Section>
  );
};

export default Examples;
