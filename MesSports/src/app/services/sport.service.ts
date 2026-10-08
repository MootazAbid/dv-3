import { Injectable } from '@angular/core';
import { Sport } from '../model/sport.model';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  sports : Sport[]; //un tableau de Sport

  sport! : Sport;

  constructor() {
    this.sports = [
      { idSport : 1, nomSport : "Football",   categorieSport : "Collectif",  niveauSport : "Intermédiaire", nombreJoueurs : 11,
        descriptionSport : "Deux équipes s'affrontent pour marquer des buts avec un ballon, principalement avec les pieds."},
      { idSport : 2, nomSport : "Basketball", categorieSport : "Collectif",  niveauSport : "Intermédiaire", nombreJoueurs : 5,
        descriptionSport : "Les joueurs marquent des points en envoyant le ballon dans le panier adverse."},
      { idSport : 3, nomSport : "Tennis",     categorieSport : "Raquette",   niveauSport : "Avancé",        nombreJoueurs : 1,
        descriptionSport : "Sport de raquette joué en simple ou en double sur un court, séparé par un filet."},
      { idSport : 4, nomSport : "Volleyball", categorieSport : "Collectif",  niveauSport : "Débutant",      nombreJoueurs : 6,
        descriptionSport : "Deux équipes séparées par un filet doivent faire toucher le ballon au sol adverse."},
      { idSport : 5, nomSport : "Natation",   categorieSport : "Aquatique",  niveauSport : "Débutant",      nombreJoueurs : 1,
        descriptionSport : "Déplacement dans l'eau en nage libre, brasse, dos crawlé ou papillon."},
      { idSport : 6, nomSport : "Handball",   categorieSport : "Collectif",  niveauSport : "Intermédiaire", nombreJoueurs : 7,
        descriptionSport : "Deux équipes se passent le ballon à la main pour marquer dans le but adverse."},
      { idSport : 7, nomSport : "Athlétisme", categorieSport : "Individuel", niveauSport : "Intermédiaire", nombreJoueurs : 1,
        descriptionSport : "Ensemble de disciplines de course, de saut et de lancer."},
      { idSport : 8, nomSport : "Rugby",      categorieSport : "Collectif",  niveauSport : "Avancé",        nombreJoueurs : 15,
        descriptionSport : "Sport de contact où l'on porte le ballon ovale jusqu'à l'en-but adverse."}
    ];
   }

    listeSports():Sport[] {
      return this.sports;
    }

    ajouterSport( sp: Sport){
      this.sports.push(sp);
    }

    supprimerSport( sp: Sport){
      //supprimer le sport sp du tableau sports
       const index = this.sports.indexOf(sp, 0);
       if (index > -1) {
         this.sports.splice(index, 1);
       }
       //ou Bien
       /*  this.sports.forEach((cur, index) => {
          if(sp.idSport === cur.idSport) {
                this.sports.splice(index, 1);
             }
       }); */
     }

     consulterSport(id:number): Sport{
      this.sport =  this.sports.find(s => s.idSport == id)!;
        return this.sport;
     }

     trierSports(){
      this.sports = this.sports.sort((n1,n2) => {
        if (n1.idSport! > n2.idSport!) {
            return 1;
        }
       if (n1.idSport! < n2.idSport!) {
            return -1;
        }
      return 0;
    });
    }

updateSport(s:Sport)
    {
     // console.log(s);
      this.supprimerSport(s);
      this.ajouterSport(s);
      this.trierSports();
    }

  }
