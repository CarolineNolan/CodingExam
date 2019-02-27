import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { ViewBrochureComponent } from './view-brochure/view-brochure.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { AppRoutingModule } from './app-routing.module';

import { BarGraphComponent } from './bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeListComponent, 
    ViewBrochureComponent,
    ViewGalleryComponent,
    BarGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
