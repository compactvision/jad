<?php

namespace App\Modules\Member\Application\Services;

use App\Modules\Member\Domain\Entities\Member;
use App\Modules\Member\Domain\Repositories\MemberRepositoryInterface;

class GetDashboardDataService
{
    public function __construct(private MemberRepositoryInterface $memberRepository) {}

    public function execute(Member $member): array
    {
        return match($member->getRole()) {
            Role::BREEDER => $this->memberRepository->getBreederData($member->getId()),
            Role::SUPPLIER => $this->memberRepository->getSupplierData($member->getId()),
            Role::EXPERT => $this->memberRepository->getExpertData($member->getId()),
            Role::JAD => $this->memberRepository->getStatistics(),
            default => [], // Pas de données spécifiques pour les autres rôles
        };
    }
}