import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './views/signup/signup.component';
import { ConversionFormComponent } from './views/conversion-form/conversion-form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { NewsComponent } from './views/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ConversionFormComponent,
    FooterComponent,
    AboutUsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
