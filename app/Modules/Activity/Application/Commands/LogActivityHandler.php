<?php

namespace App\Modules\Activity\Application\Commands;

use App\Modules\Activity\Domain\Repositories\ActivityRepositoryInterface;

class LogActivityHandler
{
    public function __construct(
        private ActivityRepositoryInterface $activityRepository
    ) {}

    public function handle(LogActivityCommand $command): void
    {
        $this->activityRepository->log(
            $command->userId,
            $command->action,
            $command->description,
            $command->iconType
        );
    }
}
