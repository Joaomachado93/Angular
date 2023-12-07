import { ListComponent } from './../list/list.component';
// list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListService } from '../list.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listServiceSpy: jasmine.SpyObj<ListService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ListService', ['remove']);

    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [{ provide: ListService, useValue: spy }],
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    listServiceSpy = TestBed.inject(ListService) as jasmine.SpyObj<ListService>;
  });

// list.component.spec.ts
it('should remove an animal', () => {
  // Arrange
  const animalToRemove = { name: 'Turca', type: 'Dog', age: 4 };
  component.animals = [
    animalToRemove,
    { name: 'Tom', type: 'Cat', age: 10 },
  ];

  // Act
  component.removeAnimal(animalToRemove);

  // Assert
  expect(listServiceSpy.remove).toHaveBeenCalledTimes(1);
  expect(listServiceSpy.remove).toHaveBeenCalledWith(component.animals, animalToRemove);
  expect(component.animals).not.toContain(animalToRemove);
});
});