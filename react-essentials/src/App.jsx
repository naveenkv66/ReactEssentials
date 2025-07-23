import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConept from "./components/CoreConept.jsx";
import TabButton from "./components/TabButton.jsx";
import TabContent from "./components/TabContent.jsx";
import React, { useState } from "react";

function App() {
  console.log("App component rendered");
  const [selectedTab, setSelectedTab] = useState();
  function handleTabClick(data) {
    setSelectedTab(data);
  }
  console.log(selectedTab);

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTab === "components"}
              onTabClicked={() => handleTabClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onTabClicked={() => handleTabClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onTabClicked={() => handleTabClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onTabClicked={() => handleTabClick("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <TabContent selectedTab={selectedTab} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
