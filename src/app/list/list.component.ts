// list.component.ts
import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, ) { }

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 11 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];

  animalDetails = '';

  ngOnInit() {
    // Use the DataService to fetch data (HTML not included in the component)
    // this.listService.getData().subscribe((result: string) => {
    //   console.log('Received data:', result);
    // });
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.listService.remove(this.animals, animal);
    // Certifique-se de que a remoção é aplicada diretamente à lista do componente
    this.animals = this.animals.filter((a) => a.name !== animal.name);
  }
}

