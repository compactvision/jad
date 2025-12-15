<?php

namespace App\Modules\Member\Application\Notifications;

use App\Modules\Member\Domain\Entities\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewMemberNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public Member $member)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('Nouvelle demande d\'adhésion - JAD')
                    ->greeting('Bonjour Admin,')
                    ->line('Un nouvel utilisateur souhaite rejoindre l\'équipe : ' . $this->member->getName())
                    ->line('Rôle demandé : ' . $this->member->getRole()->name) // Assuming Role is enum
                    ->action('Voir le dossier', url('/dashboard/members/' . $this->member->getId())) // Assumes this route
                    ->line('Connectez-vous pour accepter ou refuser cette demande.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
