
import {Restaurant} from './restaurant/restaurant.model';
import {Http} from '@angular/http';
import {ROCK_API} from '../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RestaurantsService {

       constructor(private http: Http){}

       restaurants(): Observable<Restaurant[]> {
           return this.http.get(`${ROCK_API}/restaurants`)
           .map(response => response.json());
         }
       }
