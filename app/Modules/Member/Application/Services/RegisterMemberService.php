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

    public function execute(array $data, ?UploadedFile $avatar = null, ?UploadedFile $companyLogo = null): Member
    {
        if ($this->memberRepository->findByEmail($data['email'])) {
            throw new MemberAlreadyExistsException("Un membre avec cet email existe déjà.");
        }



        $activationToken = Str::random(60);
        $password = Str::random(10); // Générer un mot de passe aléatoire

        // Convert roles and sectors arrays to enum arrays
        $roles = array_map(fn($role) => Role::from($role), $data['roles']);
        $sectors = array_map(fn($sector) => Sector::from($sector), $data['sectors']);

        $member = new Member(
            id: null,
            name: $data['name'],
            email: $data['email'],
            phone: $data['phone'],
            roles: $roles,
            province: $data['province'],
            city: $data['city'],
            sectors: $sectors,
            activationToken: $activationToken,
            password: $password // Passer le mot de passe à l'entité
        );

        $memberDto = $this->memberRepository->save($member, $avatar, $companyLogo);

        $this->emailSender->sendWelcomeEmail($memberDto, $password); // Envoyer le mot de passe par email

        // Notifier les administrateurs
        $admins = $this->memberRepository->findByRole(Role::ADMINISTRATEUR_JAD);
        if (!empty($admins)) {
            // Convert domain entities to Eloquent models or Notifiable objects
            // Since Notification::send expects Notifiables, and our Entities might not be Notifiable directly if they are POPOs.
            // EloquentMember is Notifiable.
            // We can fetch Eloquent models or just use email if we implement routeNotificationForMail
            // But standard way is passing Notifiable.
            // let's fetch EloquentMembers for admins.
            // Actually, we can just use the repository if it returned Eloquent models, but it returns Entities.
            // So we might need to rely on the fact that we can send to on-demand notifiables or convert back.
            // Simplest: use Notification::route('mail', $email)->notify(...) for each admin.
            
            foreach ($admins as $admin) {
                 // Assuming Member entity has getEmail
                \Illuminate\Support\Facades\Notification::route('mail', $admin->getEmail())
                    ->notify(new \App\Modules\Member\Application\Notifications\NewMemberNotification($member));
            }
        }

        return $memberDto;
    }
}