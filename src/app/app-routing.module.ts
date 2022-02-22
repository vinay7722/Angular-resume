import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcedemicsdetailsComponent } from './acedemicsdetails/acedemicsdetails.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'personal',component:PersonaldetailsComponent},
  {path:'acedemic',component:AcedemicsdetailsComponent},
  {path:'skill',component:SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
