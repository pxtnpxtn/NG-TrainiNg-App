import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { MealFormComponent } from './components/meal-form/meal-form.component';

// Containers
import { MealComponent } from './containers/meal/meal.component';
import { MealsComponent } from './containers/meals/meals.component';

export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent
  ]
})
export class MealsModule { }
