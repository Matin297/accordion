"use client";

import { PropsWithChildren, useState, useId } from "react";
import { AccordionContextProvider } from "./context";

interface AccordionProps extends PropsWithChildren {
  value?: boolean;
  panelId?: string;
  headerId?: string;
  initial?: boolean;
  onChange?: (v: boolean) => void;
}

export default function AccordionRoot({
  value,
  children,
  initial = false,
  panelId: panelIdProp,
  headerId: headerIdProp,
  onChange: onChangeProp,
}: AccordionProps) {
  const panelId = useId();
  const headerId = useId();

  const [state, setState] = useState(initial);

  const expanded = value ?? state;

  function onChange() {
    if (value == undefined) {
      setState((s) => !s);
    }

    onChangeProp?.(!expanded);
  }

  return (
    <div className="space-y-1">
      <AccordionContextProvider
        value={{
          expanded,
          onExpandedChange: onChange,
          panelId: panelIdProp ?? panelId,
          headerId: headerIdProp ?? headerId,
        }}
      >
        {children}
      </AccordionContextProvider>
    </div>
  );
}
