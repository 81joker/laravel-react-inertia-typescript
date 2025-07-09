<?php

namespace Database\Seeders;

use App\Enum\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Enum\PermissionsEnum;
use App\Models\Feature;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $userRole = Role::create(['name'=> RolesEnum::User->value]);
        $adminRole = Role::create(['name'=> RolesEnum::Admin->value]);
        $commenterRole = Role::create(['name'=> RolesEnum::Commenter->value]);

        $manageFeaturesPermission = Permission::create([
            'name' => PermissionsEnum::MangeFeatures->value,
        ]); 

        $manageCommentsPermission = Permission::create([
            'name' => PermissionsEnum::ManageComments->value,
        ]); 

        $upvoteDownvotePermission = Permission::create([
            'name' => PermissionsEnum::UpvoteDownvote->value]); 

        // $userRole->givePermissionTo($manageFeaturesPermission);
        // $userRole->givePermissionTo($manageCommentsPermission);
        // $userRole->givePermissionTo($upvoteDownvotePermission);
        $userRole->syncPermissions([$upvoteDownvotePermission]);
        $commenterRole->syncPermissions([$manageCommentsPermission]);
        $adminRole->syncPermissions([$manageFeaturesPermission, $manageCommentsPermission, $upvoteDownvotePermission]);
  
        User::factory()->create([
            'name' => 'User User',
            'email' => 'user@example.com',
        ])->assignRole(RolesEnum::User->value); 
        User::factory()->create([
            'name' => 'Commenter User',
            'email' => 'commenter@example.com',
        ])->assignRole(RolesEnum::Commenter->value); 

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ])->assignRole(RolesEnum::Admin->value); 

        User::factory()->create([
            'name' => 'Tim',
            'email' => 'tim26618@gmail.com',
        ]);

        Feature::factory(100)->create();

        $this->call([UpvoteSeeder::class]);
    }
}
