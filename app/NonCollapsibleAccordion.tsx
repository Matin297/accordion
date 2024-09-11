"use client";

import { useState } from "react";

import {
  AccordionRoot,
  AccordionHeader,
  AccordionPanel,
} from "@/components/accordion";

const ACCORDIONS = [
  {
    id: 1,
    header: "Blanditiis1",
    panel:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque voluptate minus ipsum porro blanditiis minima, provident perferendis vitae error accusantium rem quidem atque, distinctio, repellat excepturi. Aspernatur, provident tempore.",
  },
  {
    id: 2,
    header: "Blanditiis2",
    panel:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque voluptate minus ipsum porro blanditiis minima, provident perferendis vitae error accusantium rem quidem atque, distinctio, repellat excepturi. Aspernatur, provident tempore.",
  },
  {
    id: 3,
    header: "Blanditiis3",
    panel:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque voluptate minus ipsum porro blanditiis minima, provident perferendis vitae error accusantium rem quidem atque, distinctio, repellat excepturi. Aspernatur, provident tempore.",
  },
];

export default function ControlledAccordion() {
  const [open, setOpen] = useState(1);

  return ACCORDIONS.map(({ id, header, panel }) => (
    <AccordionRoot key={id} value={open === id} onChange={() => setOpen(id)}>
      <AccordionHeader as="h3">{header}</AccordionHeader>
      <AccordionPanel>{panel}</AccordionPanel>
    </AccordionRoot>
  ));
}
