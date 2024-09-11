"use client";

import { ElementType, PropsWithChildren } from "react";
import { useAccordion } from "./context";

interface AccordionPanelProps extends PropsWithChildren {
  as?: ElementType;
}

export default function AccordionPanel({
  as: Component = "div",
  children,
}: AccordionPanelProps) {
  const { expanded, panelId, headerId } = useAccordion();

  if (expanded)
    return (
      <Component id={panelId} aria-labelledby={headerId}>
        {children}
      </Component>
    );

  return null;
}
