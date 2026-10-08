import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-add-sport',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-sport.component.html',
  styleUrl: './add-sport.component.css'
})
export class AddSportComponent {

  newSport = new Sport();

  message! : string;

  constructor(private sportService: SportService ) {}

  addSport(){
   // console.log(this.newSport);
   this.sportService.ajouterSport(this.newSport);
   this.message = "Sport "+this.newSport.nomSport +" ajouté avec succès !"
  }


}
