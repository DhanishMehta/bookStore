import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() headerEmitter : EventEmitter<any> = new EventEmitter();
  @Input() cartIsEmpty: boolean = true;
  @Output() searchQuery : EventEmitter<string> = new EventEmitter();

  showCartToggle(){
    this.headerEmitter.emit(1);
  }

  searchQueryExport(query: string) {
    console.log("Received search query in header: "+query);
    this.searchQuery.emit(query);
  }
}
