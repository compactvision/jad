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
        private \App\Modules\Member\Domain\Repositories\MemberRepositoryInterface $memberRepository
    ) {}

    public function index(Request $request)
    {
        $query = \App\Modules\Member\Infrastructure\Eloquent\EloquentMember::query();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('sector', 'like', "%{$search}%");
            });
        }

        $members = $query->orderBy('created_at', 'desc')->paginate(10)->through(function ($m) {
             return [
                'id' => $m->id,
                'name' => $m->name,
                'email' => $m->email,
                'phone' => $m->phone,
                'role' => $m->role, 
                'status' => $m->status,
                'avatar' => $m->avatar, 
                'farm' => $m->sector, 
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
                'role' => $m->role, 
                'avatar' => $m->avatar, 
                'sector' => $m->sector, 
                'city' => $m->city,
                'description' => $m->bio,
                'social_links' => $m->social_links,
             ];
        });

        return \Inertia\Inertia::render('members', [
            'members' => $members
        ]);
    }

    public function store(StoreMemberRequest $request)
    {
        $validated = $request->validated();

        $member = $this->registerMemberService->execute($validated, $request->file('avatar'));

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
                'role' => $member->getRole()->value,
                'province' => $member->getProvince(),
                'city' => $member->getCity(),
                'sector' => $member->getSector()->value,
                'avatar' => $member->getAvatar(),
                'status' => $member->getStatus(),
                'is_visible' => $member->isVisible(),
                'created_at' => null, // Entity doesn't have timestamps yet, maybe add later if needed
            ]
        ]);
    }
}