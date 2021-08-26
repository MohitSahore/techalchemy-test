import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  allRestaurants = [];

  allCategoryImages = [
    '/assets/images/restaurant-category/Logo.png',
    '/assets/images/restaurant-category/Logo1.png',
    '/assets/images/restaurant-category/Logo2.png',
    '/assets/images/restaurant-category/Logo3.png'
  ];
  allCategories = [];
  isLoading = true;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.getData(ApiUrl.allRestaurants).subscribe(res => {
      this.allRestaurants = res.allRestaurants;
      this.makeCategories();
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  makeCategories() {
    let restaurantCategory = [];
    this.allCategories = [];
    this.allRestaurants.map(x => {
      restaurantCategory = [ ...restaurantCategory, ...JSON.parse(x.restaurantCategory)];
    }); 
    restaurantCategory = restaurantCategory.filter((v, i, a) => a.indexOf(v) === i);
    restaurantCategory.map((x, index) => {
      this.allCategories.push({
        name: x,
        image: this.allCategoryImages[index % this.allCategoryImages.length]
      });
    });
  }

}
