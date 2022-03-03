import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa';

  personas:string[];

  constructor(){
    this.personas= ["Jose","Felipe"]
  }

  mostrar(){
    return console.log(this.personas)
  }



}


