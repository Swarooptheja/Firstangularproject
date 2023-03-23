import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {
  public array:any=[];
  public temp:any
  constructor(public http:HttpClient){

  }
  ngOnInit() {
    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .toPromise()
      .then((res)=>{
        this.temp=res
        this.array=this.temp.meals
        console.log(this.array)
      })
      .catch((err)=>{
        console.log(err)
      })
      
  }

 
}
