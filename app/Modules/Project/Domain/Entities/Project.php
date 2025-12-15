<?php

namespace App\Modules\Project\Domain\Entities;

use DateTime;

class Project
{
    public function __construct(
        private ?int $id,
        private int $userId,
        private string $title,
        private ?string $description,
        private string $status,
        private ?DateTime $createdAt,
        private ?DateTime $updatedAt
    ) {}

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getCreatedAt(): ?DateTime
    {
        return $this->createdAt;
    }
}
