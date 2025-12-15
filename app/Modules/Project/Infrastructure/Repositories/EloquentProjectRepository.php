<?php

namespace App\Modules\Project\Infrastructure\Repositories;

use App\Modules\Project\Domain\Entities\Project as ProjectEntity;
use App\Modules\Project\Domain\Repositories\ProjectRepositoryInterface;
use App\Modules\Project\Infrastructure\Eloquent\Project as EloquentProject;

class EloquentProjectRepository implements ProjectRepositoryInterface
{
    public function getRecentByUserId(int $userId, int $limit = 5): array
    {
        $projects = EloquentProject::where('user_id', $userId)
            ->latest()
            ->limit($limit)
            ->get();

        return $projects->map(fn($project) => $this->toDomainEntiy($project))->toArray();
    }

    public function countByUserId(int $userId): int
    {
        return EloquentProject::where('user_id', $userId)->count();
    }

    private function toDomainEntiy(EloquentProject $model): ProjectEntity
    {
        return new ProjectEntity(
            $model->id,
            $model->user_id,
            $model->title,
            $model->description,
            $model->status,
            $model->created_at,
            $model->updated_at
        );
    }
}
