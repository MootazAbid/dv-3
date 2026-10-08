import { Component, OnInit } from '@angular/core';
import { Sport } from '../model/sport.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SportService } from '../services/sport.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-sport',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-sport.component.html',
  styles: ``
})
export class UpdateSportComponent implements OnInit {
  currentSport  = new Sport();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private sportService: SportService
) { }

  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
this.currentSport = this.sportService.consulterSport(this.activatedRoute.snapshot. params['id']);
   console.log(this.currentSport);
  }


  updateSport()
  { //console.log(this.currentSport);
    this.sportService.updateSport(this.currentSport);
    this.router.navigate(['sports']);
  }

}
