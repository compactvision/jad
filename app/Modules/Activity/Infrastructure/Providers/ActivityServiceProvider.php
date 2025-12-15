<?php

namespace App\Modules\Activity\Infrastructure\Providers;

use Illuminate\Support\ServiceProvider;
use App\Modules\Activity\Domain\Repositories\ActivityRepositoryInterface;
use App\Modules\Activity\Infrastructure\Repositories\EloquentActivityRepository;

class ActivityServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(ActivityRepositoryInterface::class, EloquentActivityRepository::class);
    }

    public function boot()
    {
        //
    }
}
