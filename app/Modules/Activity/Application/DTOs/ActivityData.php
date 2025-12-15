<?php

namespace App\Modules\Activity\Application\DTOs;

class ActivityData
{
    public function __construct(
        public int $id,
        public string $action,
        public string $description,
        public ?string $icon_type,
        public string $created_at
    ) {}
}
