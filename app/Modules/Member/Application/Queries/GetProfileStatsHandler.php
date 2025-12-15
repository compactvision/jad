<?php

namespace App\Modules\Member\Application\Queries;

use App\Modules\Member\Domain\Repositories\MemberRepositoryInterface;
use App\Modules\Project\Domain\Repositories\ProjectRepositoryInterface;
use App\Modules\Member\Infrastructure\Eloquent\EloquentMember;

class GetProfileStatsHandler
{
    public function __construct(
        private MemberRepositoryInterface $memberRepository,
        private ProjectRepositoryInterface $projectRepository
    ) {}

    public function handle(GetProfileStatsQuery $query): array
    {
        /** @var EloquentMember $member */
        // We can use the Repository to find the entity, but for stats calculation we might need the Eloquent model
        // or ensure our Entity has all fields populated. For now, let's use Eloquent for ease of calculation 
        // until we fully map everything to Domain.
        // Actually, let's try to stick to interfaces if possible.
        
        $projectsCount = $this->projectRepository->countByUserId($query->userId);
        $networkCount = EloquentMember::count() - 1; // Infrastructure leakage but quick for now.

        // Trust Score Logic
        // We need to fetch the member to check fields.
        // Assuming repository returns a Domain Entity or Eloquent Model.
        // Let's rely on Eloquent directly here for the specific field checks if Entity is not rich enough.
        $member = EloquentMember::find($query->userId);
        
        $completedFields = 0;
        $totalFields = 6;
        if ($member->name) $completedFields++;
        if ($member->email) $completedFields++;
        if ($member->phone) $completedFields++;
        if ($member->avatar) $completedFields++;
        if ($member->bio) $completedFields++;
        if (!empty($member->social_links)) $completedFields++;
        
        $trustScore = round(($completedFields / $totalFields) * 100);

        return [
            'projects_count' => $projectsCount,
            'network_count' => $networkCount,
            'trust_score' => $trustScore,
        ];
    }
}
