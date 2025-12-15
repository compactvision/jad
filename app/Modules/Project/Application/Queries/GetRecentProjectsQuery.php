<?php

namespace App\Modules\Project\Application\Queries;

class GetRecentProjectsQuery
{
    public function __construct(
        public int $userId,
        public int $limit = 5
    ) {}
}
