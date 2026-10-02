import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#7a6154]">Let&apos;s Connect</p>
          <h1 className="mt-4 text-4xl text-[#201b18] sm:text-5xl lg:text-6xl">We&apos;d love to hear about your project.</h1>
        </div>
        <div className="space-y-5 rounded-[2rem] border border-[#eadfc7] bg-[#fffaf5] p-8">
          <div className="flex items-center gap-4">
            <Phone className="text-[#9b7a4d]" size={18} />
            <Link href="tel:+919902771038" className="text-lg text-[#201b18]">+91 99027 71038</Link>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-[#9b7a4d]" size={18} />
            <Link href="mailto:sales@promenadeliving.in" className="text-lg text-[#201b18]">sales@promenadeliving.in</Link>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#9b7a4d]" size={18} />
            <span className="text-lg text-[#201b18]">Mon–Sat • 10:00 AM – 7:00 PM</span>
          </div>
          <div className="pt-4">
            <Link href="#consultation" className="inline-flex items-center gap-2 rounded-full bg-[#2d251d] px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#f7f1e9]">
              Book Consultation
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
