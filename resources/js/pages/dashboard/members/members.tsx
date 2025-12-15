import {
  Plus,
  Mail,
  Phone,
  Shield,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable, Column } from "@/components/common/DataTable";
import { StatusBadge } from "@/components/common/StatusBadge";
import { cn } from "@/lib/utils";
import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { router } from "@inertiajs/react";
import { useState, useCallback } from "react";
import { debounce } from "lodash";

interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  farm: string;
  status: string;
  avatar: string | null;
}

interface PaginatedMembers {
  data: Member[];
  links: any[];
  current_page: number;
  last_page: number;
  from: number;
  to: number;
  total: number;
  per_page: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

const roleColors: Record<string, string> = {
  active: "bg-green-600 text-white",
  pending: "bg-yellow-500 text-white",
  rejected: "bg-red-500 text-white",
  producteur: "bg-emerald-500 text-white",
  administrateur_jad: "bg-green-600 text-white",
  gestionnaire: "bg-sky-500 text-white",
};

const columns: Column<Member>[] = [
  {
    key: "name",
    header: "Membre",
    render: (member) => (
      <div className="flex items-center gap-3">
        <img
          src={
            member.avatar
              ? `/storage/${member.avatar}`
              : `https://ui-avatars.com/api/?name=${member.name}`
          }
          alt={member.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">{member.name}</p>
          <p className="text-xs text-gray-500 capitalize">{member.farm}</p>
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
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
            roleColors[member.role] || "bg-gray-500 text-white"
          )}
        >
          <Shield className="h-3 w-3" />
          {member.role}
        </span>
      </div>
    ),
  },
  {
    key: "status",
    header: "Statut",
    render: (member) => (
      <StatusBadge status={member.status as any} label={member.status} />
    ),
  },
];

export default function Members({
  members,
  filters,
}: {
  members: PaginatedMembers;
  filters: { search?: string };
}) {
  const [search, setSearch] = useState(filters.search || "");

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      router.get(
        route("members"),
        { search: value },
        { preserveState: true, replace: true }
      );
    }, 300),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <DashLayout>
      <PageHeader title="Membres" description="Gérez les membres de vos fermes">
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Inviter un membre
        </Button>
      </PageHeader>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher par nom, email..."
            className="pl-9"
            value={search}
            onChange={handleSearch}
          />
        </div>
        {/* Can add more filters here later */}
      </div>

      <div className="space-y-4">
        <DataTable
          columns={columns}
          data={members.data}
          onRowClick={(member) => router.get(route("members.show", member.id))}
        />

        {/* Pagination Controls */}
        {members.total > members.per_page && (
          <div className="flex items-center justify-between px-2">
            <div className="text-sm text-muted-foreground">
              Affichage de {members.from} à {members.to} sur {members.total}{" "}
              résultats
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={!members.prev_page_url}
                onClick={() =>
                  members.prev_page_url && router.get(members.prev_page_url)
                }
              >
                <ChevronLeft className="h-4 w-4 mr-2" /> Précédent
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!members.next_page_url}
                onClick={() =>
                  members.next_page_url && router.get(members.next_page_url)
                }
              >
                Suivant <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </DashLayout>
  );
}
