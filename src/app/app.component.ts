import { Component } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ELECTRY';
  login = true;
  inout = true;
}

