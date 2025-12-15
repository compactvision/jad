import { useState, useCallback } from "react";
import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Search, Shield, Pencil } from "lucide-react";
import { DataTable, Column } from "@/components/common/DataTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, router } from "@inertiajs/react";
import { debounce } from "lodash";

interface Role {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

interface PaginatedUsers {
  data: User[];
  links: any[]; // We can improve types later
  total: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

export default function Users({
  users,
  roles,
  filters,
}: {
  users: PaginatedUsers;
  roles: Role[];
  filters: { search?: string };
}) {
  const [search, setSearch] = useState(filters.search || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const { data, setData, put, processing, errors, reset } = useForm({
    role: "",
  });

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      router.get(
        route("users.index"),
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

  const openEditDialog = (user: User) => {
    setEditingUser(user);
    setData("role", user.role); // Pre-fill with current role
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      put(route("users.update", editingUser.id), {
        onSuccess: () => setIsDialogOpen(false),
      });
    }
  };

  const columns: Column<User>[] = [
    {
      key: "name",
      header: "Utilisateur",
      render: (user) => (
        <div>
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      ),
    },
    {
      key: "role",
      header: "Rôle",
      render: (user) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
          <Shield className="w-3 h-3 mr-1" />
          {user.role}
        </span>
      ),
    },
    {
      key: "created_at",
      header: "Inscrit le",
    },
    {
      key: "id",
      header: "",
      render: (user) => (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => openEditDialog(user)}
          >
            <Pencil className="h-4 w-4 text-gray-500 hover:text-blue-600" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashLayout>
      <PageHeader
        title="Gestion des Utilisateurs"
        description="Gérez les comptes utilisateurs et leurs rôles"
      >
        {/* Potentially an 'Invite User' button here later */}
      </PageHeader>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher par nom ou email..."
            className="pl-9"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="space-y-4">
        <DataTable columns={columns} data={users.data} />
        {/* Simple Pagination Controls */}
        {users.total > 10 && (
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={!users.prev_page_url}
              onClick={() =>
                users.prev_page_url && router.get(users.prev_page_url)
              }
            >
              Précédent
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!users.next_page_url}
              onClick={() =>
                users.next_page_url && router.get(users.next_page_url)
              }
            >
              Suivant
            </Button>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le rôle de {editingUser?.name}</DialogTitle>
            <DialogDescription>
              Assignez un nouveau rôle système à cet utilisateur.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Rôle</Label>
              <Select
                value={data.role}
                onValueChange={(val) => setData("role", val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un rôle" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.id} value={role.name}>
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-sm text-red-500">{errors.role}</p>
              )}
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={processing}>
                Enregistrer
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashLayout>
  );
}
