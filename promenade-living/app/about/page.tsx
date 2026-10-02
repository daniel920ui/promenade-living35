import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Promenade Living</p>
          <h1 className="mt-4 text-4xl text-[#201b18] sm:text-5xl lg:text-6xl">Beautiful spaces, crafted for the way you live.</h1>
        </div>
        <div className="rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5] p-8 text-base leading-8 text-[#564b45]">
          We create thoughtful interiors and exteriors that blend contemporary comfort with timeless Indian character. From custom wardrobes and kitchens to complete outdoor spaces, every detail is shaped around how you live.
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          "Premium design studio approach",
          "Custom detailing across every room",
          "Practical luxury, designed for real life",
        ].map((item) => (
          <div key={item} className="rounded-[2rem] border border-[#eadfc7] bg-[#f4ecdf] p-7 text-xl text-[#201b18]">
            {item}
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-[2.5rem] bg-[#201b18] p-8 text-[#f7efe6] sm:p-12">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#d6b27c]">Designed for life</p>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-5xl">We believe good design should make everyday living easier and more meaningful.</h2>
        <Link href="#consultation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#dcb77a] px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#1d1a17]">
          Start Your Project
          <ArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
