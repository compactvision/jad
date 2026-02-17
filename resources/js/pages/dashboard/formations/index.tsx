import { useState } from "react";
import { DashLayout } from "@/layouts/dasboard/DashLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Eye, FileText, Check, X } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useForm, router, Link } from "@inertiajs/react";
import { toast } from "sonner";

interface Training {
  id: number;
  title: string;
  description: string;
  pdf_path: string;
  allowed_pages: number;
  is_public: boolean;
  color: string;
  created_at: string;
}

export default function FormationIndex({
  trainings,
}: {
  trainings: Training[];
}) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [trainingToDelete, setTrainingToDelete] = useState<Training | null>(
    null,
  );

  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    description: "",
    pdf: null as File | null,
    allowed_pages: 10,
    is_public: true,
    color: "#064e3b",
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("formations.store"), {
      onSuccess: () => {
        setIsAddDialogOpen(false);
        reset();
        toast.success("Formation ajoutée avec succès");
      },
    });
  };

  const handleDelete = () => {
    if (trainingToDelete) {
      router.delete(route("formations.destroy", trainingToDelete.id), {
        onSuccess: () => {
          setTrainingToDelete(null);
          toast.success("Formation supprimée");
        },
      });
    }
  };

  const columns: Column<Training>[] = [
    {
      key: "title",
      header: "Titre",
      render: (t) => (
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: t.color ? `${t.color}15` : "#f0f9ff" }}
          >
            <FileText
              className="w-5 h-5"
              style={{ color: t.color || "#3b82f6" }}
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">{t.title}</p>
            <p className="text-xs text-gray-500 truncate max-w-[200px]">
              {t.description}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "allowed_pages",
      header: "Pages autorisées",
    },
    {
      key: "is_public",
      header: "Public",
      render: (t) =>
        t.is_public ? (
          <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm">
            <Check className="w-4 h-4" /> Oui
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-gray-400 font-medium text-sm">
            <X className="w-4 h-4" /> Non
          </span>
        ),
    },
    {
      key: "created_at",
      header: "Créé le",
      render: (t) => new Date(t.created_at).toLocaleDateString(),
    },
    {
      key: "id",
      header: "Actions",
      render: (t) => (
        <div className="flex justify-end gap-2">
          <Link href={route("formations.show.admin", t.id)}>
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4 text-gray-500 hover:text-blue-600" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTrainingToDelete(t)}
          >
            <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-600" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashLayout>
      <PageHeader
        title="Gestion des Formations"
        description="Ajoutez et gérez les formations PDF"
      >
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle Formation
        </Button>
      </PageHeader>

      <div className="mt-8">
        <DataTable columns={columns} data={trainings} />
      </div>

      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Ajouter une formation</DialogTitle>
            <DialogDescription>
              Remplissez les détails et uploadez le fichier PDF.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre</Label>
              <Input
                id="title"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                placeholder="Ex: Guide de l'agriculteur"
                required
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                placeholder="Brève description de la formation..."
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="allowed_pages">Pages autorisées</Label>
                <Input
                  id="allowed_pages"
                  type="number"
                  min="1"
                  value={data.allowed_pages}
                  onChange={(e) =>
                    setData("allowed_pages", parseInt(e.target.value))
                  }
                  required
                />
                {errors.allowed_pages && (
                  <p className="text-sm text-red-500">{errors.allowed_pages}</p>
                )}
              </div>

              <div className="flex items-center space-x-2 pt-8">
                <Switch
                  id="is_public"
                  checked={data.is_public}
                  onCheckedChange={(val) => setData("is_public", val)}
                />
                <Label htmlFor="is_public">Public</Label>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Couleur du livre</Label>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Emeraude", color: "#064e3b" },
                  { name: "Bleu Nuit", color: "#1e3a8a" },
                  { name: "Bordeaux", color: "#7f1d1d" },
                  { name: "Violet", color: "#4c1d95" },
                  { name: "Ardoise", color: "#0f172a" },
                  { name: "Terre", color: "#451a03" },
                ].map((c) => (
                  <button
                    key={c.color}
                    type="button"
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      data.color === c.color
                        ? "border-blue-500 scale-110 shadow-md"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.color }}
                    onClick={() => setData("color", c.color)}
                    title={c.name}
                  />
                ))}
                <div className="flex items-center gap-2 ml-2">
                  <Input
                    type="color"
                    value={data.color}
                    onChange={(e) => setData("color", e.target.value)}
                    className="w-10 h-10 p-0 border-none rounded-full overflow-hidden cursor-pointer"
                  />
                  <span className="text-xs text-gray-400 font-mono uppercase">
                    {data.color}
                  </span>
                </div>
              </div>
              {errors.color && (
                <p className="text-sm text-red-500">{errors.color}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="pdf">Fichier PDF</Label>
              <Input
                id="pdf"
                type="file"
                accept="application/pdf"
                onChange={(e) => setData("pdf", e.target.files?.[0] || null)}
                required
              />
              {errors.pdf && (
                <p className="text-sm text-red-500">{errors.pdf}</p>
              )}
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={processing}>
                {processing ? "Chargement..." : "Ajouter"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog
        open={!!trainingToDelete}
        onOpenChange={() => setTrainingToDelete(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la formation "
              {trainingToDelete?.title}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTrainingToDelete(null)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashLayout>
  );
}
