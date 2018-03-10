import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {

    getHeroes(): Observable<Hero[]> {
      return of(HEROES);
    }

}
