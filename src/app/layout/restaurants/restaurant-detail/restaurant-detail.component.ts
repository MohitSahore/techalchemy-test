import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  detail: any = {};
  id = '';
  isLoading = true;

  constructor(
    private http: HttpService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.http.getData(`${ApiUrl.restaurantDetails}${this.id}`).subscribe(res => {
      this.detail = res.restaurantDetail;
      this.detail.openingHours = this.detail.openingHours.split(',');
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

}
