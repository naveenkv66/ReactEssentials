import React from "react";
import { EXAMPLES } from "../data";
const TabContent = (props) => {
  console.log("TabContent component rendered");
  return (
    <>
      {props.selectedTab ? (
        <>
          <h3>{EXAMPLES[props.selectedTab].title}</h3>
          <p>{EXAMPLES[props.selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[props.selectedTab].code}</code>
          </pre>
        </>
      ) : (
        <>
          <p>please select a topic</p>
        </>
      )}
    </>
  );
};

export default TabContent;
