<?php

namespace App\Modules\Activity\Application\Queries;

class GetRecentActivitiesQuery
{
    public function __construct(
        public int $userId,
        public int $limit = 10
    ) {}
}
