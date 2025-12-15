<?php

namespace App\Modules\Project\Application\Queries;

use App\Modules\Project\Domain\Repositories\ProjectRepositoryInterface;
use App\Modules\Project\Application\DTOs\ProjectData;

class GetRecentProjectsHandler
{
    public function __construct(
        private ProjectRepositoryInterface $projectRepository
    ) {}

    /**
     * @return ProjectData[]
     */
    public function handle(GetRecentProjectsQuery $query): array
    {
        $projects = $this->projectRepository->getRecentByUserId($query->userId, $query->limit);

        return array_map(fn($project) => new ProjectData(
            id: $project->getId(),
            title: $project->getTitle(),
            description: $project->getDescription() ?? '',
            status: $project->getStatus(),
            created_at: $project->getCreatedAt()->format('Y-m-d H:i:s')
        ), $projects);
    }
}
