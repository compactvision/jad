<?php

namespace App\Modules\Project\Infrastructure\Providers;

use Illuminate\Support\ServiceProvider;
use App\Modules\Project\Domain\Repositories\ProjectRepositoryInterface;
use App\Modules\Project\Infrastructure\Repositories\EloquentProjectRepository;

class ProjectServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(ProjectRepositoryInterface::class, EloquentProjectRepository::class);
    }

    public function boot()
    {
        //
    }
}
