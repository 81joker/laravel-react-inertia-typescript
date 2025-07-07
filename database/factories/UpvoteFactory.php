<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Upvote>
 */
class UpvoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $user = User::all(columns: "id");
        return [
            'feature_id' => $this->faker->numberBetween(1,100),
             'user_id' => User::all()->random()->id, 
            'upvote' => $this->faker->boolean(),
        ];
    }
}

  