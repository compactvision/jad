<?php

namespace App\Modules\Member\Infrastructure;

use App\Modules\Member\Domain\Repositories\MemberRepositoryInterface;
use App\Modules\Member\Infrastructure\Eloquent\EloquentMemberRepository;
use App\Modules\Member\Infrastructure\Email\EmailSenderInterface;
use App\Modules\Member\Infrastructure\Email\LaravelEmailSender;
use Illuminate\Support\ServiceProvider;

class MemberServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(MemberRepositoryInterface::class, EloquentMemberRepository::class);
        $this->app->bind(EmailSenderInterface::class, LaravelEmailSender::class);
    }
}