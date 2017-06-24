import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo = 'https://raw.githubusercontent.com/colmena/colmena/develop/apps/admin/src/assets/logo.png';
  wolves = 0;

  inc(i: number) {
    this.wolves = Math.min(5, Math.max(0, this.wolves + i));
  }
}
