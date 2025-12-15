<?php

namespace App\Modules\Member\Application\Queries;

class GetProfileStatsQuery
{
    public function __construct(
        public int $userId
    ) {}
}
