"use client";

import { createContext, ReactNode, Dispatch, SetStateAction, use } from "react";

export type AccordionContextType = {
  panelId: string;
  headerId: string;
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
};

export const AccordionContext = createContext<AccordionContextType | null>(
  null
);

export const useAccordion = () => {
  const context = use(AccordionContext);

  if (!context) {
    throw new Error("Missing AccordionContextProvider!");
  }

  return context;
};

export function AccordionContextProvider({
  value,
  children,
}: {
  children: ReactNode;
  value: AccordionContextType;
}) {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}
