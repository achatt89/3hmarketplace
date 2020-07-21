import { Injectable } from '@angular/core';
import { Product} from '../interface/product';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceCrudService {

  constructor(public firestore: AngularFirestore, public firestorage: AngularFireStorage) {}

  fetchProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  addProduct(collection: string, productObj: {}) {
    return this.firestore.collection(collection).add(productObj);
  }

}
