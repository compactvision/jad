<?php

// src/Modules/Member/Infrastructure/Email/WelcomeEmail.php

namespace App\Modules\Member\Infrastructure\Email;

use App\Modules\Member\Domain\Entities\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(
        public Member $member,
        public string $plainPassword
    ) {}

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            from: 'contact@jadaviculture.com',
            subject: 'Bienvenue chez Jada Vulture !',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            // Chemin vers votre template Blade
            view: 'emails.member.welcome', 
        );
    }
}