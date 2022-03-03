import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css']  
})

export class HeroesComponent implements OnInit {

  heores:Heroe[] = []

  constructor( private _heroesService:HeroesService  ) {
  }

  ngOnInit(): void {
    this.heores= this._heroesService.getHeroes();

    console.log(this.heores);
  }

}


