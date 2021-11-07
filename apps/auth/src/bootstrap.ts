import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { loadStyle } from '@ecomm-mfes/common';
import { ROOT_SELECTOR } from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './polyfills';

if (environment.production) {
  enableProdMode();
}

const mount = (el: Element) => {
  loadStyle('auth-stylesheet', 'http://localhost:3003/styles.css');

  el.innerHTML = `<${ROOT_SELECTOR} />`;
  platformBrowserDynamic().bootstrapModule(AppModule);
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth-root');
  if (el) {
    mount(el);
  }
}

export { mount };
