"use client";

import { PropsWithChildren, ElementType } from "react";
import { useAccordion } from "./context";

interface AccordionHeaderProps extends PropsWithChildren {
  as?: ElementType;
}

export default function AccordionHeader({
  as: Heading = "h2",
  children,
}: AccordionHeaderProps) {
  const { expanded, onExpandedChange, panelId, headerId } = useAccordion();

  return (
    <Heading className="font-semibold">
      <button
        id={headerId}
        aria-controls={panelId}
        aria-expanded={expanded}
        onClick={onExpandedChange}
      >
        {children}
      </button>
    </Heading>
  );
}
