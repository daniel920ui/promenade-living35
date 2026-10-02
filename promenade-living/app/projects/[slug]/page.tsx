import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projectCards } from "@/lib/content";

export function generateStaticParams() {
  return projectCards.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectCards.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1400px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#eadfc7] bg-[#fffaf5]">
        <div className="relative h-[420px] sm:h-[520px]">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1714]/70 via-[#1d1714]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="max-w-3xl text-white">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#f1e7d6]">{project.location}</p>
              <h1 className="mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5] p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
        <div>
          <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6154]">Location</p>
          <p className="mt-3 text-2xl text-[#201b18]">{project.location}</p>
        </div>
        <div>
          <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6154]">Property Type</p>
          <p className="mt-3 text-2xl text-[#201b18]">{project.propertyType}</p>
        </div>
        <div>
          <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6154]">Area</p>
          <p className="mt-3 text-2xl text-[#201b18]">{project.area}</p>
        </div>
        <div>
          <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#7a6154]">Design Style</p>
          <p className="mt-3 text-2xl text-[#201b18]">{project.style}</p>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#7a6154]">The Design Story</p>
          <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl">A space designed around comfort, clarity and character.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#564b45]">{project.description}</p>
        </div>
        <div className="rounded-[2rem] bg-[#f4ecdf] p-7">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#7a6154]">Material Palette</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[#2d251d]">
            {project.materials.map((material) => (
              <li key={material} className="border-b border-[#d9c7ab] pb-2">{material}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 space-y-6">
        {project.gallery.map((image, index) => (
          <div key={image} className="overflow-hidden rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5]">
            <div className="relative h-[300px] sm:h-[420px]">
              <Image src={image} alt={`${project.title} ${index + 1}`} fill className="object-cover" />
            </div>
            <div className="flex items-center justify-between gap-4 p-5 text-[#201b18] sm:p-6">
              <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[#7a6154]">
                {index === 0 ? "Living Room" : index === 1 ? "Kitchen" : "Bedroom"}
              </span>
              <span className="text-sm">{project.style}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-[2.5rem] bg-[#201b18] p-8 text-[#f7efe6] sm:p-12">
        <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#d6b27c]">Love this look?</p>
        <h3 className="mt-4 max-w-xl text-3xl sm:text-5xl">Let&apos;s create a home that feels unmistakably yours.</h3>
        <Link href="#consultation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#dcb77a] px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#1d1a17]">
          Book A Consultation
          <ArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
