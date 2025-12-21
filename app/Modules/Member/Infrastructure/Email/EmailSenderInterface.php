<?php 

namespace App\Modules\Member\Infrastructure\Email;
use App\Modules\Member\Domain\Entities\Member;

interface EmailSenderInterface
{
    public function sendWelcomeEmail(Member $member, string $password): void;
    public function sendMemberValidatedEmail(Member $member): void;
}
