// components/profile/components/ProfileEdit.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    member.avatar ? `/storage/${member.avatar}` : null
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
              Photo de profil
            </CardTitle>
            <CardDescription>
              Votre photo de profil visible par les autres membres.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Avatar className="relative w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-xl">
                  <AvatarImage
                    src={previewUrl || undefined}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl md:text-3xl font-bold bg-white text-green-800">
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

              <div className="space-y-4 flex-1 text-center sm:text-left">
                <div className="space-y-1">
                  <Label
                    htmlFor="avatar-upload"
                    className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-10 px-6 py-2"
                  >
                    Changer la photo
                  </Label>
                  <input
                    id="avatar-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommandé: Image carrée, max 2 Mo. (JPG, PNG)
                </p>
                {errors.avatar && (
                  <p className="text-sm text-destructive font-medium">
                    {errors.avatar}
                  </p>
                )}
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

        {/* Bio Card */}
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-600" />
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