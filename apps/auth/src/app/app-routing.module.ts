import { NgModule } from '@angular/core';
import { RouterModule, UrlMatcher, UrlSegment } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

function endsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map((u) => u.path).join('/');
    if (fullUrl.endsWith(prefix)) {
      return { consumed: url };
    }
    return null;
  };
}

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          matcher: endsWith('login'),
          component: LoginComponent,
        },
        {
          matcher: endsWith('register'),
          component: RegisterComponent,
        },
        {
          matcher: endsWith(''),
          redirectTo: 'login',
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
