"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MatchaWhisk from "@/components/MatchaWhisk";
import { eventSteps, eventsCustomMenuNote } from "@/lib/data/events";
import { siteConfig } from "@/lib/data/site";

const mailtoBookEvent = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Private event booking"
)}&body=${encodeURIComponent(
  "Hi Harbour Matcha,\n\nEvent date:\nLocation:\nNumber of guests:\n"
)}`;

export default function Events() {
  return (
    <section id="events" className="bg-forest py-28 text-cream sm:py-36">
      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow !text-sage"
          >
            Private Events
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl leading-[1.12] sm:text-5xl"
          >
            Book your <span className="text-sage">private event</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-base leading-relaxed text-cream/80"
          >
            We bring the whole Harbour Matcha bar to you — the whisk, the
            bowls, and a fresh cup for every guest.
          </motion.p>

          <ol className="mt-2 flex flex-col gap-6">
            {eventSteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/20 font-serif text-lg text-sage">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-tight">{step.title}</h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-cream/70">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 max-w-md rounded-2xl bg-cream/8 p-5"
          >
            <p className="font-serif text-lg text-sage">{eventsCustomMenuNote.title}</p>
            <p className="mt-1 text-sm text-cream/75">{eventsCustomMenuNote.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            <Button size="lg" onClick={() => window.location.assign(mailtoBookEvent)}>
              Email Us to Book
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <MatchaWhisk />
        </motion.div>
      </div>
    </section>
  );
}
