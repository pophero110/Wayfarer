import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { cityService } from 

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit{
 
 cityName: string;
 cityImage: string;
 posts: any [];

 constructor(private route: ActivatedRoute, private cityService, private weatherService: WeatherService){
  
  ngOnInit() {
    const cityId= this.route.snapshot.paramMap.get('id');

    this.cityService.getCity(cityId).subscribe(city => {
      this.cityName = city.name;
      this.cityImage = city.image;

    });
    this.cityService.getPosts(cityId).subscribe(posts => {
      this.posts = post;
    })
  }

 }
 
}
