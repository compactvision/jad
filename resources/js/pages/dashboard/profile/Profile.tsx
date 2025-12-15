// components/profile/index.tsx

import { useState } from "react";
import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { ProfileView } from "@/components/profile/components/ProfileView";
import { ProfileEdit } from "@/components/profile/components/ProfileEdit";
import { ProfileProps } from "@/components/profile/types";

export default function Profile({
  member,
  stats,
  projects,
  activities,
  achievements,
}: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <DashLayout>
      {!isEditing && (
        <div className="pb-10">
          <ProfileView
            member={member}
            stats={stats}
            projects={projects}
            activities={activities}
            achievements={achievements}
            onEdit={() => setIsEditing(true)}
          />
        </div>
      )}

      {isEditing && (
        <ProfileEdit member={member} onCancel={() => setIsEditing(false)} />
      )}
    </DashLayout>
  );
}