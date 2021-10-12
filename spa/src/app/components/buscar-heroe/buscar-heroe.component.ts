import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {

  heroes: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    })
  } 

  ngOnInit(): void {
    
  }

}
