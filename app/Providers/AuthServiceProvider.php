<?php

namespace App\Providers;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use phpDocumentor\Reflection\Types\Void_;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        $this->defineUserGate('isAdmin', UserRole::ADMIN);
        $this->defineUserGate('isUser', UserRole::USER);

    }
    private function defineUserGate(string $name, string $role): void
    {
        Gate::define($name, function(User $user) use($role){
            return $user->role == $role;
        });
    }
}
