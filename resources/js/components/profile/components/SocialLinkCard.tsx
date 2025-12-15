// components/profile/components/SocialLinkCard.tsx

import { SocialIcon } from "./SocialIcon";

interface SocialLinkCardProps {
  platform: string;
  url: string;
}

export function SocialLinkCard({ platform, url }: SocialLinkCardProps) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-xl border-0 bg-gradient-to-r from-slate-50 to-slate-100 hover:shadow-md transition-all duration-300 group overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="p-2 rounded-full bg-white text-slate-700 group-hover:text-green-600 transition-colors duration-300 shadow-sm relative z-10">
        <SocialIcon platform={platform} className="w-5 h-5" />
      </div>
      <span className="font-medium capitalize relative z-10">{platform}</span>
    </a>
  );
}