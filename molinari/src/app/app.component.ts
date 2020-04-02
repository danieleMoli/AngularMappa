import { Component } from '@angular/core';
import {Point} from '../models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  lat: number = 45.506738;
  lng: number = 9.190766;
  latCasaMia: number = 45.532926;
  lngCasaMia: number = 9.195268;
  latGatto:number = 45.6
  lngGatto:number = 9.3
  latTitti:number = 45.6
  lngTitti:number = 9.6
  latNemo:number = 45.6
  lngNemo:number = 9.9
  latSimba:number = 45.6
  lngSimba:number = 10.1

   icon =  {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }

  icon1 =  {
    url:'./assets/img/titti.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  icon2=  {
    url:'./assets/img/nemo.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  icon3=  {
    url:'./assets/img/simba.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

 rectangle: Array<Point> =
  [
    {lng:9.3, lat:45.6},
    {lng:9.4, lat:45.6},
    {lng:9.4, lat:45.4},
    {lng:9.3, lat:45.4}



  ]
}
