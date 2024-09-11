"use client";

import { useState } from "react";

import {
  AccordionRoot,
  AccordionHeader,
  AccordionPanel,
} from "@/components/accordion";

export default function ControlledAccordion() {
  const [state, setState] = useState(false);

  return (
    <AccordionRoot value={state} onChange={setState}>
      <AccordionHeader as="h3">Blanditiis</AccordionHeader>
      <AccordionPanel>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque
        voluptate minus ipsum porro blanditiis minima, provident perferendis
        vitae error accusantium rem quidem atque, distinctio, repellat
        excepturi. Aspernatur, provident tempore.
      </AccordionPanel>
    </AccordionRoot>
  );
}
