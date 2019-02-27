import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Home } from '../home';


@Component({
  selector: 'view-gallery',
  template: `
    <h2>View Images</h2>
    <div*ngFor="let picture of homeObject.galleryPictures">
      <img src={{picture}}>
    </div>
  `
})

export class ViewGalleryComponent implements OnInit {
  id: number;
  homeObjects: Home[]; //list of home objects
  homeObject: Home; //just the one home object




  constructor(private route: ActivatedRoute, private httpService: HttpClient) {
    //
  }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
      this.id = params['id']; //use the id to search the json for the rest of the information
    });
    this.httpService.get('./assets/example.json').subscribe(
        data => {
          this.homeObjects = data as Home [];
          for (let home of this.homeObjects) {
            if (home.propertyId == this.id) { //if the id passed to the screen matches the PropertyId of a home. Use that home
              this.homeObject = new Home(home);
            }
          }
        }
      );
  }
}
