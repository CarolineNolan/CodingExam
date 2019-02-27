import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Home } from '../home';

@Component({
  selector: 'view-brochure',
  template: `
     <h2>View Brochure Screen</h2>
     <p>{{rawHomeObject}}</p>`
})

export class ViewBrochureComponent implements OnInit {
  id: number;
  homeObject: Home[];// Assign the json to an array of Home Objects so its easier to work with.
  rawHomeObject: Home;

  constructor(private route: ActivatedRoute, private httpService: HttpClient) {
    //
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']; //use the id to search the json for the rest of the information
    });
     this.httpService.get('./assets/example.json').subscribe(
        data => {
          this.homeObject = data as Home [];
        }
      );
    this.findJsonObject(this.id);
  }


  findJsonObject(id) {
   for (let i=0; i < this.homeObject.length; i++) {
        if (this.homeObject[i].propertyId == id) {
            this.rawHomeObject = this.homeObject[i];
      }
    }
  }
}