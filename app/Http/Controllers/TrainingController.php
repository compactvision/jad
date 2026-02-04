<?php

namespace App\Http\Controllers;

use App\Models\Training;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TrainingController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard/formations/index', [
            'trainings' => Training::latest()->get()
        ]);
    }

    public function publicIndex()
    {
        return Inertia::render('welcome', [
            'trainings' => Training::where('is_public', true)->latest()->get()
        ]);
    }

    public function show(Training $training)
    {
        return Inertia::render('dashboard/formations/view', [
            'training' => $training
        ]);
    }

    public function publicShow(Training $training)
    {
        return Inertia::render('formations/show', [
            'training' => $training
        ]);
    }

    public function publicRead(Training $training)
    {
        return Inertia::render('formations/read', [
            'training' => $training
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'pdf' => 'required|file|mimes:pdf|max:10240', // 10MB max
            'allowed_pages' => 'required|integer|min:1',
            'is_public' => 'required|boolean',
        ]);

        $path = $request->file('pdf')->store('trainings', 'public');

        Training::create([
            'title' => $request->title,
            'description' => $request->description,
            'pdf_path' => $path,
            'allowed_pages' => $request->allowed_pages,
            'is_public' => $request->is_public,
        ]);

        return redirect()->back()->with('success', 'Formation ajoutée avec succès.');
    }

    public function update(Request $request, Training $training)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'allowed_pages' => 'required|integer|min:1',
            'is_public' => 'required|boolean',
        ]);

        $training->update($request->only(['title', 'description', 'allowed_pages', 'is_public']));

        return redirect()->back()->with('success', 'Formation mise à jour.');
    }

    public function destroy(Training $training)
    {
        Storage::disk('public')->delete($training->pdf_path);
        $training->delete();

        return redirect()->back()->with('success', 'Formation supprimée.');
    }
}
