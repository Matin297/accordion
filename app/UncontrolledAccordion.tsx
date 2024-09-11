import {
  AccordionRoot,
  AccordionHeader,
  AccordionPanel,
} from "@/components/accordion";

export default function UncontrolledAccordion() {
  return (
    <AccordionRoot>
      <AccordionHeader as="h3">Accusantium</AccordionHeader>
      <AccordionPanel>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque
        voluptate minus ipsum porro blanditiis minima, provident perferendis
        vitae error accusantium rem quidem atque, distinctio, repellat
        excepturi. Aspernatur, provident tempore.
      </AccordionPanel>
    </AccordionRoot>
  );
}
