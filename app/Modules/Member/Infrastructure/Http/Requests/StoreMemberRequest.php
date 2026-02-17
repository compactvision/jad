<?php

namespace App\Modules\Member\Infrastructure\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:members,email',
            'phone' => 'required|string|unique:members,phone',
            'roles' => 'required|array|min:1',
            'roles.*' => ['required', new Enum(\App\Modules\Member\Domain\Enums\Role::class)],
            'province' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'sectors' => 'required|array|min:1',
            'sectors.*' => ['required', new Enum(\App\Modules\Member\Domain\Enums\Sector::class)],
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'company_logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'terms' => 'accepted',
        ];
    }

    /**
     * Get the custom error messages for defined validation rules.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Le nom complet est obligatoire.',
            'name.max' => 'Le nom complet ne doit pas dépasser 255 caractères.',
            
            'email.required' => 'L\'adresse e-mail est obligatoire.',
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'email.unique' => 'Cette adresse e-mail est déjà utilisée.',
            
            'phone.required' => 'Le numéro de téléphone est obligatoire.',
            'phone.unique' => 'Ce numéro de téléphone est déjà utilisé.',
            
            'roles.required' => 'Au moins un rôle est obligatoire.',
            'roles.array' => 'Le format des rôles n\'est pas valide.',
            'roles.min' => 'Vous devez sélectionner au moins un rôle.',
            'roles.*.required' => 'Chaque rôle doit être valide.',
            'roles.*.enum' => 'Un ou plusieurs rôles sélectionnés ne sont pas valides.',
            
            'province.required' => 'La province est obligatoire.',
            'province.max' => 'Le nom de la province ne doit pas dépasser 255 caractères.',
            
            'city.required' => 'La ville est obligatoire.',
            'city.max' => 'Le nom de la ville ne doit pas dépasser 255 caractères.',
            
            'sectors.required' => 'Au moins un secteur d\'activité est obligatoire.',
            'sectors.array' => 'Le format des secteurs n\'est pas valide.',
            'sectors.min' => 'Vous devez sélectionner au moins un secteur.',
            'sectors.*.required' => 'Chaque secteur doit être valide.',
            'sectors.*.enum' => 'Un ou plusieurs secteurs sélectionnés ne sont pas valides.',
            
            'avatar.image' => 'Le fichier téléchargé doit être une image.',
            'avatar.mimes' => 'Le format de l\'image n\'est pas valide. Formats acceptés : jpeg, png, jpg, gif.',
            'avatar.max' => 'L\'image ne doit pas dépasser 2 Mo.',

            'company_logo.image' => 'Le fichier téléchargé doit être une image.',
            'company_logo.mimes' => 'Le format de l\'image n\'est pas valide. Formats acceptés : jpeg, png, jpg, gif.',
            'company_logo.max' => 'L\'image ne doit pas dépasser 2 Mo.',

            'terms.accepted' => 'Vous devez accepter les conditions d\'utilisation.',
        ];
    }
}