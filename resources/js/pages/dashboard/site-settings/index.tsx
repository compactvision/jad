import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { PageHeader } from "@/components/common/PageHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Loader2, Settings2, AlertTriangle, Shield, Zap, Globe, CheckCircle } from "lucide-react";
import { Head, useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { useState } from "react";

interface SiteSettingsProps {
  settings: {
    maintenance_mode?: string;
    [key: string]: any;
  };
}

export default function GlobalSettings({ settings }: SiteSettingsProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { data, setData, post, processing } = useForm({
    maintenance_mode: settings.maintenance_mode === "true",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("site-settings.update"), {
      preserveScroll: true,
      onSuccess: () => {
        toast.success("Paramètres mis à jour", {
          description: "Les modifications ont été enregistrées avec succès.",
        });
      },
      onError: () => {
        toast.error("Erreur", {
          description: "Une erreur est survenue lors de la sauvegarde.",
        });
      },
    });
  };

  return (
    <DashLayout>
      {/* Background subtil */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"></div>
      
      <PageHeader
        title="Configuration du Site"
        description="Gérez les paramètres globaux de l'application."
      />

      <Head title="Configuration du Site" />

      <div className="max-w-5xl mx-auto pb-10 space-y-8">
        {/* Cartes de statut modernes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-100">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  data.maintenance_mode 
                    ? "bg-amber-100 text-amber-700" 
                    : "bg-green-100 text-green-700"
                }`}>
                  {data.maintenance_mode ? "Hors ligne" : "En ligne"}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Statut du site</h3>
              <p className="text-2xl font-bold text-slate-800">
                {data.maintenance_mode ? "Maintenance" : "Actif"}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <div className={`w-2 h-2 rounded-full ${
                  data.maintenance_mode ? "bg-amber-500" : "bg-green-500"
                }`}></div>
                {data.maintenance_mode ? "Mode maintenance" : "Accessible au public"}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-100">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                  Sécurisé
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Sécurité</h3>
              <p className="text-2xl font-bold text-slate-800">Protégé</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Connexion HTTPS active
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-100">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  Optimisé
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Performance</h3>
              <p className="text-2xl font-bold text-slate-800">Excellent</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                Temps de chargement optimal
              </div>
            </div>
          </div>
        </div>

        {/* Carte principale de configuration */}
        <form onSubmit={handleSubmit}>
          <Card 
            className="border-0 shadow-xl bg-white/95 backdrop-blur-sm transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* En-tête moderne */}
            <div className="relative overflow-hidden">
              <div className={`h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-500 ${
                isHovered ? "opacity-100" : "opacity-80"
              }`}></div>
              
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      Mode Maintenance
                    </CardTitle>
                    <CardDescription className="text-slate-600 mt-1">
                      Gérez l'accessibilité de votre site pour les visiteurs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </div>

            <CardContent className="px-8 pb-8 space-y-8">
              {/* Section principale du switch */}
              <div className="relative">
                <div className={`rounded-2xl border-2 transition-all duration-300 ${
                  data.maintenance_mode 
                    ? "border-amber-200 bg-amber-50/50" 
                    : "border-green-200 bg-green-50/50"
                }`}>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {data.maintenance_mode ? (
                            <div className="p-2 rounded-lg bg-amber-100">
                              <AlertTriangle className="w-5 h-5 text-amber-600" />
                            </div>
                          ) : (
                            <div className="p-2 rounded-lg bg-green-100">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                          )}
                          <Label
                            htmlFor="maintenance_mode"
                            className="text-xl font-semibold text-slate-900"
                          >
                            {data.maintenance_mode ? "Maintenance Activée" : "Site Public"}
                          </Label>
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {data.maintenance_mode 
                            ? "Le site est actuellement en maintenance. Seuls les administrateurs ont accès."
                            : "Votre site est accessible à tous les visiteurs. Activez la maintenance pour les mises à jour."
                          }
                        </p>
                        
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          data.maintenance_mode
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : "bg-green-100 text-green-800 border border-green-200"
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            data.maintenance_mode ? "bg-amber-600" : "bg-green-600"
                          }`}></div>
                          {data.maintenance_mode ? "Accès limité" : "Accès public"}
                        </div>
                      </div>
                      
                      {/* Switch stylisé */}
                      <div className="flex items-center">
                        <Switch
                          id="maintenance_mode"
                          checked={data.maintenance_mode}
                          onCheckedChange={(checked) =>
                            setData("maintenance_mode", checked)
                          }
                          className="data-[state=checked]:bg-amber-500 data-[state=unchecked]:bg-green-500 scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message d'avertissement */}
              {data.maintenance_mode && (
                <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-5 animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-amber-100">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-900 mb-2">
                        Mode Maintenance Actif
                      </h4>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Les visiteurs voient actuellement une page de maintenance. 
                        N'oubliez pas de désactiver ce mode une fois les travaux terminés.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Cartes d'information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-slate-200">
                      <Shield className="w-5 h-5 text-slate-700" />
                    </div>
                    <h4 className="font-semibold text-slate-900">Accès Administrateur</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Les administrateurs conservent un accès complet même pendant la maintenance.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-slate-200">
                      <Globe className="w-5 h-5 text-slate-700" />
                    </div>
                    <h4 className="font-semibold text-slate-900">Page Maintenance</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Une page personnalisée s'affiche pour les visiteurs pendant ce mode.
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="bg-slate-50 border-t border-slate-200 px-8 py-6">
              <div className="flex items-center justify-between w-full">
                <p className="text-sm text-slate-600">
                  Les changements sont appliqués immédiatement
                </p>
                <Button 
                  type="submit" 
                  disabled={processing}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg transition-all duration-300 hover:shadow-xl px-6"
                >
                  {processing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Enregistrer les modifications
                    </>
                  )}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </DashLayout>
  );
}