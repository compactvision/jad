import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

const MemberCard = ({ member }: { member: any }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return <FaLinkedin className="w-5 h-5" />;
      case "twitter":
        return <FaTwitter className="w-5 h-5" />;
      case "facebook":
        return <FaFacebook className="w-5 h-5" />;
      case "instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "website":
        return <FaGlobe className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const displayName =
    member.primary_name_display === "company" && member.company_name
      ? member.company_name
      : member.name;

  const displayImage =
    member.primary_image_display === "company_logo" && member.company_logo
      ? `/storage/${member.company_logo}`
      : member.avatar
        ? `/storage/${member.avatar}`
        : "/images/default-avatar.png";

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200/50 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
        {/* Conteneur de l'image circulaire */}
        <div className="relative mx-auto w-40 h-40 mb-6">
          {/* Anneau coloré qui apparaît au survol */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>

          {/* Image de profil */}
          <img
            src={displayImage}
            alt={`${displayName} portrait`}
            className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
          />

          {/* Badge "Ultra Perfectionniste" */}
          {member.category === "ultra perfectionniste" && (
            <div className="absolute -bottom-2 -right-2 z-20 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-lg overflow-hidden">
              <div className="absolute inset-0 shimmer"></div>
              <span
                className="relative z-10 text-xl"
                title="Top Perfectionniste"
              >
                ★
              </span>
            </div>
          )}
        </div>

        {/* Contenu Texte */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-1">
            {displayName}
          </h3>
          <p className="text-sm font-semibold text-green-600 mb-2">
            {member.roles?.join(", ")}
          </p>
          <p className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">
            {member.sectors?.join(", ")}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {member.description || member.bio}
          </p>
        </div>

        {/* Icônes Sociales */}
        <div className="flex justify-center items-center space-x-3 mt-6">
          {member.social_links &&
            Object.entries(member.social_links)
              .filter(([_, link]) => link) // Filter out empty links
              .map(([platform, link]) => (
                <a
                  key={platform}
                  href={link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 bg-slate-100 rounded-full transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-110 hover:shadow-md"
                  aria-label={`Lien vers le profil ${platform} de ${displayName}`}
                >
                  {getSocialIcon(platform)}
                </a>
              ))}
        </div>
      </div>
    </>
  );
};

export default MemberCard;
