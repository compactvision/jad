<?php

namespace App\Modules\Member\Domain\Repositories;

use App\Modules\Member\Domain\Entities\Member;
use App\Modules\Member\Domain\Enums\Role;

interface MemberRepositoryInterface
{
    public function save(Member $member): Member;
    public function findByEmail(string $email): ?Member;
    public function findById(int $id): ?Member;
    public function getStatistics(): array; // Pour le dashboard JAD
    public function getBreederData(int $memberId): array; // Pour le dashboard Éleveur
    public function getSupplierData(int $memberId): array; // Pour le dashboard Fournisseur
    public function getExpertData(int $memberId): array; // Pour le dashboard Expert
}