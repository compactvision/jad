// components/profile/components/ProfileEdit.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Camera,
  User,
  Briefcase,
  Globe,
  Save,
  Loader2,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Building2,
  Check,
  ChevronsUpDown,
  FileText,
} from "lucide-react";
import { SocialIcon } from "./SocialIcon";
import { useProfileForm } from "../hooks/useProfileForm";
import { Member } from "../types";

interface ProfileEditProps {
  member: Member;
  onCancel: () => void;
}

export function ProfileEdit({ member, onCancel }: ProfileEditProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    member.avatar ? `/storage/${member.avatar}` : null,
  );
  const [previewLogoUrl, setPreviewLogoUrl] = useState<string | null>(
    member.company_logo ? `/storage/${member.company_logo}` : null,
  );

  const {
    data,
    setData,
    processing,
    errors,
    recentlySuccessful,
    handleSubmit,
    updateSocialLink,
  } = useProfileForm(member);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData("avatar", file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData("company_logo", file);
      const url = URL.createObjectURL(file);
      setPreviewLogoUrl(url);
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Modifier mon profil
          </h2>
          <p className="text-muted-foreground">
            Mettez à jour vos informations publiques.
          </p>
        </div>
        <Button variant="ghost" onClick={onCancel}>
          Annuler
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar Card */}
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-green-600" />
              Identité Visuelle
            </CardTitle>
            <CardDescription>
              Gérez votre photo de profil et le logo de votre entreprise.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Avatar Section */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  Photo de profil (Individuel)
                </Label>
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Avatar className="relative w-24 h-24 border-4 border-white shadow-xl">
                      <AvatarImage
                        src={previewUrl || undefined}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-2xl font-bold bg-white text-green-800">
                        {member.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                      onClick={() =>
                        document.getElementById("avatar-upload")?.click()
                      }
                    >
                      <Camera className="text-white w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        document.getElementById("avatar-upload")?.click()
                      }
                    >
                      Changer la photo
                    </Button>
                    <input
                      id="avatar-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Carré, max 2 Mo.
                    </p>
                    {errors.avatar && (
                      <p className="text-xs text-destructive font-medium">
                        {errors.avatar}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Logo Section */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  Logo d'Entreprise
                </Label>
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Avatar className="relative w-24 h-24 border-4 border-white shadow-xl">
                      <AvatarImage
                        src={previewLogoUrl || undefined}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-2xl font-bold bg-white text-blue-800">
                        <Building2 className="w-8 h-8" />
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                      onClick={() =>
                        document.getElementById("logo-upload")?.click()
                      }
                    >
                      <Camera className="text-white w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        document.getElementById("logo-upload")?.click()
                      }
                    >
                      Changer le logo
                    </Button>
                    <input
                      id="logo-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Carré, max 2 Mo.
                    </p>
                    {errors.company_logo && (
                      <p className="text-xs text-destructive font-medium">
                        {errors.company_logo}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t space-y-6">
              <div className="space-y-3">
                <Label className="text-base font-semibold block">
                  Image principale à afficher
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      data.primary_image_display === "avatar"
                        ? "border-green-600 bg-green-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setData("primary_image_display", "avatar")}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        data.primary_image_display === "avatar"
                          ? "border-green-600 bg-green-600"
                          : "border-slate-300"
                      }`}
                    >
                      {data.primary_image_display === "avatar" && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">Ma photo de profil</p>
                      <p className="text-xs text-muted-foreground">
                        Afficher votre photo personnelle
                      </p>
                    </div>
                  </div>

                  <div
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      data.primary_image_display === "company_logo"
                        ? "border-green-600 bg-green-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() =>
                      setData("primary_image_display", "company_logo")
                    }
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        data.primary_image_display === "company_logo"
                          ? "border-green-600 bg-green-600"
                          : "border-slate-300"
                      }`}
                    >
                      {data.primary_image_display === "company_logo" && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        Le logo de mon entreprise
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Afficher l'identité de votre entreprise
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold block">
                  Nom principal à afficher sur le site
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      data.primary_name_display === "personal"
                        ? "border-green-600 bg-green-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setData("primary_name_display", "personal")}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        data.primary_name_display === "personal"
                          ? "border-green-600 bg-green-600"
                          : "border-slate-300"
                      }`}
                    >
                      {data.primary_name_display === "personal" && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">Mon nom personnel</p>
                      <p className="text-xs text-muted-foreground">
                        Afficher {data.name}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      data.primary_name_display === "company"
                        ? "border-green-600 bg-green-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setData("primary_name_display", "company")}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        data.primary_name_display === "company"
                          ? "border-green-600 bg-green-600"
                          : "border-slate-300"
                      }`}
                    >
                      {data.primary_name_display === "company" && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        Le nom de mon entreprise
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Afficher {data.company_name || "(Nom non renseigné)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Info Card */}
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-green-600" />
              Informations Personnelles
            </CardTitle>
            <CardDescription>Vos informations principales.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                disabled
                className="disabled:opacity-70"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
                disabled
                className="disabled:opacity-70"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Ville</Label>
              <Input
                id="city"
                value={data.city}
                onChange={(e) => setData("city", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors.city && (
                <p className="text-sm text-destructive">{errors.city}</p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="province">Province</Label>
              <Input
                id="province"
                value={data.province}
                onChange={(e) => setData("province", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors.province && (
                <p className="text-sm text-destructive">{errors.province}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Company Details Card */}
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-green-600" />
              Informations sur l'entreprise
            </CardTitle>
            <CardDescription>
              Détails sur votre structure ou entreprise.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company_name">Nom de l'entreprise</Label>
                <Input
                  id="company_name"
                  value={data.company_name}
                  onChange={(e) => setData("company_name", e.target.value)}
                  placeholder="Ex: Ma Structure Agricole"
                  className="focus-visible:ring-green-600"
                />
                {errors.company_name && (
                  <p className="text-sm text-destructive">
                    {errors.company_name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company_website">Site Web d'entreprise</Label>
                <Input
                  id="company_website"
                  value={data.company_website}
                  onChange={(e) => setData("company_website", e.target.value)}
                  placeholder="https://mon-entreprise.com"
                  className="focus-visible:ring-green-600"
                />
                {errors.company_website && (
                  <p className="text-sm text-destructive">
                    {errors.company_website}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company_phone">Téléphone d'entreprise</Label>
                <Input
                  id="company_phone"
                  value={data.company_phone}
                  onChange={(e) => setData("company_phone", e.target.value)}
                  className="focus-visible:ring-green-600"
                />
                {errors.company_phone && (
                  <p className="text-sm text-destructive">
                    {errors.company_phone}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company_address">Adresse d'entreprise</Label>
                <Input
                  id="company_address"
                  value={data.company_address}
                  onChange={(e) => setData("company_address", e.target.value)}
                  className="focus-visible:ring-green-600"
                />
                {errors.company_address && (
                  <p className="text-sm text-destructive">
                    {errors.company_address}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company_description">
                Description de l'entreprise
              </Label>
              <Textarea
                id="company_description"
                placeholder="Présentez votre entreprise..."
                className="min-h-[100px] text-base resize-none focus-visible:ring-green-600"
                value={data.company_description}
                onChange={(e) => setData("company_description", e.target.value)}
              />
              {errors.company_description && (
                <p className="text-sm text-destructive">
                  {errors.company_description}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Bio Card */}
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              Biographie
            </CardTitle>
            <CardDescription>
              Une courte description pour vous présenter.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-3">
              <Textarea
                id="bio"
                placeholder="Ex: Passionné par l'agriculture durable depuis 10 ans..."
                className="min-h-[150px] text-base resize-none focus-visible:ring-green-600"
                value={data.bio}
                onChange={(e) => setData("bio", e.target.value)}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Mise en forme automatique</span>
                <span>{data.bio.length}/1000 caractères</span>
              </div>
              {errors.bio && (
                <p className="text-sm text-destructive">{errors.bio}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Social Links Card */}
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-600" />
              Réseaux Sociaux
            </CardTitle>
            <CardDescription>
              Où peut-on vous trouver en ligne ?
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="linkedin"
                className="flex items-center gap-2 font-semibold"
              >
                <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
              </Label>
              <Input
                id="linkedin"
                placeholder="https://linkedin.com/in/..."
                value={data.social_links.linkedin}
                onChange={(e) => updateSocialLink("linkedin", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors["social_links.linkedin"] && (
                <p className="text-sm text-destructive">
                  {errors["social_links.linkedin"]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="facebook"
                className="flex items-center gap-2 font-semibold"
              >
                <Facebook className="w-4 h-4 text-blue-500" /> Facebook
              </Label>
              <Input
                id="facebook"
                placeholder="https://facebook.com/..."
                value={data.social_links.facebook}
                onChange={(e) => updateSocialLink("facebook", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors["social_links.facebook"] && (
                <p className="text-sm text-destructive">
                  {errors["social_links.facebook"]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="twitter"
                className="flex items-center gap-2 font-semibold"
              >
                <Twitter className="w-4 h-4 text-sky-500" /> X (Twitter)
              </Label>
              <Input
                id="twitter"
                placeholder="https://twitter.com/..."
                value={data.social_links.twitter}
                onChange={(e) => updateSocialLink("twitter", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors["social_links.twitter"] && (
                <p className="text-sm text-destructive">
                  {errors["social_links.twitter"]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="instagram"
                className="flex items-center gap-2 font-semibold"
              >
                <Instagram className="w-4 h-4 text-pink-600" /> Instagram
              </Label>
              <Input
                id="instagram"
                placeholder="https://instagram.com/..."
                value={data.social_links.instagram}
                onChange={(e) => updateSocialLink("instagram", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors["social_links.instagram"] && (
                <p className="text-sm text-destructive">
                  {errors["social_links.instagram"]}
                </p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label
                htmlFor="website"
                className="flex items-center gap-2 font-semibold"
              >
                <Globe className="w-4 h-4 text-slate-600" /> Site Web Personnel
              </Label>
              <Input
                id="website"
                placeholder="https://votre-site.com"
                value={data.social_links.website}
                onChange={(e) => updateSocialLink("website", e.target.value)}
                className="focus-visible:ring-green-600"
              />
              {errors["social_links.website"] && (
                <p className="text-sm text-destructive">
                  {errors["social_links.website"]}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="sticky bottom-4 z-10 flex justify-end gap-4 bg-background/80 backdrop-blur-md p-4 rounded-lg border shadow-lg">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={processing}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            disabled={processing}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white min-w-[150px]"
          >
            {processing && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            <Save className="w-4 h-4 mr-2" />
            Enregistrer
          </Button>
          {recentlySuccessful && (
            <span className="text-sm text-green-600 font-medium self-center animate-in fade-in slide-in-from-right-2">
              Modifications enregistrées !
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
