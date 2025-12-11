<?php

namespace App\Modules\Member\Application\Services;

use App\Modules\Member\Domain\Entities\Member;
use App\Modules\Member\Domain\Enums\Role;
use App\Modules\Member\Domain\Enums\Sector;
use App\Modules\Member\Domain\Repositories\MemberRepositoryInterface;
use App\Modules\Member\Infrastructure\Email\EmailSenderInterface;
use Illuminate\Http\UploadedFile; 
use Illuminate\Support\Str;

class RegisterMemberService
{
    public function __construct(private MemberRepositoryInterface $memberRepository, private EmailSenderInterface $emailSender) {}

    public function execute(array $data, ?UploadedFile $avatar = null): Member
    {
        if ($this->memberRepository->findByEmail($data['email'])) {
            throw new MemberAlreadyExistsException("Un membre avec cet email existe déjà.");
        }



        $activationToken = Str::random(60);
        $password = Str::random(10); // Générer un mot de passe aléatoire

        $member = new Member(
            id: null,
            name: $data['name'],
            email: $data['email'],
            phone: $data['phone'],
            role: Role::from($data['role']),
            province: $data['province'],
            city: $data['city'],
            sector: Sector::from($data['sector']),
            activationToken: $activationToken,
            password: $password // Passer le mot de passe à l'entité
        );

        $memberDto = $this->memberRepository->save($member, $avatar);

        $this->emailSender->sendWelcomeEmail($memberDto, $password); // Envoyer le mot de passe par email

        return $memberDto;
    }
}