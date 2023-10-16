import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  @Input() book: book | undefined;
  @Output() cartFunction: EventEmitter<any> = new EventEmitter();
  @Output() cardDetailsEmitter: EventEmitter<any> = new EventEmitter();

  onHover: boolean = false;

  addToCart() {
    let func = {
      ISBN: this.book?.ISBN,
      functionName: 'add',
    };
    this.cartFunction.emit(func);
  }

  displayDetails(){
    this.cardDetailsEmitter.emit(this.book?.ISBN);
  }
}
