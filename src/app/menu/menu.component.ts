import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  
  selectedDish: Dish;

  url: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    //this.dishes = this.dishService.getDishes();
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish):void {
    console.log(dish);
    this.selectedDish = dish;
  }

}
