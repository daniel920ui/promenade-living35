"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projectCards } from "@/lib/content";

const filters = ["All", "Kitchen", "Wardrobes", "Living", "Bedroom", "Ceiling", "Exterior"];

export function ProjectFilter() {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projectCards
      : projectCards.filter((project) => {
          const normalizedCategory = project.category.toLowerCase();
          const normalizedFilter = selected.toLowerCase();
          return normalizedCategory === normalizedFilter || normalizedCategory.includes(normalizedFilter);
        });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setSelected(filter)}
            className={`rounded-full border px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] transition ${
              selected === filter
                ? "border-[#9b7a4d] bg-[#9b7a4d] text-[#fffefb]"
                : "border-[#d7c8b7] bg-white/70 text-[#352d29] hover:border-[#9b7a4d]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group overflow-hidden rounded-[2rem] border border-[#e5d7c3] bg-[#fffaf5] shadow-[0_20px_45px_rgba(70,48,34,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(70,48,34,0.1)]"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1714]/70 via-[#1b1714]/10 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                {project.location}
              </div>
            </div>

            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.18em] text-[#7a6154]">
                <span>{project.propertyType}</span>
                <span>{project.style}</span>
              </div>
              <h3 className="max-w-[18ch] text-2xl font-semibold leading-tight text-[#201b18]">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.16em] text-[#7a6154]">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.area}</span>
              </div>
              <div className="inline-flex items-center gap-2 pt-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#201b18]">
                View Project
                <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
