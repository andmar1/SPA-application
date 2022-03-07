import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.services';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'


})
export class BuscadorComponent implements OnInit {

  heroes:any[]= [];

  termino:string = ''; 

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesServices:HeroesService ) { 
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe( params =>{
      this.termino = (params['termino'])
      this.heroes = this._heroesServices.buscarHeroes( params['termino']);
      console.log( this.heroes)
    })
  }
}


