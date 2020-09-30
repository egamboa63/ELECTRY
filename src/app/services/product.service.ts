import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Product } from "../models/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productsCollection;
  products: Observable<Product[]>;
  producDoc;

  constructor(public db: AngularFirestore) { 
    //this.products = this.db.collection('DEMANDA', ref => ref.where('DEMANDA','==','85')).valueChanges();
    this.products = this.db.collection('DEMANDA').valueChanges();
    console.log(this.products);    
  }

  getProducts(){
    return this.products;
  }
}
