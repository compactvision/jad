import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    router.post(
      "/login",
      { email, password },
      {
        onFinish: () => setIsLoading(false),
        onError: (err) => {
          setErrors(err);
          // Optional: Show toast notification
        },
      }
    );
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <Head title="Connexion" />

      {/* Left: Login Form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left space-y-2">
            {/* Logo Placeholder */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              Bon retour parmi nous
            </h1>
            <p className="text-muted-foreground">
              Entrez vos coordonnées pour accéder à votre espace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nom@exemple.com"
                    className="pl-10 h-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Se souvenir de moi
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            <Button
              className="w-full h-10 text-base"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Connexion..." : "Se connecter"}
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </div>
      </div>

      {/* Right: Feature/Image Side */}
      <div className="hidden lg:flex flex-col justify-between bg-zinc-900 p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Abstract Pattern or Image */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 font-bold text-xl mb-8">
            {/* Brand Logo or Name */}
            <span>JAD Compact</span>
          </div>
        </div>

        <div className="relative z-10 space-y-6 max-w-lg">
          <h2 className="text-4xl font-display font-bold leading-tight">
            Gérez vos membres et votre activité agricole en toute simplicité.
          </h2>
          <ul className="space-y-4">
            {[
              "Suivi des producteurs en temps réel",
              "Gestion administrative simplifiée",
              "Tableaux de bord intuitifs",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-primary/20 text-primary ring-1 ring-primary/50">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-zinc-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 text-zinc-500 text-sm">
          © 2024 JAD Compact. Tous droits réservés.
        </div>
      </div>
    </div>
  );
}
