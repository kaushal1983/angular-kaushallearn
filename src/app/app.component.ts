import { Component } from '@angular/core';
import SampleJson from './SampleJson.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   model =SampleJson;

  constructor() {


  }
}
