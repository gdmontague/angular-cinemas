import { MoviesService } from './../../core/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  movieData;
  adultTickets;
  childTickets;
  seniorTickets;
  time;
  totalTickets;
  constructor(
    private route: ActivatedRoute, 
    private service: MoviesService, 
    private router: Router
    ) {
    this.route.paramMap.subscribe(params => {
    this.movieData = service.getMovieData(params.get('title'))[0];
    console.log(this.movieData);
    })
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.time = params.get('time');
      this.totalTickets = parseFloat(params.get('adultTickets')) + parseFloat(params.get('childTickets')) + parseFloat(params.get('seniorTickets'));
    })
  }

}
