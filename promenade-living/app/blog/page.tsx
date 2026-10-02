import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="mb-12 text-center">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Design Journal</p>
        <h1 className="mt-4 text-4xl text-[#201b18] sm:text-5xl lg:text-6xl">Ideas, inspiration and practical guidance.</h1>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5] shadow-[0_18px_45px_rgba(41,28,17,0.05)]">
            <div className="relative h-72">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-[#7a6154]">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-2xl text-[#201b18]">{post.title}</h2>
              <p className="text-sm leading-7 text-[#564b45]">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#201b18]">
                Read More
                <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
