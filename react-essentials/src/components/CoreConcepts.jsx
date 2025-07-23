import React from "react";
import { CORE_CONCEPTS } from "../data.js";
import CoreConept from "./CoreConept.jsx";
import Section from "./Section.jsx";
const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title={"Core Concepts"}>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
