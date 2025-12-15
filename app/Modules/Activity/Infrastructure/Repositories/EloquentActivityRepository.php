<?php

namespace App\Modules\Activity\Infrastructure\Repositories;

use App\Modules\Activity\Domain\Entities\Activity as ActivityEntity;
use App\Modules\Activity\Domain\Repositories\ActivityRepositoryInterface;
use App\Modules\Activity\Infrastructure\Eloquent\ActivityLog as EloquentActivityLog;

class EloquentActivityRepository implements ActivityRepositoryInterface
{
    public function getRecentByUserId(int $userId, int $limit = 10): array
    {
        $activities = EloquentActivityLog::where('user_id', $userId)
            ->latest()
            ->limit($limit)
            ->get();

        return $activities->map(fn($activity) => $this->toDomainEntity($activity))->toArray();
    }

    public function log(int $userId, string $action, ?string $description = null, ?string $iconType = null): void
    {
        EloquentActivityLog::create([
            'user_id' => $userId,
            'action' => $action,
            'description' => $description,
            'icon_type' => $iconType,
        ]);
    }

    private function toDomainEntity(EloquentActivityLog $model): ActivityEntity
    {
        return new ActivityEntity(
            $model->id,
            $model->user_id,
            $model->action,
            $model->description,
            $model->icon_type,
            $model->created_at
        );
    }
}
