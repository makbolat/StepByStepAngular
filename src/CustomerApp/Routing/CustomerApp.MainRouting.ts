import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { HomeComponent } from '../HomePage/CustomerApp.HomeComponent';
import { SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';

export const MainRoutes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Customer',
    loadChildren: () =>
      import('../Customer/CustomerApp.CustomerModule').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'Supplier',
    loadChildren: () =>
      import('../Supplier/CustomerApp.SupplierModule').then(
        (m) => m.SupplierModule
      ),
  },
  { path: '', component: HomeComponent },
];
