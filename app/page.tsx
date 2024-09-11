import UncontrolledAccordion from "./UncontrolledAccordion";
import ControlledAccordion from "./ControlledAccordion";
import NonCollapsibleAccordion from "./NonCollapsibleAccordion";

export default function Home() {
  return (
    <section className="space-y-5">
      <section className="space-y-2">
        <h2 className="font-bold text-xl text-blue-500">
          Uncontrolled Accordion
        </h2>
        <UncontrolledAccordion />
      </section>

      <section className="space-y-2">
        <h2 className="font-bold text-xl text-blue-500">
          Controlled Accordion
        </h2>
        <ControlledAccordion />
      </section>

      <section className="space-y-2">
        <h2 className="font-bold text-xl text-blue-500">
          Non Collapsible Accordion
        </h2>
        <NonCollapsibleAccordion />
      </section>
    </section>
  );
}
