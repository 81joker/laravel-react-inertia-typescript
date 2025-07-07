<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Upvote;
use Illuminate\Http\Request;

class UpvoteController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request , Feature $feature)
    {

        $data = $request->validate([
            // 'feature_id' => ['required', 'exists:features,id'],
            'upvote' => ['required', 'boolean']
        ]);

        Upvote::UpdateOrCreate(
            [
                'feature_id' => $feature->id,
                'user_id' => auth()->id()
            ],
            [
                'upvote' => $data['upvote']
            ]
        );

        return to_route('feature.index');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        $feature->upvotes()
            ->where('user_id', auth()->id())
            ->delete();
        return back();
    }
}
