<?php

namespace App\Modules\Member\Infrastructure\Eloquent;

use App\Modules\Member\Domain\Entities\Member;
use App\Modules\Member\Domain\Enums\Role;
use App\Modules\Member\Domain\Enums\Sector;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Http\UploadedFile; 
use Spatie\Permission\Traits\HasRoles;

class EloquentMember extends Authenticatable
{
    use Notifiable, HasRoles;

    public function projects()
    {
        return $this->hasMany(\App\Modules\Project\Infrastructure\Eloquent\Project::class, 'user_id');
    }

    public function activities()
    {
        return $this->hasMany(\App\Modules\Activity\Infrastructure\Eloquent\ActivityLog::class, 'user_id');
    }

    protected $table = 'members';
    protected $fillable = [
        'name', 'phone', 'email', 'password', 'roles', 'province', 'city', 'sectors', 'avatar', 'activationToken', 'status', 'is_visible', 'bio', 'social_links'
    ];
    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'roles' => 'array',
        'sectors' => 'array',
        'social_links' => 'array',
        'is_visible' => 'boolean',
    ];

    // Convertit le modèle Eloquent en entité de domaine
    public function toDomainEntity(): Member
    {
        // Convert JSON arrays back to Role/Sector enums
        $roles = array_map(fn($role) => Role::from($role), $this->roles ?? []);
        $sectors = array_map(fn($sector) => Sector::from($sector), $this->sectors ?? []);

        return new Member(
            $this->id,
            $this->name,
            $this->email,
            $this->phone,
            $roles,
            $this->province,
            $this->city,
            $sectors,
            $this->avatar,
            $this->activationToken,
            null, // Password
            $this->status ?? 'pending',
            (bool) ($this->is_visible ?? false),
            $this->bio,
            $this->social_links ?? []
        );
    }

    // Crée un modèle Eloquent depuis une entité de domaine
    public static function fromDomainEntity(Member $member): self
    {
        // Convert Role/Sector enum arrays to string arrays for JSON storage
        $roles = array_map(fn($role) => $role->value, $member->getRoles());
        $sectors = array_map(fn($sector) => $sector->value, $member->getSectors());

        $data = [
            'name' => $member->getName(),
            'email' => $member->getEmail(),
            'phone' => $member->getPhone(),
            'roles' => $roles,
            'province' => $member->getProvince(),
            'city' => $member->getCity(),
            'sectors' => $sectors,
            'avatar' => $member->getAvatar(),
            'activationToken' => $member->getActivationToken(),
            'status' => $member->getStatus(),
            'is_visible' => $member->isVisible(),
            'bio' => $member->getBio(),
            'social_links' => $member->getSocialLinks(),
        ];

        // Only hash and set password if it's provided in the domain entity (new member or password change)
        if ($member->getPassword()) {
            $data['password'] = bcrypt($member->getPassword());
        } elseif ($member->getId()) {
             // For updates where password is not changed, we don't want to overwrite with null if it's not set.
             // But existing EloquentMember instance should handle this via fill/save logic in Repository, 
             // NOT here if we return a NEW instance. 
             // However, fromDomainEntity returns a new self($data).
             // If this is an update, we should probably be updating an EXISTING Eloquent model, not creating a new one unless we are sure.
             // But the Repository implementation creates a NEW EloquentMember from domain entity then overwrites properties or creates new?
             
             // The Repository save method:
             // $eloquentMember = EloquentMember::fromDomainEntity($member);
             // ...
             // $eloquentMember->save(); 
             
             // If we are UPDATING, $member->getId() is not null. 
             // We should find the existing record first? 
             // The repository implementation currently does:
             // $eloquentMember = EloquentMember::fromDomainEntity($member);
             // $eloquentMember->save(); 
             // This will try to INSERT a new record if ID is not set on the model instance.
             // But `fromDomainEntity` creates a `new self($data)`. It does NOT set the ID on the model instance in current code.
             // Wait, `fromDomainEntity` constructs `new self`. If we don't set $this->exists = true and $this->id, save() tries insert.
             // If we are updating an existing member, we MUST copy the ID.
        }
        
        $instance = new self($data);
        if ($member->getId()) {
            $instance->id = $member->getId();
            $instance->exists = true;
        }

        return $instance;
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