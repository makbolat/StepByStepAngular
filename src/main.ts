import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './CustomerApp/HomePage/CustomerApp.MainModule';

platformBrowserDynamic()
  .bootstrapModule(MainModule)
  .catch((err) => console.error(err));

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
