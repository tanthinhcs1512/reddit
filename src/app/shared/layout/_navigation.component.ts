import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-navigation',
  templateUrl: './_navigation.component.html',
})
export class NavigationComponent implements OnInit {
    selectedItem: number = null;
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    

    ngOnInit() {

    }

    listClick(event, newValue) {
        this.selectedItem = newValue;  // don't forget to update the model here
        // ... do other stuff here ...
    }
}
