// resources/js/pages/members.tsx
import React, { useState, useMemo } from "react";
import AppShell from "@/layouts/AppShell";
import { Head } from "@inertiajs/react";
import Breadcrumb from "@/components/common/Breadcrumb";
import MemberCard from "@/components/members/MemberCard";

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string | null;
  sector: string;
  city: string;
  description?: string;
  social_links?: Record<string, string>;
}

export default function Members({ members }: { members: Member[] }) {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Map backend members to frontend structure if needed or use directly
  // The previous code used 'category' which seems to map to 'sector' or 'role'.
  // Let's assume 'sector' is the category for filtering.

  const categories = useMemo(() => {
    const uniqueCategories = new Set(members.map((m) => m.sector));
    return ["Tous", ...Array.from(uniqueCategories)];
  }, [members]);

  const filteredMembers = useMemo(() => {
    if (activeCategory === "Tous") {
      return members;
    }
    return members.filter((member) => member.sector === activeCategory);
  }, [activeCategory, members]);

  return (
    <AppShell>
      <Head title="Membres" />
      <Breadcrumb
        title={`Membres : ${activeCategory}`}
        desc="Gestion des membres"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section des filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                activeCategory === category
                  ? "bg-green-600 text-white shadow-lg scale-105 ring-2 ring-green-500 ring-offset-2"
                  : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Titre dynamique */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {activeCategory === "Tous"
              ? "Toute notre équipe"
              : `Notre équipe ${activeCategory}`}
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Découvrez les talents qui font la force de notre entreprise,
            passionnés par l'excellence et l'innovation.
          </p>
        </div>

        {/* LA GRILLE MAGIQUE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className="member-card-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MemberCard
                member={{
                  ...member,
                  id: member.id.toString(),
                  category: member.sector,
                  image: member.avatar
                    ? `/storage/${member.avatar}`
                    : `https://ui-avatars.com/api/?name=${member.name}`,
                  bio:
                    member.description ||
                    `${member.role} spécialisé dans le secteur ${member.sector}.`,
                  socials: member.social_links || {},
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
