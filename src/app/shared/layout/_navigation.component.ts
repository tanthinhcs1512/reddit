import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/services/api.service';
import { Screen } from '../../core/models/screen.model';

@Component({
  selector: 'app-layout-navigation',
  templateUrl: './_navigation.component.html',
})
export class NavigationComponent implements OnInit {
    selectedItem: number = null;
    heroes: Screen[];

    constructor(private apiService: ApiService) {

    }
    

    ngOnInit() {
        this.apiService.getRoutes().subscribe(
            data => this.heroes = data,
            httpError => { 
              const apiErrorObject = httpError.error.errors;
            }
          );
    }

    listClick(event, newValue) {
        this.selectedItem = newValue;  // don't forget to update the model here
        // ... do other stuff here ...
    }
}
