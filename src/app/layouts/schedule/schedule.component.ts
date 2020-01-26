import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  movieData;
  time = '3:00 pm';
  adultTickets = 1;
  childTickets = 0;
  seniorTickets = 0;
  adultTicketPrice = 15.07;
  childTicketPrice = 12.08;
  seniorTicketPrice = 11.01;

  constructor(private route: ActivatedRoute, private service: MoviesService, private router: Router) {

  this.route.paramMap.subscribe(params => {
    this.movieData = service.getMovieData(params.get('title'))[0];
  console.log(this.movieData);
  })
}
  ngOnInit() {
  }
  
  chooseTime(time) {
    this.time = time;
  }
  clickedChair(slug, index) {
    const totalTickets = this.adultTickets + this.childTickets + this.seniorTickets;
    this.service.reserveChair(slug, index, totalTickets);
    console.log(totalTickets);
    console.log('clicked chair');
  }
  clickedContinue(){
    console.log(this.movieData);
    this.router.navigate(['movies', this.movieData.slug, 'schedule', 'checkout', 'thank-you'], {
      queryParams: {
        adultTickets: this.adultTickets,
        childTickets: this.childTickets,
        seniorTickets: this.seniorTickets,
        time: this.time
      }
    })
  }
}
