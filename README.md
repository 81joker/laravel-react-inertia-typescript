sail artisan config:clear
sail artisan config:cache
sudo chmod -R 777 /home/nehad/Laravel/Laravel-React/laravel-react-inertia-typescript




1- Install [laravel-permission](https://github.com/spatie/laravel-permission)

2- Configure [laravel-permission](https://github.com/spatie/laravel-permission)

3- php artisan make:enum Enum/PermissionEnum and  make:enum Enum/RoleEnum

4- in the database/seeders/DatabaseSeeder.php file add the following code:
    and set the permissions and roles

5- php artisan db:seed

6- make artisan make:model Feature -mcr + php artisan make:model Upvote -mcr + php artisan make:model Comment -mcr

7- make factory FeatureFactory 

8- iterate the Feature in controller index with edit the route feature/index

9- make Resources AuthUserResource , UserResource , FeatureResource
    inside AuthUserResource: 
       return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'permissions' => $this->getAllPermissions()->map(function ($permission){
                return $permission->name;
            }),
            'roles' => $this->getRoleNames(),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];

9- go to the HandleInertiaRequests  Middleware
    and config the permissions and roles
    'auth' => [
                'user' => $request->user() ? new AuthUserResource($request->user()) : null,
            ],