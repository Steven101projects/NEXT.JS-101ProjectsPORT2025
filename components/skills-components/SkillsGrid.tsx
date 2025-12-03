import services from "@/app/data/services";
import ServicesGridClient from "@/components/skills-components/SkillsGridClient";

export default function ServicesGridComponent() {
  return (
    <section className="w-full py-8">
      <ServicesGridClient services={services} />
    </section>
  );
}
