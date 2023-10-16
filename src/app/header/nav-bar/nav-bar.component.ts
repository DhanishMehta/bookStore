import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Event } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Output() navBarCartEmitter: EventEmitter<any> = new EventEmitter();
  @Input() cartIsEmpty: boolean = false;

  showCartToggle() {
    this.navBarCartEmitter.emit(1);
  }
}
