import { getDrinks } from "@/lib/data/drinks";
import ProductCard from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui/section-heading";

export default async function Menu() {
  const drinks = await getDrinks();

  return (
    <section id="menu" className="relative bg-cream py-28 dark:bg-forest-dark sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="The Menu"
          title="Three drinks. Made with intention."
          description="We keep our menu small on purpose — every drink whisked to order, never rushed."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {drinks.map((drink, i) => (
            <ProductCard key={drink.slug} drink={drink} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
