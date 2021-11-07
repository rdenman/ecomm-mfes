import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { loadStyle } from '@ecomm-mfes/common';
import { ROOT_SELECTOR } from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './polyfills';

interface MountProps {
  basePathname: string;
}

if (environment.production) {
  enableProdMode();
}

let module: NgModuleRef<AppModule>;
const mount = async (el: Element, props?: MountProps) => {
  loadStyle('auth-stylesheet', 'http://localhost:3003/styles.css');

  el.innerHTML = `<${ROOT_SELECTOR} />`;
  module = await platformBrowserDynamic([
    {
      provide: APP_BASE_HREF,
      useValue: props ? `${props.basePathname}/` : '/',
    },
  ]).bootstrapModule(AppModule);
};

const unmount = () => {
  module?.destroy();
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_auth-root');
  if (el) {
    mount(el);
  }
}

export { mount, unmount };
