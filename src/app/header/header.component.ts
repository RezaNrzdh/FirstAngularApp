import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showRecipe = new EventEmitter<string>();  

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler = (type: string) => {
    this.showRecipe.emit(type);
  }

}
