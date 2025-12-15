<?php

namespace App\Modules\Activity\Application\Commands;

class LogActivityCommand
{
    public function __construct(
        public int $userId,
        public string $action,
        public ?string $description = null,
        public ?string $iconType = null
    ) {}
}
