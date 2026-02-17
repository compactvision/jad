<?php

namespace App\Modules\Member\Application\Commands;

use App\Modules\Member\Infrastructure\Eloquent\EloquentMember;
use App\Modules\Activity\Domain\Repositories\ActivityRepositoryInterface;

class UpdateProfileHandler
{
    public function __construct(
        private ActivityRepositoryInterface $activityRepository
    ) {}

    public function handle(UpdateProfileCommand $command): void
    {
        /** @var EloquentMember $user */
        $user = EloquentMember::findOrFail($command->userId);

        $user->forceFill([
            'name' => $command->name,
            'email' => $command->email,
            'phone' => $command->phone,
            'city' => $command->city,
            'province' => $command->province,
            'bio' => $command->bio,
            'social_links' => $command->socialLinks,
            'primary_image_display' => $command->primaryImageDisplay,
            'company_name' => $command->companyName,
            'company_description' => $command->companyDescription,
            'company_website' => $command->companyWebsite,
            'company_phone' => $command->companyPhone,
            'company_address' => $command->companyAddress,
            'primary_name_display' => $command->primaryNameDisplay,
        ]);

        if ($command->avatar) {
             $path = $command->avatar->store('profile_images', 'public');
             $user->avatar = $path;
        }

        if ($command->companyLogo) {
             $path = $command->companyLogo->store('company_logos', 'public');
             $user->company_logo = $path;
        }

        $user->save();

        // Log Activity
        $this->activityRepository->log(
            $user->id,
            'Modification du profil',
            'Vous avez mis à jour vos informations.',
            'Edit'
        );
    }
}
