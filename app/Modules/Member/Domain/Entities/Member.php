<?php

namespace App\Modules\Member\Domain\Entities;

use App\Modules\Member\Domain\Enums\Role;
use App\Modules\Member\Domain\Enums\Sector;

class Member
{
    public function __construct(
        private ?int $id,
        private string $name,
        private string $email,
        private string $phone,
        private Role $role,
        private string $province,
        private string $city,
        private Sector $sector,
        private ?string $avatar = null,
        private ?string $activationToken = null,
        private ?string $password = null
    ) {}

    // Getters
    public function getId(): ?int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function getEmail(): string { return $this->email; }
    public function getPhone(): string { return $this->phone; }
    public function getRole(): Role { return $this->role; }
    public function getProvince(): string { return $this->province; }
    public function getCity(): string { return $this->city; }
    public function getSector(): Sector { return $this->sector; }
    public function getAvatar(): ?string { return $this->avatar; }
    public function getActivationToken(): ?string { return $this->activationToken; }
    public function getPassword(): ?string { return $this->password; }

    // Setters si nécessaire
    public function setId(int $id): void { $this->id = $id; }
    public function setAvatar(?string $avatar): void { $this->avatar = $avatar; }
    public function setActivationToken(?string $activationToken): void { $this->activationToken = $activationToken; }
    public function setPassword(?string $password): void { $this->password = $password; }
}