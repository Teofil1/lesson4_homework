export interface PetFilter{
    name: string;
    birthdayFrom: Date | null;
    birthdayTo: Date | null;
    isVaccinated: boolean;
    sex: string;
    priceFrom: number;
    priceTo: number | null;
}