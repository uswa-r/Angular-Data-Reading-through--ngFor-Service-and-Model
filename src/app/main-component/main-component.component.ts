import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Car } from '../DataResourceModel/book';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

name:any
cars: Car[];
  constructor(

    private dataManager: DataManagerService

  ) {
    this.cars = this.dataManager.getBooks();
   }

  ngOnInit(): void {
  }

  addCar(){
    const newBook: Car = {name:"World of Wars",writer:"Robert Greene"};
    this.dataManager.addCar(newBook);
  }

}
