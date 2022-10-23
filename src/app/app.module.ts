import { NavBarComponent } from './homePage/navBar/navBar.component';
import { FooterComponent } from './homePage/Footer/Footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './homePage/homePage.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import {MatTableModule} from '@angular/material/table';
import { PostsComponent } from './Posts/Posts.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
      HomePageComponent,
      LoginFormComponent,
      PostsComponent,
      FooterComponent,
      NavBarComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
