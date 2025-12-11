<?php

namespace App\Modules\Member\Infrastructure\Eloquent;

use App\Modules\Member\Domain\Entities\Member;
use App\Modules\Member\Domain\Enums\Role;
use App\Modules\Member\Domain\Enums\Sector;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Http\UploadedFile; 

class EloquentMember extends Authenticatable
{
    use Notifiable;

    protected $table = 'members';
    protected $fillable = [
        'name', 'phone', 'email', 'password', 'role', 'province', 'city', 'sector', 'avatar', 'activationToken'
    ];
    protected $hidden = ['password', 'remember_token'];

    // Convertit le modèle Eloquent en entité de domaine
    public function toDomainEntity(): Member
    {
        return new Member(
            $this->id,
            $this->name,
            $this->email,
            $this->phone,
            Role::from($this->role),
            $this->province,
            $this->city,
            Sector::from($this->sector),
            $this->avatar,
            $this->activationToken,
            null // Password is not retrieved back to domain usually for security, or we could pass it if needed but usually hashed. Keeping null for now as it's not needed after registration flow in this context.
        );
    }

    // Crée un modèle Eloquent depuis une entité de domaine
    public static function fromDomainEntity(Member $member): self
    {
        return new self([
            'name' => $member->getName(),
            'email' => $member->getEmail(),
            'phone' => $member->getPhone(),
            'password' => bcrypt($member->getPassword()), // Utiliser le mot de passe de l'entité
            'role' => $member->getRole()->value,
            'province' => $member->getProvince(),
            'city' => $member->getCity(),
            'sector' => $member->getSector()->value,
            'avatar' => $member->getAvatar(),
            'activationToken' => $member->getActivationToken()
        ]);
    }

    public function uploadAvatar(UploadedFile $file): ?string
    {
        $path = $file->store('profile_images', 'public');
        return $path;
    }

    // Accesseur pour obtenir l'URL complète de l'image
    public function getAvatarUrlAttribute(): ?string
    {
        return $this->avatar 
            ? Storage::url($this->avatar) 
            : null;
    }
}