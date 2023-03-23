import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaincomponentComponent } from '../maincomponent/maincomponent.component';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit  {
  public title:any="swaroop";
  public toggle:boolean=false
 public datas:any=[
    {
      name:'swaroop',
      rollno:415,
      role:"Frontend"
    },
    {
      name:'adi',
      rollno:234,
      role:'Backend'
    },
    {
      name:'meena',
      rollno:324,
      role:'Full stack'
    }
  ]
  public count:number=1
  constructor(public router:Router){
   console.log('this is inside constructor')
    
  }
  ngOnInit(): void {
    console.log('this  is inside ngoninit');
    
  }
  handleclick(){
    // console.log(this.router.navigate)
    this.router.navigate(["/maincomponent"])
    console.log('button has clicked')
  }
  Toggle(){
    this.toggle=!this.toggle
  }

  countbutton(){
    this.count++
  }
 
 
}
