import { TmplAstBoundAttribute } from '@angular/compiler';
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
  producto:Product;

  constructor(public db: AngularFirestore) {
    
    //this.products = this.db.collection('DEMANDA', ref => ref.where('DEMANDA','==','85')).valueChanges();
    //this.products = this.db.collection('DEMANDA').valueChanges();
    /*SOLO TRAE LOS ULTIMOS 10*/
    this.products = this.db.collection('DEMANDA', ref => ref.orderBy('FECHA').limitToLast(10)).valueChanges();
    this.productsCollection = this.db.collection('DEMANDA');
  }

  getProducts(){
    return this.products;
  }

  /*PRODUCTO - PRUEBA*/
  addProduct(product:Product){
    this.productsCollection.add(product);
  }
  
}
