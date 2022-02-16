import { Component } from '@angular/core';
import { Pet } from './model/Pet';
import { PetFilter } from './model/petFilter';
import { PetService } from './service/pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PetService]
})
export class AppComponent {

  pets: Pet[] = [];

  petFilter: PetFilter = {
    name: '',
    birthdayFrom: null,
    birthdayTo: null,
    isVaccinated: false,
    sex: '',
    priceFrom: 0,
    priceTo: null
  }  
  
  constructor(private petService: PetService) { }
  
  ngOnInit(): void {
    this.pets = this.petService.getPets();
  }


}
