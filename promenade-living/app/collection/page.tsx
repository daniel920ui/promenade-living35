import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collectionCards, collectionDetails } from "@/lib/content";

export default function CollectionPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="mb-16 rounded-[2.5rem] bg-[#f4ecdf] p-8 text-[#201b18] shadow-[0_20px_60px_rgba(41,28,17,0.06)] sm:p-10 lg:p-14">
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Collection</p>
        <h1 className="max-w-3xl text-4xl leading-[1.05] text-[#201b18] sm:text-5xl lg:text-6xl">
          Interiors & Exteriors, thoughtfully composed.
        </h1>
      </section>

      <div className="space-y-10">
        {collectionCards.map((item) => (
          <section id={item.id} key={item.id} className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-[#eadfc7] bg-[#fffaf5] lg:grid-cols-2">
            <div className="relative min-h-[380px]">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">{item.id}</p>
              <h2 className="text-3xl text-[#201b18] sm:text-4xl">{item.title}</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#564b45]">
                {collectionDetails[item.id as keyof typeof collectionDetails]?.text ?? item.description}
              </p>
              <Link href={item.href} className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#201b18]">
                {item.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
