import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";

interface BookCardProps {
  title: string;
  description: string;
  pdfPath: string;
  id: number;
  color?: string;
}

export const BookCard = ({ title, description, id, color }: BookCardProps) => {
  const primaryColor = color || "#064e3b"; // Default emerald-950
  const lightColor = `${primaryColor}CC`;
  const spineColor = `${primaryColor}EE`;
  return (
    <div className="group perspective-2000 w-[210px] h-[300px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-1000 transform-style-3d group-hover:rotate-y-[-25deg]">
        {/* Shadow */}
        <div className="absolute inset-0 bg-black/20 blur-xl translate-x-4 translate-y-4 rounded-r-lg group-hover:translate-x-12 transition-all duration-1000" />

        {/* Book Spine */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[38px] rounded-l-lg origin-left transform-style-3d shadow-[inset_-10px_0_20px_rgba(0,0,0,0.6)] z-20 flex flex-col justify-around py-6"
          style={{ backgroundColor: spineColor }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-[1px] w-full bg-emerald-900/50" />
          ))}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="rotate-90 text-[7px] font-bold text-emerald-800/40 uppercase tracking-widest whitespace-nowrap">
              JADAVICULTURE
            </span>
          </div>
        </div>

        {/* Book Pages Stack */}
        <div
          className="absolute left-[34px] top-[4px] bottom-[4px] right-[4px] bg-white rounded-r shadow-inner z-10 border-y border-r border-zinc-200"
          style={{ transform: "translateZ(1px)" }}
        >
          <div
            className="w-full h-full opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 95%, #000 95%)",
              backgroundSize: "2.5px 100%",
            }}
          />
        </div>

        {/* Internal Page Content (visible when cover opens) */}
        <div
          className="absolute left-[36px] top-[8px] bottom-[8px] right-[8px] bg-[#fdfdfb] rounded-r-sm z-[15] p-5 flex flex-col justify-between border border-zinc-100 shadow-sm"
          style={{ transform: "translateZ(2px)" }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-4 bg-emerald-500 rounded-full" />
              <span className="text-[8px] text-emerald-600 font-bold uppercase tracking-wider">
                Introduction
              </span>
            </div>
            <p className="text-[10.5px] text-zinc-600 leading-[1.6] italic font-serif line-clamp-[10] border-l-2 border-emerald-50/50 pl-3">
              {description}
            </p>
          </div>

          <div className="pt-4 border-t border-emerald-50">
            <Link
              href={route("formations.show", id)}
              className="flex items-center justify-between group/link"
            >
              <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-tighter">
                Voir plus
              </span>
              <ChevronRight className="w-3 h-3 text-emerald-600 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Front Cover - THIS MUST BE VISIBLE BY DEFAULT */}
        <div
          className="absolute inset-0 rounded-r-lg origin-left transition-transform duration-1000 transform-style-3d z-[100] shadow-2xl overflow-hidden"
          style={{
            transform: "rotateY(0deg) translateZ(20px)",
            backfaceVisibility: "hidden",
            backgroundColor: primaryColor,
            borderLeft: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            className="w-full h-full flex flex-col justify-between p-7 relative group-hover:scale-95 transition-transform duration-700"
            style={{ backgroundColor: primaryColor }}
          >
            {/* Elegant Frame */}
            <div className="absolute inset-4 border border-emerald-400/10 rounded-lg pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-[1px] w-4 bg-emerald-400/30" />
                <span className="text-[9px] text-emerald-300/70 font-display tracking-[0.2em] uppercase">
                  Academy
                </span>
              </div>

              <h3 className="text-white text-xl font-display font-bold leading-tight mb-4 tracking-tight drop-shadow-xl">
                {title}
              </h3>

              <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-400 via-yellow-200 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.2)]" />
            </div>

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/90 flex items-center justify-center border border-emerald-500/20 shadow-inner">
                  <span className="text-xs text-emerald-400 font-bold italic font-serif">
                    JAD
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-emerald-50 font-bold uppercase tracking-widest leading-none">
                    Aviculture
                  </span>
                  <span className="text-[7px] text-emerald-400/60 font-medium mt-1 uppercase">
                    Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-2000 {
          perspective: 2500px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        /* On hover, rotate the cover to open the book */
        .group:hover > div > div:last-of-type {
          transform: rotateY(-130deg) translateZ(20px) !important;
        }
      `}</style>
    </div>
  );
};
