'use client';

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { PRICING_PLANS, FAQS } from "../constants";

export default function Home() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-black mb-6">SHRED – The 30‑Minute Heat Switch</h1>

      <Image
        src="https://picsum.photos/seed/shred/800/800"
        alt="SHRED Supplement Bottle"
        width={800}
        height={800}
        priority
        className="rounded-xl mb-10"
      />

      <section className="grid md:grid-cols-3 gap-6">
        {PRICING_PLANS.map(plan => (
          <div key={plan.id} className="border rounded-xl p-6">
            <h2 className="font-bold text-xl">{plan.name}</h2>
            <p className="text-3xl font-black mt-2">{plan.price}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 max-w-2xl">
        {FAQS.map(faq => (
          <div key={faq.id} className="border rounded-lg mb-4">
            <button
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              className="w-full p-4 flex justify-between font-bold"
            >
              {faq.question}
              {open === faq.id ? <ChevronUp /> : <ChevronDown />}
            </button>
            {open === faq.id && (
              <p className="p-4 pt-0 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
