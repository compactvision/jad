// components/profile/components/ProfileView.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Edit,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  Activity,
  FileText,
  Award,
  Star,
  Shield,
  Users,
  Building2,
} from "lucide-react";
import { SocialLinkCard } from "./SocialLinkCard";
import { StatCard } from "./StatCard";
import { Member, Project, ActivityLog, Achievement, Stats } from "../types";

interface ProfileViewProps {
  member: Member;
  stats: Stats;
  projects: Project[];
  activities: ActivityLog[];
  achievements: Achievement[];
  onEdit: () => void;
}

export function ProfileView({
  member,
  stats,
  projects,
  activities,
  achievements,
  onEdit,
}: ProfileViewProps) {
  const socialLinks = member.social_links || {};
  const hasSocials = Object.values(socialLinks).some((link) => link);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <div></div>
        <Button
          onClick={onEdit}
          className="shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0"
        >
          <Edit className="w-4 h-4 mr-2" />
          Modifier le profil
        </Button>
      </div>

      {/* Hero Section with Avatar and Info */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 opacity-20">
            <svg
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 40 L 40 0 M 0 80 L 80 0 M 0 120 L 120 0"
                    stroke="white"
                    strokeWidth="0.5"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* Avatar with Animation */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <Avatar className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-2xl">
                {member.primary_image_display === "company_logo" &&
                member.company_logo ? (
                  <AvatarImage
                    src={`/storage/${member.company_logo}`}
                    className="object-cover"
                  />
                ) : (
                  <AvatarImage
                    src={
                      member.avatar ? `/storage/${member.avatar}` : undefined
                    }
                    className="object-cover"
                  />
                )}
                <AvatarFallback className="text-3xl font-bold bg-white text-green-800">
                  {member.primary_image_display === "company_logo" ? (
                    <Building2 className="w-16 h-16" />
                  ) : (
                    member.name.substring(0, 2).toUpperCase()
                  )}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name and Role */}
            <div className="flex-1 text-center md:text-left text-white">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-md">
                {member.primary_name_display === "company" &&
                member.company_name
                  ? member.company_name
                  : member.name}
              </h1>
              <p className="text-green-100 text-lg mt-2 drop-shadow">
                {member.role} • {member.sector}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                  {member.status === "approved"
                    ? "Membre vérifié"
                    : "En attente de vérification"}
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                  {member.city}, {member.province}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Projets"
          value={stats.projects_count}
          icon={<Briefcase className="w-5 h-5" />}
          trend="neutral"
        />
        <StatCard
          title="Membres du réseau"
          value={stats.network_count}
          icon={<Users className="w-5 h-5" />}
          trend="up"
        />
        <StatCard
          title="Score de confiance"
          value={`${stats.trust_score}%`}
          icon={<Award className="w-5 h-5" />}
          trend="neutral"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info & Stats */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <Card className="border-0 shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
              <CardTitle className="text-lg flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600" />
                Informations de contact
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="p-2 rounded-full bg-green-100 text-green-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium truncate">{member.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="p-2 rounded-full bg-green-100 text-green-600">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">Téléphone</p>
                  <p className="text-sm font-medium">{member.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="p-2 rounded-full bg-green-100 text-green-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">Localisation</p>
                  <p className="text-sm font-medium capitalize">
                    {member.city}, {member.province}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          {hasSocials && (
            <Card className="border-0 shadow-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  Réseaux Sociaux
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 grid grid-cols-1 gap-3">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <SocialLinkCard
                    key={platform}
                    platform={platform}
                    url={url as string}
                  />
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column: Tabs Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6 space-x-6">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3 px-0 font-medium text-base data-[state=active]:text-green-600"
              >
                Vue d'ensemble
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3 px-0 font-medium text-base data-[state=active]:text-green-600"
              >
                Entreprise
              </TabsTrigger>
              <TabsTrigger
                value="activity"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3 px-0 font-medium text-base data-[state=active]:text-green-600"
              >
                Activités
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3 px-0 font-medium text-base data-[state=active]:text-green-600"
              >
                Réalisations
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="overview"
              className="space-y-6 animate-in slide-in-from-bottom-2 duration-300"
            >
              {/* Bio */}
              <Card className="border-0 shadow-md overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-600" />
                    Biographie
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="leading-relaxed text-slate-600 whitespace-pre-line">
                    {member.bio ||
                      "Aucune biographie renseignée pour le moment. Ajoutez une description pour vous présenter aux autres membres."}
                  </p>
                </CardContent>
              </Card>

              {/* Recent Projects */}
              <Card className="border-0 shadow-md overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Projets récents
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {projects.length > 0 ? (
                      projects.map((project) => (
                        <div
                          key={project.id}
                          className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 hover:shadow-sm transition-all"
                        >
                          <div className="p-2 rounded-full bg-green-100 text-green-600">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{project.title}</h4>
                            <p className="text-sm text-slate-500 mt-1 lines-clamp-2">
                              {project.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge
                                variant={
                                  project.status === "completed"
                                    ? "default"
                                    : "outline"
                                }
                                className="text-xs capitalize"
                              >
                                {project.status.replace("_", " ")}
                              </Badge>
                              <span className="text-xs text-slate-500">
                                {new Date(
                                  project.created_at,
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500 p-4 text-center">
                        Aucun projet récent.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              value="enterprise"
              className="space-y-6 animate-in slide-in-from-bottom-2 duration-300"
            >
              {member.company_name ? (
                <Card className="border-0 shadow-md overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-green-600" />
                      Détails de l'entreprise
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                          Nom de l'entreprise
                        </Label>
                        <p className="font-bold text-lg text-slate-800">
                          {member.company_name}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                          Site Web
                        </Label>
                        <p className="text-green-600 hover:text-green-700 transition-colors">
                          {member.company_website ? (
                            <a
                              href={member.company_website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              {member.company_website}
                            </a>
                          ) : (
                            "Non renseigné"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                        Description
                      </Label>
                      <p className="leading-relaxed text-slate-600 whitespace-pre-wrap">
                        {member.company_description ||
                          "Aucune description fournie."}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                          Téléphone professionnel
                        </Label>
                        <p className="text-slate-700 font-medium">
                          {member.company_phone || "Non renseigné"}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                          Adresse professionnelle
                        </Label>
                        <p className="text-slate-700 font-medium">
                          {member.company_address || "Non renseigné"}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                          <p className="text-sm font-semibold text-slate-700">
                            Préférence d'affichage
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Ce nom sera utilisé sur votre profil public
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-white text-green-700 border-green-100 capitalize font-medium"
                        >
                          {member.primary_name_display === "company"
                            ? "Entreprise"
                            : "Personnel"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-md">
                  <CardContent className="py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                      <Building2 className="w-8 h-8 text-slate-300" />
                    </div>
                    <h3 className="text-slate-800 font-semibold">
                      Informations manquantes
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs mt-2">
                      Vous n'avez pas encore renseigné les informations de votre
                      entreprise. Cliquez sur "Modifier le profil" pour les
                      ajouter.
                    </p>
                    <Button
                      onClick={onEdit}
                      variant="outline"
                      className="mt-6 border-green-200 text-green-700 hover:bg-green-50"
                    >
                      Compléter mon profil
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="activity">
              <Card className="border-0 shadow-md overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    Historique d'activité
                  </CardTitle>
                  <CardDescription>
                    Vos dernières actions sur la plateforme.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {activities.length > 0 ? (
                      activities.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start gap-4"
                        >
                          <div className="p-2 rounded-full bg-green-100 text-green-600">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-slate-500">
                              {new Date(activity.created_at).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500 text-center">
                        Aucune activité récente.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements">
              <Card className="border-0 shadow-md overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    Réalisations et badges
                  </CardTitle>
                  <CardDescription>
                    Vos accomplissements et reconnaissances.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-4 p-4 rounded-lg border ${
                          achievement.earned
                            ? "border-green-100 bg-green-50/50"
                            : "border-slate-100 bg-slate-50/50 opacity-60"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-full ${
                            achievement.earned
                              ? "bg-green-100 text-green-600"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {achievement.icon === "Star" && (
                            <Star className="w-6 h-6" />
                          )}
                          {achievement.icon === "Award" && (
                            <Award className="w-6 h-6" />
                          )}
                          {achievement.icon === "Users" && (
                            <Users className="w-6 h-6" />
                          )}
                          {achievement.icon === "Shield" && (
                            <Shield className="w-6 h-6" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{achievement.name}</h4>
                          <p className="text-sm text-slate-500 mt-1">
                            {achievement.description}
                          </p>
                          {achievement.earned && (
                            <div className="flex items-center gap-1 mt-2">
                              <Star className="w-3 h-3 text-green-600" />
                              <span className="text-xs text-green-600">
                                Obtenu
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
