import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Product } from '../models/products';

import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  productslist=[];
  valores=[];
  n=[];

  public lineChartData: ChartDataSets[] = [
    { data: this.valores , label: 'Demanda GW' },
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

  constructor(public productService: ProductService) { }

  

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      for (let index = 0; index < products.length; index++) {
        this.valores.push(products[index].DEMANDA);
        this.n.push(index);
      }  
    });
  }

}
