import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section aria-labelledby="partners-title" className="bg-muted">
      <h2 id="partners-title" className="sr-only">
        Our partners
      </h2>
      <ul className="mx-auto flex max-w-300 flex-wrap items-center justify-center gap-x-10 gap-y-8 px-4 py-12 text-muted-foreground sm:px-6 lg:grid lg:grid-cols-5 lg:justify-items-center lg:gap-0 lg:px-0 lg:py-20">
        {partners.map(({ name, logo: Logo }) => (
          <li key={name}>
            <Logo role="img" aria-label={name} className="h-8 w-auto lg:h-10.25" />
          </li>
        ))}
      </ul>
    </section>
  );
}
