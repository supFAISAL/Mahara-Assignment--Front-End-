import { PostsComponent } from './Posts/Posts.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { HomePageComponent } from './homePage/homePage.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'',component: LoginFormComponent},
  { path:'home', component:HomePageComponent,children:[
    {path:'posts', component:PostsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
