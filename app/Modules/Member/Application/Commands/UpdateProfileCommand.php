<?php

namespace App\Modules\Member\Application\Commands;

use Illuminate\Http\UploadedFile;

class UpdateProfileCommand
{
    public function __construct(
        public int $userId,
        public string $name,
        public string $email,
        public string $phone,
        public ?string $city,
        public ?string $province,
        public ?string $bio,
        public ?array $socialLinks,
        public ?UploadedFile $avatar = null
    ) {}
}
