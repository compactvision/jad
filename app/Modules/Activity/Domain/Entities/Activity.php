<?php

namespace App\Modules\Activity\Domain\Entities;

use DateTime;

class Activity
{
    public function __construct(
        private ?int $id,
        private int $userId,
        private string $action,
        private ?string $description,
        private ?string $iconType,
        private ?DateTime $createdAt
    ) {}

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getAction(): string
    {
        return $this->action;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getIconType(): ?string
    {
        return $this->iconType;
    }

    public function getCreatedAt(): ?DateTime
    {
        return $this->createdAt;
    }
}
