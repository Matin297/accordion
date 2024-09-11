"use client";

import { PropsWithChildren, useState, useId } from "react";
import { AccordionContextProvider } from "./context";

interface AccordionProps extends PropsWithChildren {
  initial?: boolean;
  panelId?: string;
  headerId?: string;
}

export default function AccordionRoot({
  children,
  initial = false,
  panelId: panelIdProp,
  headerId: headerIdProp,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(initial);
  const panelId = useId();
  const headerId = useId();

  return (
    <div>
      <AccordionContextProvider
        value={{
          expanded,
          setExpanded,
          panelId: panelIdProp ?? panelId,
          headerId: headerIdProp ?? headerId,
        }}
      >
        {children}
      </AccordionContextProvider>
    </div>
  );
}
