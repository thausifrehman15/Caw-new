import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  width: number = 3;
  height: number = 3;

  board: number[] = [];
  randEle: number[] = [];

  createboard() {
    for (var i = 0; i < this.width; i++) {
      const rand = Math.floor(Math.random() * this.width * this.height) + 1;
      console.log(rand);
      // this.randEle.find((x) => x === rand) ? i++ : this.randEle.push(rand);
    }
  }
}
