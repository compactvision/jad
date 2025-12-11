<?php

namespace App\Modules\Member\Infrastructure\Email;

use App\Modules\Member\Domain\Entities\Member;
use Illuminate\Support\Facades\Mail;
// Assurez-vous d'importer votre classe Mailable !
use App\Modules\Member\Infrastructure\Email\WelcomeEmail; 

class LaravelEmailSender implements EmailSenderInterface
{
    // Le constructeur n'est plus nécessaire, car on utilise la façade Mail

    public function sendWelcomeEmail(Member $member, string $plainPassword): void
    {
        // On utilise la façade Mail pour envoyer une instance de notre classe Mailable
        Mail::to($member->getEmail())->send(new WelcomeEmail($member, $plainPassword));
    }
}