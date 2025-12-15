import { useState } from "react";
import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Plus, Shield, Pencil, Trash2 } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, router } from "@inertiajs/react";
import { cn } from "@/lib/utils";

interface Permission {
  id: number;
  name: string;
}

interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}

interface RolesPageProps {
  roles: Role[];
  permissions: Permission[];
}

export default function Roles({ roles, permissions }: RolesPageProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const { data, setData, post, put, processing, errors, reset, clearErrors } =
    useForm({
      name: "",
      permissions: [] as string[],
    });

  const openCreateDialog = () => {
    setEditingRole(null);
    reset();
    clearErrors();
    setIsDialogOpen(true);
  };

  const openEditDialog = (role: Role) => {
    setEditingRole(role);
    setData({
      name: role.name,
      permissions: role.permissions.map((p) => p.name),
    });
    clearErrors();
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingRole) {
      put(route("roles.update", editingRole.id), {
        onSuccess: () => setIsDialogOpen(false),
      });
    } else {
      post(route("roles.store"), {
        onSuccess: () => setIsDialogOpen(false),
      });
    }
  };

  const togglePermission = (permissionName: string) => {
    if (data.permissions.includes(permissionName)) {
      setData(
        "permissions",
        data.permissions.filter((p) => p !== permissionName)
      );
    } else {
      setData("permissions", [...data.permissions, permissionName]);
    }
  };

  const handleDelete = (role: Role) => {
    if (
      confirm(`Êtes-vous sûr de vouloir supprimer le rôle "${role.name}" ?`)
    ) {
      router.delete(route("roles.destroy", role.id));
    }
  };

  const columns: Column<Role>[] = [
    {
      key: "name",
      header: "Rôle",
      render: (role) => (
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-green-600" />
          <span className="font-medium capitalize">
            {role.name.replace("_", " ")}
          </span>
        </div>
      ),
    },
    {
      key: "permissions",
      header: "Permissions",
      render: (role) => (
        <div className="flex flex-wrap gap-1">
          {role.permissions.slice(0, 3).map((p) => (
            <span
              key={p.id}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
            >
              {p.name}
            </span>
          ))}
          {role.permissions.length > 3 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
              +{role.permissions.length - 3}
            </span>
          )}
        </div>
      ),
    },
    {
      key: "id",
      header: "",
      render: (role) => (
        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              openEditDialog(role);
            }}
          >
            <Pencil className="h-4 w-4 text-gray-500 hover:text-green-600" />
          </Button>
          {!["super_admin", "admin", "user", "administrateur_jad"].includes(
            role.name
          ) && (
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(role);
              }}
            >
              <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-600" />
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <DashLayout>
      <PageHeader
        title="Rôles & Permissions"
        description="Gérez les rôles et leurs accès au système"
      >
        <Button onClick={openCreateDialog} variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Rôle
        </Button>
      </PageHeader>

      <div className="mt-6">
        <DataTable columns={columns} data={roles} />
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingRole ? "Modifier le rôle" : "Créer un nouveau rôle"}
            </DialogTitle>
            <DialogDescription>
              Définissez le nom du rôle et les permissions associées.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom du rôle</Label>
              <Input
                id="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                placeholder="ex: Editeur"
                required
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-3">
              <Label>Permissions</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto p-1 border rounded-md">
                {permissions.map((permission) => (
                  <div
                    key={permission.id}
                    className="flex items-start space-x-2"
                  >
                    <Checkbox
                      id={`perm-${permission.id}`}
                      checked={data.permissions.includes(permission.name)}
                      onCheckedChange={() => togglePermission(permission.name)}
                    />
                    <label
                      htmlFor={`perm-${permission.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {permission.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Annuler
              </Button>
              <Button type="submit" variant="accent" disabled={processing}>
                {editingRole ? "Mettre à jour" : "Créer le rôle"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashLayout>
  );
}
