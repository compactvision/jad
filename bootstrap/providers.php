<?php

return [
    App\Providers\AppServiceProvider::class,
    App\Providers\FortifyServiceProvider::class,
    App\Modules\Member\Infrastructure\MemberServiceProvider::class,
    App\Modules\Project\Infrastructure\Providers\ProjectServiceProvider::class,
    App\Modules\Activity\Infrastructure\Providers\ActivityServiceProvider::class,
];
