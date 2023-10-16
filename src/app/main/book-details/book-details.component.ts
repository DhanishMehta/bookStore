import { Component, Input, Output, EventEmitter } from '@angular/core';

interface book {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: {
    currency: string;
    value: number;
    displayValue: string;
  };
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  @Input() book: book | undefined;
  @Output() cartFunction: EventEmitter<any> = new EventEmitter();
  @Input() displayID: number = 0;

  addToCart() {
    let func = {
      ISBN: this.book?.ISBN,
      functionName: 'add',
    };
    this.cartFunction.emit(func);
  }
  clearDisplay(){
    this.book = undefined;
  }
}
