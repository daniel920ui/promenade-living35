import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Star } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Header } from "@/components/Header";
import { ProjectFilter } from "@/components/ProjectFilter";
import {
  benefits,
  blogPosts,
  categoryNavigation,
  collectionCards,
  locations,
  materials,
  packages,
  processSteps,
  testimonials,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-[#f7f1ea] text-[#201b18]">
        <section className="relative isolate min-h-screen">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury Indian home interior with warm natural light"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1b1714]/40" />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <div className="max-w-3xl pt-14 sm:pt-20">
              <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#f5e5d1]">
                Designed for life, made for you
              </p>
              <h1 className="max-w-[10ch] font-serif text-5xl leading-[0.9] text-[#fffaf5] sm:text-6xl lg:text-[7rem]">
                Live in the Space You Love
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#efe0d2] sm:text-xl">
                Thoughtful interiors. Timeless pieces. Spaces created around the way you live.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#dcb77a] px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#201b18] transition hover:bg-[#e9c78d]"
                >
                  Book a Consultation
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/collection"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#fffaf5] backdrop-blur-sm transition hover:border-[#dcb77a] hover:text-[#f6e8d2]"
                >
                  Explore Our Collection
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mt-12 text-[0.68rem] uppercase tracking-[0.24em] text-[#f3e6d5]">Scroll to explore ↓</div>
            </div>
          </div>
        </section>

        <nav className="relative z-10 -mt-12 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto rounded-[2rem] border border-[#e7dcc8] bg-[#fffaf5]/90 p-4 shadow-[0_18px_45px_rgba(33,25,20,0.08)] backdrop-blur-md">
            {categoryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex min-w-[180px] items-center gap-3 rounded-full border border-[#e8d9c5] bg-[#f5efe8] px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#201b18] transition hover:border-[#c59b64] hover:text-[#9b7a4d]"
              >
                <span className="text-base text-[#9b7a4d]">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <section id="about" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="order-2 lg:order-1">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Promenade Living</p>
              <h2 className="mt-4 max-w-[14ch] font-serif text-4xl leading-[0.95] text-[#201b18] sm:text-5xl lg:text-[4rem]">
                Beautiful spaces, crafted for the way you live.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#564b45]">
                We create thoughtful interiors and exteriors that blend contemporary comfort with timeless Indian character. From custom wardrobes and kitchens to complete outdoor spaces, every detail is shaped around how you live.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#201b18]">
                  Discover Promenade Living
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="order-1 relative h-[520px] overflow-hidden rounded-[2.25rem] shadow-[0_25px_60px_rgba(42,31,24,0.14)] lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                alt="Warm modern living room with premium architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="collections" className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Interiors & Exteriors</p>
            <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">Curated spaces, inside and out.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {collectionCards.map((card, index) => (
              <Link
                href={card.href}
                key={card.id}
                className={`group relative overflow-hidden rounded-[2.25rem] border border-[#eadfc7] bg-[#fffaf5] shadow-[0_20px_45px_rgba(41,28,17,0.06)] ${
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative h-[430px] overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1714]/70 to-[#1b1714]/10" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#f0dfc0]">0{index + 1}</p>
                  <h3 className="mt-3 max-w-[12ch] text-3xl text-[#fffaf5] sm:text-4xl">{card.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#f5e9dc]">{card.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-[#f7ead7]">
                    {card.cta}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Spaces We&apos;ve Created</p>
            <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">A glimpse into our design philosophy.</h2>
          </div>
          <ProjectFilter />
        </section>

        <section id="why" className="bg-[#201b18] py-24 text-[#f6efe7]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d6b27c]">Why Promenade Living?</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Thoughtful design. Trusted execution.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, idx) => (
                <div key={benefit.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b27c]/60 bg-[#d6b27c]/10 text-[#d6b27c]">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl text-[#f8f3ee]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#e7d9cb]">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-[#eadfc7] bg-[#fffaf5] shadow-[0_20px_60px_rgba(41,28,17,0.08)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury interior with warm lighting and architectural design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Design Philosophy</p>
                <h2 className="mt-4 font-serif text-4xl leading-[1.02] text-[#201b18] sm:text-5xl">Design that lives with you.</h2>
                <p className="mt-5 max-w-lg text-base leading-8 text-[#564b45]">
                  We believe good design should not simply look beautiful. It should make everyday life easier, more comfortable and more meaningful.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    ["Beauty", "Spaces that feel beautiful the moment you walk in."],
                    ["Function", "Every element designed with purpose."],
                    ["Personality", "Your home should feel unmistakably yours."],
                  ].map(([label, text]) => (
                    <div key={label} className="border-b border-[#e7dcc8] pb-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#7a6154]">{label}</p>
                      <p className="mt-2 text-lg text-[#201b18]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#f4ecdf] py-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Our Process</p>
              <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">From the first conversation to the final detail.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="rounded-[2rem] border border-[#e4d1b0] bg-[#fffaf5] p-7 shadow-[0_18px_35px_rgba(51,37,26,0.04)]">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d3b98d] bg-[#f2e4d0] text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#201b18]">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl text-[#201b18]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#564b45]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2.5rem] border border-[#eadfc7] bg-[#fffaf5] p-8 sm:p-10">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">See your space before it becomes real.</p>
              <h2 className="mt-4 max-w-[12ch] font-serif text-4xl leading-[0.98] text-[#201b18] sm:text-5xl">From concept to completion.</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#564b45]">
                From concept to completion, we help you visualize every detail before execution.
              </p>
              <Link href="#consultation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2d251d] px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#f7efe6]">
                Start Your Project
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Floor plan",
                "3D interior concept",
                "Finished interior",
              ].map((item, index) => (
                <div key={item} className="overflow-hidden rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5]">
                  <div className="relative h-64">
                    <Image
                      src={[
                        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
                        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
                        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
                      ][index]}
                      alt={item}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center text-[0.65rem] uppercase tracking-[0.2em] text-[#201b18]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="materials" className="bg-[#f4ecdf] py-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Details Matter.</p>
              <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">Material stories that bring depth to every room.</h2>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-3">
              {materials.map((material) => (
                <div key={material.name} className="min-w-[260px] overflow-hidden rounded-[2rem] border border-[#e6d7c1] bg-[#fffaf5] shadow-[0_12px_35px_rgba(51,37,26,0.04)]">
                  <div className="relative h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                      alt={material.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#7a6154]">{material.finish}</p>
                    <h3 className="text-2xl text-[#201b18]">{material.name}</h3>
                    <p className="text-sm leading-7 text-[#564b45]">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Interior solutions</p>
            <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">Interior solutions for every home.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[2rem] border p-7 ${pkg.featured ? "border-[#d6b27c] bg-[#201b18] text-[#f5efe8]" : "border-[#eadfc7] bg-[#fffaf5] text-[#201b18]"}`}>
                <div className="mb-4 flex items-center justify-between">
                  <p className={`text-[0.64rem] uppercase tracking-[0.2em] ${pkg.featured ? "text-[#d6b27c]" : "text-[#7a6154]"}`}>{pkg.badge}</p>
                </div>
                <h3 className="text-3xl">{pkg.name}</h3>
                <p className={`mt-4 text-base leading-8 ${pkg.featured ? "text-[#e6d7ca]" : "text-[#564b45]"}`}>{pkg.description}</p>
                <ul className={`mt-6 space-y-3 text-sm ${pkg.featured ? "text-[#ead9c7]" : "text-[#564b45]"}`}>
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2"><Check size={15} /> {item}</li>
                  ))}
                </ul>
                <div className={`mt-8 text-[0.64rem] uppercase tracking-[0.18em] ${pkg.featured ? "text-[#d8c18d]" : "text-[#9b7a4d]"}`}>
                  Price based on project requirements
                </div>
                <Link href="#consultation" className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] ${pkg.featured ? "bg-[#dcb77a] text-[#201b18]" : "border border-[#2d251d] bg-transparent text-[#201b18]"}`}>
                  {pkg.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="bg-[#201b18] py-24 text-[#f7efe6]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d6b27c]">Client Stories</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Spaces that became part of everyday life.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 flex gap-1 text-[#d6b27c]">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base leading-8 text-[#f3eae1]">“{item.review}”</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-xl text-[#fffaf5]">{item.name}</p>
                    <p className="mt-1 text-sm text-[#d9c7aa]">{item.location}</p>
                    <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-[#d6b27c]">{item.project}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="#consultation" className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#f6efe8]">
                Share Your Experience
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <section id="consultation" className="bg-[#12100f] py-24 text-[#f6efe3]">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d6b27c]">Let&apos;s Create Your Space.</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Share a few details and our team will get in touch to discuss your project.</h2>
              <p className="mt-5 text-base leading-8 text-[#d9c7aa]">We typically respond within one working day.</p>
            </div>

            <ConsultationForm />
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Let&apos;s Connect</p>
              <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">Call, message or plan your next chapter.</h2>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5] p-7">
              <div className="flex items-center justify-between border-b border-[#e7dcc8] pb-4">
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[#7a6154]">Phone</span>
                <Link href="tel:+919902771038" className="text-lg text-[#201b18]">+91 99027 71038</Link>
              </div>
              <div className="flex items-center justify-between border-b border-[#e7dcc8] pb-4">
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[#7a6154]">Email</span>
                <Link href="mailto:sales@promenadeliving.in" className="text-lg text-[#201b18]">sales@promenadeliving.in</Link>
              </div>
              <div className="flex items-center justify-between border-b border-[#e7dcc8] pb-4">
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[#7a6154]">Hours</span>
                <span className="text-lg text-[#201b18]">Mon–Sat • 10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="tel:+919902771038" className="inline-flex items-center gap-2 rounded-full bg-[#2d251d] px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#f7f1e9]">Call Us</Link>
                <Link href="mailto:sales@promenadeliving.in" className="inline-flex items-center gap-2 rounded-full border border-[#2d251d] px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#201b18]">Email Us</Link>
                <Link href="https://wa.me/919902771038" className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white">WhatsApp</Link>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2.5rem] border border-[#eadfc7] bg-[#f4ecdf] p-8 sm:p-10">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Where we create</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {locations.map((location) => (
                <span key={location} className="rounded-full border border-[#d7c7ad] bg-[#fffaf5] px-4 py-2 text-sm text-[#201b18]">
                  {location}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="journal" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Design Journal</p>
            <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">Fresh inspiration for beautifully lived-in homes.</h2>
          </div>

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
                  <h3 className="text-2xl text-[#201b18]">{post.title}</h3>
                  <p className="text-sm leading-7 text-[#564b45]">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#201b18]">
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">FAQ</p>
            <h2 className="mt-4 text-3xl text-[#201b18] sm:text-4xl lg:text-5xl">Questions we hear most often.</h2>
          </div>
          <FaqAccordion />
        </section>

        <section className="relative overflow-hidden bg-[#201b18] py-24 text-[#f9f2ea]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
              alt="Beautiful finished Indian home"
              fill
              className="object-cover opacity-35"
            />
          </div>
          <div className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#d6b27c]">Your space. Your story.</p>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl">Ready to create something beautiful?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#eddcc8]">
              Let&apos;s turn your ideas into a space you&apos;ll love living in.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="#consultation" className="inline-flex items-center gap-2 rounded-full bg-[#dcb77a] px-7 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#201b18]">
                Book a Consultation
                <ArrowRight size={14} />
              </Link>
              <Link href="https://wa.me/919902771038" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#f9f2ea]">
                WhatsApp Us
                <MessageCircle size={14} />
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-[#f0e7db] text-[#201b18]">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#7a6154]">Promenade Living</p>
              <p className="mt-5 text-lg leading-8 text-[#201b18]">Designed for Life. Made for You.</p>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#7a6154]">Explore</p>
              <ul className="mt-5 space-y-3 text-sm text-[#403732]">
                {['Home','Collection','Projects','Packages','About','Process'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#7a6154]">Collection</p>
              <ul className="mt-5 space-y-3 text-sm text-[#403732]">
                {['Wardrobes','Kitchens','False Ceilings','Exteriors'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#7a6154]">Connect</p>
              <ul className="mt-5 space-y-3 text-sm text-[#403732]">
                <li><Link href="tel:+919902771038">Call Us</Link></li>
                <li><Link href="mailto:sales@promenadeliving.in">Email Us</Link></li>
                <li><Link href="https://wa.me/919902771038">WhatsApp</Link></li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Pinterest</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#d9c9b1]">
            <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-4 px-4 py-6 text-sm text-[#524942] sm:px-6 lg:flex-row lg:px-8">
              <p>© Promenade Living. All Rights Reserved.</p>
              <div className="flex gap-6">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>

        <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#d5c1a4] bg-[#fffaf5]/95 p-2 shadow-[0_15px_30px_rgba(29,22,17,0.14)] md:hidden">
          <Link href="tel:+919902771038" className="rounded-full bg-[#201b18] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f7efe6]">Call</Link>
          <Link href="https://wa.me/919902771038" className="rounded-full bg-[#25d366] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-white">WhatsApp</Link>
          <Link href="#consultation" className="rounded-full bg-[#dcb77a] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#201b18]">Consult</Link>
        </div>

        <div className="fixed bottom-8 right-8 z-50 hidden gap-3 md:flex">
          <Link href="https://wa.me/919902771038" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.35)]">
            <MessageCircle size={18} />
          </Link>
          <Link href="#consultation" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dcb77a] text-[#201b18] shadow-[0_15px_35px_rgba(220,183,122,0.35)]">
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </>
  );
}
