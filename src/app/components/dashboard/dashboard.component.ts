import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
     recentheroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes.slice(1, 5);
                this.recentheroes = heroes.slice(6, 10);
            }
            );
    }

    
}