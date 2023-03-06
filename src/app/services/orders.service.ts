import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

interface Order {
  id: string;
  total: number;
  direccion: string;
  platillos: any[];
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ordersCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.ordersCollection = collection(this.firestore, 'restaurantes/laterraza/pedidos');
  }

  getAll() {
    return collectionData(this.ordersCollection, {
      idField: 'id',
    }) as Observable<Order[]>;
  }

  // update(pokemon: Pokemon) {
  //   const pokemonDocumentReference = doc(
  //     this.firestore,
  //     `pokemon/${pokemon.id}`
  //   );
  //   return updateDoc(pokemonDocumentReference, { ...pokemon });
  // }

}
