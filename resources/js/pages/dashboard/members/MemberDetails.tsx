import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Check,
  Eye,
  EyeOff,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  User,
  Calendar,
  FileText,
  ArrowLeft, // Import de l'icône
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  province: string;
  city: string;
  sector: string;
  avatar: string | null;
  status: string;
  is_visible: boolean;
  created_at?: string;
}

export default function MemberDetails({ member }: { member: Member }) {
  const handleApprove = () => {
    router.patch(route("members.approve", member.id));
  };

  const handleToggleVisibility = () => {
    router.patch(route("members.visibility", member.id));
  };

  return (
    <DashLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Bouton Retour */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
              className="w-fit"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{member.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <StatusBadge
                  status={member.status as any}
                  label={member.status}
                />
                <span>•</span>
                <span className="capitalize">{member.role}</span>
                <span>•</span>
                <span className="capitalize">{member.sector}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {member.status === "pending" && (
              <Button
                onClick={handleApprove}
                className="bg-green-600 hover:bg-green-700"
              >
                <Check className="w-4 h-4 mr-2" />
                Accepter le membre
              </Button>
            )}
            <Button onClick={handleToggleVisibility} variant="outline">
              {member.is_visible ? (
                <>
                  <EyeOff className="w-4 h-4 mr-2" />
                  Masquer du site
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Afficher sur le site
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Sidebar Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4 border-4 border-muted">
                  <AvatarImage
                    src={
                      member.avatar ? `/storage/${member.avatar}` : undefined
                    }
                  />
                  <AvatarFallback className="text-3xl">
                    {member.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {member.city}, {member.province}
                </p>

                <div className="w-full mt-6 space-y-3 text-left">
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm capitalize">{member.city}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Status du compte</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Visibilité Public
                  </span>
                  <span
                    className={
                      member.is_visible
                        ? "text-green-600 font-medium"
                        : "text-amber-600 font-medium"
                    }
                  >
                    {member.is_visible ? "Visible" : "Masqué"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Approbation</span>
                  <StatusBadge
                    status={member.status as any}
                    label={member.status}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6 space-x-6">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-2 px-0 font-medium"
                >
                  Vue d'ensemble
                </TabsTrigger>
                <TabsTrigger
                  value="dossier"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-2 px-0 font-medium"
                >
                  Dossier & Fichiers
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-2 px-0 font-medium"
                >
                  Activité
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Informations Professionnelles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <Label className="text-muted-foreground">
                        Secteur d'activité
                      </Label>
                      <p className="font-medium capitalize text-lg">
                        {member.sector}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground">
                        Rôle dans l'organisation
                      </Label>
                      <p className="font-medium capitalize text-lg">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dossier" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Documents
                    </CardTitle>
                    <CardDescription>
                      Gérez les documents administratifs de ce membre.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed rounded-lg m-6 bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
                    <div className="p-4 rounded-full bg-primary/10 text-primary mb-3">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-semibold">Aucun document</h4>
                    <p className="text-muted-foreground max-w-xs mt-1">
                      Aucun fichier n'a été téléchargé pour ce membre pour le
                      moment.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Historique d'activité
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-8 text-muted-foreground">
                      Aucune activité enregistrée récemment.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashLayout>
  );
}