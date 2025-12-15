// components/profile/types.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  status: "in_progress" | "completed" | "pending";
  created_at: string;
}

export interface ActivityLog {
  id: number;
  action: string;
  description: string;
  icon_type: string;
  created_at: string;
}

export interface Achievement {
  name: string;
  description: string;
  icon: string;
  earned: boolean;
}

export interface Stats {
  projects_count: number;
  network_count: number;
  trust_score: number;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
}

export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  city?: string;
  province?: string;
  bio?: string;
  avatar?: string;
  role: string;
  sector: string;
  status: "approved" | "pending";
  social_links?: SocialLinks;
}

export interface ProfileProps {
  member: Member;
  stats: Stats;
  projects: Project[];
  activities: ActivityLog[];
  achievements: Achievement[];
  auth: any;
}