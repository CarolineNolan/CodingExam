import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'home-list',
  styleUrls: ['./home-list.component.css'],
  template: `
     <table *ngIf="homeList">
        <tr class="column-header bold-text">
            <th></th>
            <th>Beds</th>
            <th>Price</th>
            <th>Address</th>
            <th>Baths</th>
            <th></th>
            <th>Action</th>
        </tr>

        <tr *ngFor="let home of homeList">
            <td><img src={{home.MainPhoto}} alt={{home.DisplayAddress}}></td>
            <td class="bold-text">{{home.BedsString}}</td>
            <td class="bold-text">{{home.Price}}</td>
            <td class="bold-text">{{home.DisplayAddress}}</td>
            <td class="bold-text">{{home.BathString}}</td>
            <td class="bold-text"><img src={{home.GroupLogoUrl}} alt={{home.DisplayAddress}}></td>
            <td> 
              <button class="btn btn-primary" (click)="viewBrochure(home)">View Brochure</button>
              <button class="btn btn-primary" (click)="viewGallery(home)">View Gallery</button>
            </td>
        </tr>
    </table>`
})

export class HomeListComponent {
  //Array of values from the json file
  homeList: string[];

  //using the HttpClient to access the json file
  //usng the router to navigate to the ViewBrochure Component when that button is clicked.
  constructor(private router: Router, private httpService: HttpClient) {
    //
  }

  ngOnInit() {
    //This should be pulled out and put into a service as it is being called in a few places.
    this.httpService.get('./assets/example.json').subscribe(
        data => {
          this.homeList = data as string [];
        }
      );
  }

  //using the router to navigate to the view-broucher url and that component. Sending the PropertyId
  //to be used to search for the raw json associated to that id. Passing the whole json to this screen would be too large.
  viewBrochure(event) {
    this.router.navigate(['view-brochure', event.PropertyId]);
  }

  viewGallery(event) {
    this.router.navigate(['view-gallery', event.PropertyId]);
  }
}
