import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit{
constructor(){

}
ngOnInit(): void {
  
}
anything(Category:NgForm){
    let object={
      name:Category.value.name,
      age:Category.value.age
    }

    console.log(object)
  }
}
