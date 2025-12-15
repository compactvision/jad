<?php

namespace App\Modules\Activity\Application\Queries;

use App\Modules\Activity\Domain\Repositories\ActivityRepositoryInterface;
use App\Modules\Activity\Application\DTOs\ActivityData;

class GetRecentActivitiesHandler
{
    public function __construct(
        private ActivityRepositoryInterface $activityRepository
    ) {}

    /**
     * @return ActivityData[]
     */
    public function handle(GetRecentActivitiesQuery $query): array
    {
        $activities = $this->activityRepository->getRecentByUserId($query->userId, $query->limit);

        return array_map(fn($activity) => new ActivityData(
            id: $activity->getId(),
            action: $activity->getAction(),
            description: $activity->getDescription() ?? '',
            icon_type: $activity->getIconType(),
            created_at: $activity->getCreatedAt()->format('Y-m-d H:i:s')
        ), $activities);
    }
}
