import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{RestaurantesModule} from 'src/app/models/restaurantes/restaurantes.module';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home-resturants',
  templateUrl: './home-resturants.component.html',
  styleUrls: ['./home-resturants.component.scss']
})
export class HomeResturantsComponent implements OnInit {
  public restaurantes: RestaurantesModule[];
  contact: any;
  currentRate = 0;

  constructor(public json:RestaurantService) {
   
   }

  ngOnInit(): void {
    
    

    
   

   

    this.json.getLocalDB().subscribe((res: RestaurantesModule[]) => {
      
      this.restaurantes = res;
     
    });

    
    
    
    //console.log("array restaurentes:", this.res);
  }

}
