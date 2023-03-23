import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';

const routes: Routes = [
  {path:"maincomponent", component:MaincomponentComponent},
  {path:'secondcomponent',component:SecondcomponentComponent},
  {path:'formcomponent',component:FormcomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
