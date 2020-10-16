import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './comp/nav/nav.component';
import { GallaryComponent } from './comp/gallary/gallary.component';
import { ImgDetailComponent } from './comp/img-detail/img-detail.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GallaryComponent,
    ImgDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilterPipe], 
  bootstrap: [AppComponent]
})
export class AppModule { }
