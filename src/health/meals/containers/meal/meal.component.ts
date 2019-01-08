import { Component } from '@angular/core';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {

  async addMeal(event: Meal) {
    await this.mealsService.addMeal(event);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

  constructor(
    private mealsService: MealsService,
    private router: Router
  ) { }

}
