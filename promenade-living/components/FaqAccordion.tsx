"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/lib/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-[1.5rem] border border-[#e7dcc8] bg-[#fffdf9]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="text-base font-medium text-[#201b18]">{item.question}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8c4a4] text-[#201b18]">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-[#5f514a]">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
