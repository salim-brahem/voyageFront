import { Routes } from '@angular/router';
import { AppTablesComponent } from './tables/tables.component';



export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'employés',
        component: AppTablesComponent,
      },
    ],
  },
];
