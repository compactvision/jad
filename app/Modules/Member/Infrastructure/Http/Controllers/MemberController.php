<?php

namespace App\Modules\Member\Infrastructure\Http\Controllers;

use App\Modules\Member\Application\Services\RegisterMemberService;
use App\Modules\Member\Infrastructure\Http\Requests\StoreMemberRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rules\Enum;
use App\Http\Controllers\Controller; 
use App\Modules\Member\Domain\Enums\Role;
use App\Modules\Member\Domain\Enums\Sector;

class MemberController extends Controller
{
    public function __construct(
        private RegisterMemberService $registerMemberService,
        private \App\Modules\Member\Domain\Repositories\MemberRepositoryInterface $memberRepository,
        private \App\Modules\Member\Infrastructure\Email\EmailSenderInterface $emailSender
    ) {}

    public function index(Request $request)
    {
        $query = \App\Modules\Member\Infrastructure\Eloquent\EloquentMember::query();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('member_sectors', 'like', "%{$search}%");
            });
        }

        $members = $query->orderBy('created_at', 'desc')->paginate(10)->through(function ($m) {
             return [
                'id' => $m->id,
                'name' => $m->name,
                'email' => $m->email,
                'phone' => $m->phone,
                'role' => $m->member_roles[0] ?? null, 
                'status' => $m->status,
                'avatar' => $m->avatar, 
                'farm' => $m->member_sectors[0] ?? null, 
             ];
        });

        return \Inertia\Inertia::render('dashboard/members/members', [
            'members' => $members,
            'filters' => $request->only(['search']),
        ]);
    }

    public function publicIndex()
    {
        $members = \App\Modules\Member\Infrastructure\Eloquent\EloquentMember::where('is_visible', true)->get()->map(function ($m) {
             return [
                'id' => $m->id,
                'name' => $m->name,
                'roles' => $m->member_roles, 
                'avatar' => $m->avatar, 
                'sectors' => $m->member_sectors, 
                'city' => $m->city,
                'description' => $m->bio,
                'social_links' => $m->social_links,
                'company_name' => $m->company_name,
                'company_logo' => $m->company_logo,
                'primary_name_display' => $m->primary_name_display,
                'primary_image_display' => $m->primary_image_display,
             ];
        });

        return \Inertia\Inertia::render('members', [
            'members' => $members
        ]);
    }

    public function store(StoreMemberRequest $request)
    {
        $validated = $request->validated();

        $member = $this->registerMemberService->execute($validated, $request->file('avatar'), $request->file('company_logo'));

        return redirect()->back()->with('success', 'Membre enregistré avec succès');
    }

    public function approve(int $id)
    {
        $member = $this->memberRepository->findById($id);
        if (!$member) {
            abort(404);
        }

        $member->setStatus('approved');
        $this->memberRepository->save($member);

        // Envoyer l'email de validation
        $this->emailSender->sendMemberValidatedEmail($member);

        return redirect()->back()->with('success', 'Membre approuvé avec succès');
    }

    public function toggleVisibility(int $id)
    {
        $member = $this->memberRepository->findById($id);
        if (!$member) {
            abort(404);
        }

        $member->setIsVisible(!$member->isVisible());
        $this->memberRepository->save($member);

        return redirect()->back()->with('success', 'Visibilité modifiée avec succès');
    }

    public function show(int $id)
    {
        $member = $this->memberRepository->findById($id);
        if (!$member) {
            abort(404);
        }

        return \Inertia\Inertia::render('dashboard/members/MemberDetails', [
            'member' => [
                'id' => $member->getId(),
                'name' => $member->getName(),
                'email' => $member->getEmail(),
                'phone' => $member->getPhone(),
                'roles' => array_map(fn($role) => $role->value, $member->getRoles()),
                'province' => $member->getProvince(),
                'city' => $member->getCity(),
                'sectors' => array_map(fn($sector) => $sector->value, $member->getSectors()),
                'avatar' => $member->getAvatar(),
                'status' => $member->getStatus(),
                'is_visible' => $member->isVisible(),
                'created_at' => null, 
                'company_name' => $member->getCompanyName(),
                'company_description' => $member->getCompanyDescription(),
                'company_website' => $member->getCompanyWebsite(),
                'company_phone' => $member->getCompanyPhone(),
                'company_address' => $member->getCompanyAddress(),
                'primary_name_display' => $member->getPrimaryNameDisplay(),
            ]
        ]);
    }
}