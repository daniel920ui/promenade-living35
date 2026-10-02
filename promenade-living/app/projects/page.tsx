import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectFilter } from "@/components/ProjectFilter";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="mb-12 text-center">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Spaces We&apos;ve Created</p>
        <h1 className="mt-4 text-4xl text-[#201b18] sm:text-5xl lg:text-6xl">A glimpse into our design philosophy.</h1>
      </section>

      <ProjectFilter />

      <div className="mt-16 flex justify-center">
        <Link href="#consultation" className="inline-flex items-center gap-2 rounded-full border border-[#2d251d] bg-[#2d251d] px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#f8f2eb]">
          Book a Consultation
          <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}
