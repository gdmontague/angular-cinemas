import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesData;

  constructor(service: MoviesService, private router: Router) {
    this.moviesData = service.getAllMovies();
   }

  ngOnInit() {}
    clickedMovie(slug){
      this.router.navigate(['movies', slug])
    }

}
