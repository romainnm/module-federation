import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { mfeProjectModule } from './app/mfe-project.module';


platformBrowserDynamic().bootstrapModule(mfeProjectModule)
  .catch(err => console.error(err));
