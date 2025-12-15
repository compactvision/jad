<?php

namespace App\Modules\Project\Application\DTOs;

class ProjectData
{
    public function __construct(
        public int $id,
        public string $title,
        public string $description,
        public string $status,
        public string $created_at
    ) {}
}
