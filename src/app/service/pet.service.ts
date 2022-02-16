import { Injectable } from '@angular/core';
import { PETS } from '../mock/mock-pets';
import { Pet } from '../model/Pet';

@Injectable()
export class PetService {
  getPets(): Pet[] {
    return PETS;
  }
}