import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeListComponent } from './home-list/home-list.component';
import { ViewBrochureComponent } from './view-brochure/view-brochure.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/home-list', pathMatch: 'full' },
  { path: 'view-brochure/:id', component: ViewBrochureComponent },
  { path: 'home-list', component: HomeListComponent },
  { path: 'view-gallery/:id', component: ViewGalleryComponent},

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}