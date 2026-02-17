<?php

namespace App\Modules\Member\Infrastructure\Eloquent;

use App\Modules\Member\Domain\Entities\Member;
use App\Modules\Member\Domain\Repositories\MemberRepositoryInterface;
use App\Modules\Member\Domain\Enums\Role;
use Illuminate\Http\UploadedFile;

class EloquentMemberRepository implements MemberRepositoryInterface
{
    public function save(Member $member, ?UploadedFile $avatar = null, ?UploadedFile $companyLogo = null): Member
    {
        $eloquentMember = EloquentMember::fromDomainEntity($member);
        
        if ($avatar) {
            $imagePath = $eloquentMember->uploadAvatar($avatar);
            $member->setAvatar($imagePath);
            $eloquentMember->avatar = $imagePath;
        }

        if ($companyLogo) {
            $logoPath = $eloquentMember->uploadCompanyLogo($companyLogo);
            $member->setCompanyLogo($logoPath);
            $eloquentMember->company_logo = $logoPath;
        }
        
        $eloquentMember->save();
        $member->setId($eloquentMember->id);

        // Assign Spatie roles
        $roles = array_map(fn($role) => $role->value, $member->getRoles());
        $eloquentMember->syncRoles($roles);
        
        return $member;
    }

    public function findByEmail(string $email): ?Member
    {
        return EloquentMember::where('email', $email)->first()?->toDomainEntity();
    }

    public function findById(int $id): ?Member
    {
        $eloquentMember = EloquentMember::find($id);
        return $eloquentMember?->toDomainEntity();
    }

    public function findByRole(Role $role): array
    {
        return EloquentMember::whereJsonContains('member_roles', $role->value)
            ->get()
            ->map(fn(EloquentMember $m) => $m->toDomainEntity())
            ->toArray();
    }

    // Implémentations pour les données des dashboards (retourne des tableaux pour simplifier)
    public function getStatistics(): array
    {
        $members = EloquentMember::all();
        $total = $members->count();
        
        $byRole = [];
        $bySector = [];
        
        foreach ($members as $member) {
            foreach (($member->member_roles ?? []) as $role) {
                $byRole[$role] = ($byRole[$role] ?? 0) + 1;
            }
            foreach (($member->member_sectors ?? []) as $sector) {
                $bySector[$sector] = ($bySector[$sector] ?? 0) + 1;
            }
        }
        
        return ['total' => $total, 'byRole' => $byRole, 'bySector' => $bySector];
    }

    public function getBreederData(int $memberId): array
    {
        // Logique complexe pour récupérer les données d'un éleveur
        // Exemple de données simulées
        return [
            'poultry_count' => 1500,
            'daily_consumption' => 75.5, // en kg
            'production_curve' => [120, 135, 125, 140, 155], // Exemple de données pour un graphique
            'vet_follow_up' => 'Prochain contrôle : 15/12/2023',
            'expenses' => 2500,
            'revenue' => 4200,
        ];
    }

    public function getSupplierData(int $memberId): array
    {
        return [
            'stock' => [
                ['product' => 'Aliment Type A', 'quantity' => 500, 'price' => 25],
                ['product' => 'Vaccin X', 'quantity' => 200, 'price' => 5],
            ],
            'orders_received' => 12,
        ];
    }

    public function getExpertData(int $memberId): array
    {
        return [
            'consultations_done' => 45,
            'requests_received' => 8,
            'availability' => 'Disponible du Lundi au Vendredi',
        ];
    }
}