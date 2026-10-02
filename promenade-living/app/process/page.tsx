import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/content";

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="text-center">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Our Process</p>
        <h1 className="mt-4 text-4xl text-[#201b18] sm:text-5xl lg:text-6xl">From the first conversation to the final detail.</h1>
      </section>

      <div className="mt-16 space-y-6">
        {processSteps.map((step, index) => (
          <div key={step.title} className="grid gap-5 rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5] p-6 md:grid-cols-[120px_1fr_auto] md:items-center">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-[#7a6154]">0{index + 1}</div>
            <div>
              <h2 className="text-2xl text-[#201b18]">{step.title}</h2>
              <p className="mt-2 max-w-3xl text-base leading-8 text-[#564b45]">{step.text}</p>
            </div>
            <ArrowRight className="hidden text-[#201b18] md:block" size={20} />
          </div>
        ))}
      </div>
    </main>
  );
}
