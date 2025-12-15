<?php

namespace App\Modules\Project\Domain\Repositories;

use App\Modules\Project\Domain\Entities\Project;

interface ProjectRepositoryInterface
{
    /**
     * @param int $userId
     * @param int $limit
     * @return Project[]
     */
    public function getRecentByUserId(int $userId, int $limit = 5): array;
    
    public function countByUserId(int $userId): int;
}
