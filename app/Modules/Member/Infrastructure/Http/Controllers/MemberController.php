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
    public function __construct(private RegisterMemberService $registerMemberService) {}

    public function store(StoreMemberRequest $request)
    {
        $validated = $request->validated();

        $member = $this->registerMemberService->execute($validated, $request->file('avatar'));

        return redirect()->back()->with('success', 'Membre enregistré avec succès');
    }
}