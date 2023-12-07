import { Animal } from './../Animal';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TransferState, makeStateKey } from '@angular/platform-browser';
const DATA_KEY = makeStateKey<string>('data');
@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private transferState: TransferState) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  getData(): Observable<string> {
    // Check if data is available in TransferState (server-side rendering)
    const cachedData = this.transferState.get(DATA_KEY, null);

    if (cachedData) {
      return of(cachedData);
    } else {
      // Simulate fetching data from a server
      const newData = 'Data from the server';

      // Store the data in TransferState for future requests
      console.log(DATA_KEY, newData);
      this.transferState.set(DATA_KEY, newData);

      return of(newData);
    }
  }
}
