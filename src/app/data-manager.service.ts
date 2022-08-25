import { Injectable } from '@angular/core';
import { Car } from './DataResourceModel/book';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  addCar(newCar: any) {
    throw new Error('Method not implemented.');
  }
  book1: Car = {name: 'The Art of Seduction', writer: 'Robert Greene'};
  book2: Car = {name: '48 Laws of Power', writer: 'Robert Greene'};
  book3: Car = {name: 'The Human Nature', writer: 'Robert Greene'};

  cars:Car[] = [this.book1, this.book2, this.book3];

  constructor() { }

  getBooks() {
    return this.cars;
  }

  addBooks(car:Car) {
    this.cars.push(car);
  }
}
