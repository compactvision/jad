<?php

namespace App\Modules\Member\Infrastructure\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Modules\Member\Application\Queries\GetProfileStatsHandler;
use App\Modules\Member\Application\Queries\GetProfileStatsQuery;
use App\Modules\Project\Application\Queries\GetRecentProjectsHandler;
use App\Modules\Project\Application\Queries\GetRecentProjectsQuery;
use App\Modules\Activity\Application\Queries\GetRecentActivitiesHandler;
use App\Modules\Activity\Application\Queries\GetRecentActivitiesQuery;
use App\Modules\Member\Application\Commands\UpdateProfileHandler;
use App\Modules\Member\Application\Commands\UpdateProfileCommand;

class ProfileController extends Controller
{
    public function __construct(
        private GetProfileStatsHandler $getProfileStatsHandler,
        private GetRecentProjectsHandler $getRecentProjectsHandler,
        private GetRecentActivitiesHandler $getRecentActivitiesHandler,
        private UpdateProfileHandler $updateProfileHandler
    ) {}

    public function edit(Request $request)
    {
        $member = Auth::user();
        
        $projects = $this->getRecentProjectsHandler->handle(new GetRecentProjectsQuery($member->id));
        $activities = $this->getRecentActivitiesHandler->handle(new GetRecentActivitiesQuery($member->id));
        $stats = $this->getProfileStatsHandler->handle(new GetProfileStatsQuery($member->id));

        // Achievements Logic (Can be extracted to a separate Query later)
        $trustScore = $stats['trust_score'];
        $projectsCount = $stats['projects_count'];
        
        $achievements = [
            [
                'name' => 'Membre actif',
                'description' => 'Plus de 10 connexions ce mois-ci',
                'icon' => 'Star',
                'earned' => true 
            ],
            [
                'name' => 'Expert du secteur',
                'description' => 'Profil complet à 100%',
                'icon' => 'Award',
                'earned' => $trustScore === 100
            ],
            [
                'name' => 'Collaborateur',
                'description' => 'Participé à 3 projets ou plus',
                'icon' => 'Users',
                'earned' => $projectsCount >= 3
            ],
            [
                'name' => 'Pionnier',
                'description' => 'Inscrit en 2024',
                'icon' => 'Shield',
                'earned' => $member->created_at->year === 2024
            ],
        ];

        return Inertia::render('dashboard/profile/Profile', [
            'member' => $member,
            'projects' => $projects,
            'activities' => $activities,
            'achievements' => $achievements,
            'stats' => $stats
        ]);
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:members,email,' . $user->id,
            'phone' => 'required|string|max:255|unique:members,phone,' . $user->id,
            'city' => 'nullable|string|max:255',
            'province' => 'nullable|string|max:255',
            'bio' => 'nullable|string|max:1000',
            'social_links' => 'nullable|array',
            'social_links.linkedin' => 'nullable|url',
            'social_links.twitter' => 'nullable|url',
            'social_links.facebook' => 'nullable|url',
            'social_links.instagram' => 'nullable|url',
            'social_links.website' => 'nullable|url',
            'avatar' => 'nullable|image|max:2048',
            'company_logo' => 'nullable|image|max:2048',
            'primary_image_display' => 'required|in:avatar,company_logo',
            'company_name' => 'nullable|string|max:255',
            'company_description' => 'nullable|string|max:1000',
            'company_website' => 'nullable|url|max:255',
            'company_phone' => 'nullable|string|max:255',
            'company_address' => 'nullable|string|max:255',
            'primary_name_display' => 'required|in:personal,company',
        ]);

        $command = new UpdateProfileCommand(
            userId: $user->id,
            name: $request->name,
            email: $request->email,
            phone: $request->phone,
            city: $request->city,
            province: $request->province,
            bio: $request->bio,
            socialLinks: $request->social_links,
            avatar: $request->file('avatar'),
            companyLogo: $request->file('company_logo'),
            primaryImageDisplay: $request->primary_image_display,
            companyName: $request->company_name,
            companyDescription: $request->company_description,
            companyWebsite: $request->company_website,
            companyPhone: $request->company_phone,
            companyAddress: $request->company_address,
            primaryNameDisplay: $request->primary_name_display
        );

        $this->updateProfileHandler->handle($command);

        return redirect()->back()->with('success', 'Profil mis à jour avec succès.');
    }
}
