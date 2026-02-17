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
        private array $roles,  // Changed from Role to array of Role
        private string $province,
        private string $city,
        private array $sectors,  // Changed from Sector to array of Sector
        private ?string $avatar = null,
        private ?string $companyLogo = null,
        private ?string $activationToken = null,
        private ?string $password = null,
        private string $status = 'pending',
        private bool $isVisible = false,
        private ?string $bio = null,
        private array $socialLinks = [],
        private string $primaryImageDisplay = 'avatar',
        private ?string $companyName = null,
        private ?string $companyDescription = null,
        private ?string $companyWebsite = null,
        private ?string $companyPhone = null,
        private ?string $companyAddress = null,
        private string $primaryNameDisplay = 'personal'
    ) {}

    // Getters
    public function getId(): ?int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function getEmail(): string { return $this->email; }
    public function getPhone(): string { return $this->phone; }
    public function getRoles(): array { return $this->roles; }  // Returns array of Role enums
    public function getProvince(): string { return $this->province; }
    public function getCity(): string { return $this->city; }
    public function getSectors(): array { return $this->sectors; }  // Returns array of Sector enums
    public function getAvatar(): ?string { return $this->avatar; }
    public function getCompanyLogo(): ?string { return $this->companyLogo; }
    public function getPrimaryImageDisplay(): string { return $this->primaryImageDisplay; }
    public function getActivationToken(): ?string { return $this->activationToken; }
    public function getPassword(): ?string { return $this->password; }
    public function getStatus(): string { return $this->status; }
    public function isVisible(): bool { return $this->isVisible; }
    public function getBio(): ?string { return $this->bio; }
    public function getSocialLinks(): array { return $this->socialLinks; }
    public function getCompanyName(): ?string { return $this->companyName; }
    public function getCompanyDescription(): ?string { return $this->companyDescription; }
    public function getCompanyWebsite(): ?string { return $this->companyWebsite; }
    public function getCompanyPhone(): ?string { return $this->companyPhone; }
    public function getCompanyAddress(): ?string { return $this->companyAddress; }
    public function getPrimaryNameDisplay(): string { return $this->primaryNameDisplay; }

    // Setters si nécessaire
    public function setId(int $id): void { $this->id = $id; }
    public function setAvatar(?string $avatar): void { $this->avatar = $avatar; }
    public function setCompanyLogo(?string $companyLogo): void { $this->companyLogo = $companyLogo; }
    public function setActivationToken(?string $activationToken): void { $this->activationToken = $activationToken; }
    public function setPassword(?string $password): void { $this->password = $password; }
    public function setStatus(string $status): void { $this->status = $status; }
    public function setIsVisible(bool $isVisible): void { $this->isVisible = $isVisible; }
    public function setBio(?string $bio): void { $this->bio = $bio; }
    public function setSocialLinks(array $socialLinks): void { $this->socialLinks = $socialLinks; }
    public function setPrimaryImageDisplay(string $display): void { $this->primaryImageDisplay = $display; }
    public function setCompanyName(?string $value): void { $this->companyName = $value; }
    public function setCompanyDescription(?string $value): void { $this->companyDescription = $value; }
    public function setCompanyWebsite(?string $value): void { $this->companyWebsite = $value; }
    public function setCompanyPhone(?string $value): void { $this->companyPhone = $value; }
    public function setCompanyAddress(?string $value): void { $this->companyAddress = $value; }
    public function setPrimaryNameDisplay(string $value): void { $this->primaryNameDisplay = $value; }
}