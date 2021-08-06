import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nbr: number = 0;
  inpCls: string = "";

  change(amount: number): void {
    this.nbr += amount;
    this.display();
  }
  display(): void {
    this.inpCls = "";
    if(this.nbr % 2 == 0) this.inpCls += " text-danger ";
    if(this.nbr % 3 == 0) this.inpCls += " fw-bold ";
    if(this.nbr % 7 == 0) this.inpCls += " fst-italic ";
  }
}
