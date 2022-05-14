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
    // for (var i = 0; i < 10; i++) {
    //   const rand = Math.floor(Math.random() * this.width * this.height) + 1;
    //   this.randEle.find((x) => x === rand) ? i++ : this.randEle.push(rand);
    // }
    console.log(this.randEle);
  }
}
