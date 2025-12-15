<?php

namespace App\Modules\Activity\Domain\Repositories;

use App\Modules\Activity\Domain\Entities\Activity;

interface ActivityRepositoryInterface
{
    /**
     * @param int $userId
     * @param int $limit
     * @return Activity[]
     */
    public function getRecentByUserId(int $userId, int $limit = 10): array;

    public function log(int $userId, string $action, ?string $description = null, ?string $iconType = null): void;
}
