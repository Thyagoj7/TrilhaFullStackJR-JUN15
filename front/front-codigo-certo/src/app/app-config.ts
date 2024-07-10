import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appCOnfig: ApplicationConfig = {
    providers: [
        // provideRouter(routes),
        provideHttpClient()
    ]
}