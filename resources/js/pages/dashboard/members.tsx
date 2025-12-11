import { Plus, Mail, Phone, Shield } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { DataTable, Column } from "@/components/common/DataTable";
import { StatusBadge } from "@/components/common/StatusBadge";
import { cn } from "@/lib/utils";
import { DashLayout } from "@/layouts/dasboard/DashLayout";

interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "gestionnaire" | "agriculteur";
  farm: string;
  status: "active" | "inactive";
  avatar: string;
}

const members: Member[] = [
  {
    id: "1",
    name: "Marie Dupont",
    email: "marie.dupont@fermesoleil.fr",
    phone: "+33 6 12 34 56 78",
    role: "admin",
    farm: "Ferme du Soleil",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Jean Martin",
    email: "jean.martin@fermesoleil.fr",
    phone: "+33 6 23 45 67 89",
    role: "gestionnaire",
    farm: "Ferme du Soleil",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Pierre Leroy",
    email: "pierre.leroy@fermecollines.fr",
    phone: "+33 6 34 56 78 90",
    role: "agriculteur",
    farm: "Ferme des Collines",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    name: "Sophie Bernard",
    email: "sophie.bernard@domainevallée.fr",
    phone: "+33 6 45 67 89 01",
    role: "gestionnaire",
    farm: "Domaine de la Vallée",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    name: "Lucas Petit",
    email: "lucas.petit@fermebionord.fr",
    phone: "+33 6 56 78 90 12",
    role: "agriculteur",
    farm: "Ferme Bio du Nord",
    status: "inactive",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const roleColors = {
  admin: "bg-green-600 text-white",
  gestionnaire: "bg-sky-500 text-white",
  agriculteur: "bg-emerald-500 text-white",
};

const roleLabels = {
  admin: "Administrateur",
  gestionnaire: "Gestionnaire",
  agriculteur: "Agriculteur",
};

const columns: Column<Member>[] = [
  {
    key: "name",
    header: "Membre",
    render: (member) => (
      <div className="flex items-center gap-3">
        <img 
          src={member.avatar} 
          alt={member.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">{member.name}</p>
          <p className="text-xs text-gray-500">{member.farm}</p>
        </div>
      </div>
    ),
  },
  {
    key: "email",
    header: "Contact",
    render: (member) => (
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="h-3 w-3 text-gray-400" />
          <span className="text-gray-600">{member.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-3 w-3 text-gray-400" />
          <span className="text-gray-600">{member.phone}</span>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    header: "Rôle",
    render: (member) => (
      <div className="flex items-center gap-2">
        <span className={cn(
          "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
          roleColors[member.role]
        )}>
          <Shield className="h-3 w-3" />
          {roleLabels[member.role]}
        </span>
      </div>
    ),
  },
  {
    key: "status",
    header: "Statut",
    render: (member) => (
      <StatusBadge 
        status={member.status} 
        label={member.status === "active" ? "Actif" : "Inactif"} 
      />
    ),
  },
];

export default function Members() {
  return (
    <DashLayout>
      <PageHeader 
        title="Membres" 
        description="Gérez les membres de vos fermes"
      >
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Inviter un membre
        </Button>
      </PageHeader>

      {/* Role summary */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">4</p>
            <p className="text-sm text-gray-500">Administrateurs</p>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-sky-500 flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-500">Gestionnaires</p>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">18</p>
            <p className="text-sm text-gray-500">Agriculteurs</p>
          </div>
        </div>
      </div>

      <DataTable 
        columns={columns} 
        data={members}
        onRowClick={(member) => console.log("Clicked:", member)}
      />
    </DashLayout>
  );
}