import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  
})
export class HeroeComponent {

  heroe:any = {};

  mostrar = true;

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService ) {

    this._activatedRoute.params.subscribe( params =>{
      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe)
    })
  }


}
