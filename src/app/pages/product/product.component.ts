import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  source = [
    { name: 'PC', price: '2000$' },
    { name: 'Mobile', price: '500$' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
