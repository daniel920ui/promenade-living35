import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1100px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[2.5rem] border border-[#eadfc7] bg-[#fffaf5]">
        <div className="relative h-[300px] sm:h-[420px]">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        <div className="space-y-6 p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-4 text-[0.62rem] uppercase tracking-[0.2em] text-[#7a6154]">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="max-w-3xl text-4xl text-[#201b18] sm:text-5xl">{post.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-[#564b45]">{post.excerpt}</p>
          <div className="space-y-5 text-base leading-8 text-[#564b45]">
            <p>
              Good design begins with clarity. Before you choose a layout or finish, it is important to define how the room will be used, how often it is used and what kind of atmosphere you want to create.
            </p>
            <p>
              In a modular kitchen, storage efficiency, circulation and material durability matter as much as visual appeal. Thoughtful planning ensures that everyday tasks feel easier, faster and more comfortable.
            </p>
            <p>
              In the end, a beautiful kitchen is one that supports your rhythm and feels calm even during the busiest moments of the day.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#201b18]">
            Back to Journal
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </main>
  );
}
