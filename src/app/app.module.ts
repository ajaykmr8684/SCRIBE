import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import * as firebase  from "firebase/app";
import "firebase/auth";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';

import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';


let firebaseConfig = {
  apiKey: "AIzaSyAeF0tWvlh9gpAxk0GxMP68ig-gFkUanz4",
  authDomain: "fir-project-d3d2a.firebaseapp.com",
  databaseURL: "https://fir-project-d3d2a.firebaseio.com",
  projectId: "fir-project-d3d2a",
  storageBucket: "fir-project-d3d2a.appspot.com",
  messagingSenderId: "456285576809",
  appId: "1:456285576809:web:a5ff5217df9062566eccf8",
  measurementId: "G-W05E8HXBW4"
};

firebase.initializeApp(firebaseConfig);



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    MyblogsComponent,
    HomeComponent,
    // ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    
    CommentsComponent,
    
    EditProfileComponent,
    
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
