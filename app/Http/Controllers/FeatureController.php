<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\FeatureResource;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paginate = Feature::latest()->paginate(10);
        return Inertia::render('Features/Index' , [
            'features' => FeatureResource::collection($paginate)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        dd('Create Feature');
        // return Inertia::render('Features/Create');
    }

 
public function test() {
    // Your logic here
    return response()->json(['message' => 'Feature test route']);
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd('STORE   Feature');

    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        return Inertia::render('Features/Show', [
            'feature' => new FeatureResource($feature)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        //
    }
}
