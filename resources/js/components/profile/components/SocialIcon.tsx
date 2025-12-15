// components/profile/components/SocialIcon.tsx

import { Facebook, Twitter, Linkedin, Instagram, Globe } from "lucide-react";

interface SocialIconProps {
  platform: string;
  className?: string;
}

export function SocialIcon({ platform, className }: SocialIconProps) {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <Facebook className={className} />;
    case "twitter":
      return <Twitter className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "website":
      return <Globe className={className} />;
    default:
      return <Globe className={className} />;
  }
}