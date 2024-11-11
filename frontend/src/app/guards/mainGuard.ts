import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const mainGuard: CanActivateFn = (route, state) => {
    const auth_provider: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    let auth: any;
    auth_provider.contextAuth.subscribe((res) => {
        auth = res;
    });
    const is_authenticated = auth_provider.isAuthenticated();

    if (is_authenticated) {
        return true;
    } else {
        auth_provider.clear();
        router.navigate(['/login']);

        return false;
    }
};
