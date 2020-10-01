import { Component, OnInit, ɵConsole } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { Product } from '../models/products';
import { AngularFirestore } from "@angular/fire/firestore";

import { ProductService } from "../services/product.service";
import { timeStamp } from 'console';
import * as moment from 'moment';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {  
/*PIE*/
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['A1 = 500', 'A2 = 500','A3 = 500'];
  public pieChartData: SingleDataSet = [500, 500, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
/*PIE*/
  /*AGREGAR REGISTRO*/
  productoprueba = {} as Product;  
  


  productslist=[];

  /*DATOS REALES*/
  valores=[];
  n=[];
  
  /*ACTULIZACION INFORMACION DE LA GRAFICA*/
  public lineChartData: ChartDataSets[] = [
    { data: this.valores , label: 'Demanda GW X MINUTO' },
  ];
  public lineChartLabels: Label[] = this.n;
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(public productService: ProductService, public db: AngularFirestore) { }
  ngOnInit(): void {
    

    /*PRUEBA ADD*/
    //this.productoprueba.DEMANDA=56;
    //this.productService.addProduct(this.productoprueba);
    /*ACTUALIZA LA INFORMACION DE LA GRAFICA*/
    this.productService.getProducts().subscribe(products => {
      let tiempo = new Date();
      /*console.log(moment(tiempo).format('LT'));
      tiempo = products[1].TIEMPO.toDate();
      console.log(moment(tiempo).format('LT'));
      tiempo = products[2].TIEMPO.toDate();
      console.log(moment(tiempo).format('LT'));*/

      if(products.length > 0){
        if(this.valores.length > 0){
          for (let index = 0; index < (products.length-1); index++) {
            this.valores.pop();
            this.valores.push(products[index].DEMANDA);
            this.n.pop();
            tiempo = products[index].FECHA.toDate();
            this.n.push(moment(tiempo).format('LT'));
          }
          tiempo = products[(products.length-1)].FECHA.toDate();
          this.valores.push(products[(products.length-1)].DEMANDA);
          this.n.push(moment(tiempo).format('LT'));
        }else{
          for (let index = 0; index < products.length; index++) {
            this.valores.push(products[index].DEMANDA);
            tiempo = products[index].FECHA.toDate();
            this.n.push(moment(tiempo).format('LT'));
          }
        }        
      }else{
        this.valores.push(products[0].DEMANDA)
        tiempo = products[0].FECHA.toDate();
            this.n.push(moment(tiempo).format('LT'));
      }  
    });
  }

}
