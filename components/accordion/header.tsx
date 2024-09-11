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
  const { expanded, setExpanded, panelId, headerId } = useAccordion();

  return (
    <Heading>
      <button
        id={headerId}
        aria-controls={panelId}
        aria-expanded={expanded}
        onClick={() => setExpanded((e) => !e)}
      >
        {children}
      </button>
    </Heading>
  );
}
