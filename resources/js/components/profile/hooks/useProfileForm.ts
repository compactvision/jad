// components/profile/hooks/useProfileForm.ts

import { useForm, router } from "@inertiajs/react";
import { Member, SocialLinks } from "../types";
import { toast } from "sonner";

export function useProfileForm(member: Member) {
  const socialLinks = member.social_links || {};

  const { data, setData, patch, processing, errors, recentlySuccessful } =
    useForm({
      name: member.name,
      email: member.email,
      phone: member.phone,
      city: member.city || "",
      province: member.province || "",
      bio: member.bio || "",
      social_links: {
        facebook: socialLinks.facebook || "",
        twitter: socialLinks.twitter || "",
        linkedin: socialLinks.linkedin || "",
        instagram: socialLinks.instagram || "",
        website: socialLinks.website || "",
      },
      avatar: null as File | null,
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.post(
      route("profile.update"),
      {
        _method: "PATCH",
        ...data,
      },
      {
        forceFormData: true,
        onSuccess: () => {
          toast.success("Profile mis à jour avec succès !");
        },
        onError: () => {
          toast.error("Une erreur est survenue lors de la mise à jour du profile");
        },
      }
    );
  };

  const updateSocialLink = (platform: keyof SocialLinks, value: string) => {
    setData("social_links", {
      ...data.social_links,
      [platform]: value,
    });
  };

  return {
    data,
    setData,
    processing,
    errors,
    recentlySuccessful,
    handleSubmit,
    updateSocialLink,
  };
}
