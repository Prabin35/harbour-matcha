import { getDrinks, addOns } from "@/lib/data/drinks";
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

        {addOns.length > 0 && (
          <div className="mx-auto mt-14 max-w-xl">
            {addOns.map((addOn) => (
              <div
                key={addOn.name}
                className="flex flex-col items-center gap-2 rounded-2xl border border-clay/40 px-8 py-7 text-center dark:border-clay/50"
              >
                <span className="eyebrow !text-clay-dark dark:!text-clay">
                  Add On
                </span>
                <p className="text-base font-medium text-forest dark:text-cream">
                  {addOn.name}{" "}
                  <span className="font-normal text-forest/80 dark:text-cream/75">
                    {addOn.description}
                  </span>
                </p>
                <span className="text-lg font-semibold text-clay-dark dark:text-clay">
                  {addOn.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
