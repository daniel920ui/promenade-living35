import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { packages } from "@/lib/content";

export default function PackagesPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="text-center">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Interior solutions</p>
        <h1 className="mt-4 text-4xl text-[#201b18] sm:text-5xl lg:text-6xl">Interior solutions for every home.</h1>
      </section>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`rounded-[2rem] border p-7 ${pkg.featured ? "border-[#d6b27c] bg-[#201b18] text-[#f5efe8]" : "border-[#eadfc7] bg-[#fffaf5] text-[#201b18]"}`}>
            <div className="mb-5 flex items-center justify-between">
              <p className={`text-[0.64rem] uppercase tracking-[0.2em] ${pkg.featured ? "text-[#d6b27c]" : "text-[#7a6154]"}`}>{pkg.badge}</p>
            </div>
            <h2 className="text-3xl">{pkg.name}</h2>
            <p className={`mt-4 text-base leading-8 ${pkg.featured ? "text-[#e6d7ca]" : "text-[#564b45]"}`}>{pkg.description}</p>
            <ul className={`mt-6 space-y-3 text-sm ${pkg.featured ? "text-[#e8d9cb]" : "text-[#564b45]"}`}>
              {pkg.includes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-8 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#9b7a4d]">Price based on project requirements</div>
            <Link href="#consultation" className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] ${pkg.featured ? "bg-[#dcb77a] text-[#201b18]" : "border border-[#2d251d] bg-transparent text-[#201b18]"}`}>
              {pkg.cta}
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
