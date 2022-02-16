import { PetFilter } from './../model/petFilter';
import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../model/Pet';

@Pipe({
  name: 'petFilter',
  pure: false
})
export class PetFilterPipe implements PipeTransform {

  transform(pets: Pet[], filter: PetFilter): Pet[] {
    let filteredPets: Pet[] = Object.assign([], pets);

    if (filter.name.trim() != '') {
      filteredPets = filteredPets.filter(pet => pet.name.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase()));
    }
    
    if (filter.birthdayFrom) {
      filteredPets = filteredPets.filter(pet => new Date(pet.birthday) >= new Date(filter.birthdayFrom!));
    }

    if (filter.birthdayTo) {
      filteredPets = filteredPets.filter(pet => new Date(pet.birthday) <= new Date(filter.birthdayTo!));
    }

    if (filter.isVaccinated) {
      filteredPets = filteredPets.filter(pet => pet.isVaccinated);
    }

    if (filter.sex != '') {
      filteredPets = filteredPets.filter(pet => pet.sex == filter.sex);
    }

    if (filter.priceFrom) {
      filteredPets = filteredPets.filter(pet => pet.price >= filter.priceFrom);
    }

    if (filter.priceTo) {
      filteredPets = filteredPets.filter(pet => pet.price <= filter.priceTo!);
    }

    return filteredPets;
  }

}