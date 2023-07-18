//import statement from angular core
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//this will make out unique componenet
//selector-> is the custumized html Element
//templateUrl-> where selector gets its html to display(the file you want to display or Elements to display)
//stylesUrls-> stylessheet used for the component

// export class AppComponent {
  
// names!: string ;

// }

export class AppComponent {
  title = 'd280-map';
  name!: string;
  capital!: string;
  region!: string;
  income!: string;
  latitude!: string;
  longitude!: string;

  onNameChange(value: string) {
    this.name= value;
  }

  onCapitalChange(value: string) {
    this.capital = value;
  }

  onRegionChange(value: string) {
    this.region = value;
  }

  onIncomeChange(value: string) {
    this.income = value;
  }

  onLatitudeChange(value: string) {
    this.latitude = value;
  }

  onLongitudeChange(value: string) {
    this.longitude = value;
  }
}