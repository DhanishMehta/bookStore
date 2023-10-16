import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookStore';

  cartIsEmpty: boolean = true;
  cartToggle: boolean = false;

  showCartToggle(e: any){
    console.log(e);
    if(this.cartToggle === false){
      this.cartToggle = true;
    } else {
      this.cartToggle = false;
    }
  }

  isCartEmptyCatcher(e: boolean){
    this.cartIsEmpty = e;
  }
}
