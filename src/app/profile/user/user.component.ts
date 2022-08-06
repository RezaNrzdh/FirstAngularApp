import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() createdUser = new EventEmitter<{username: string, password: string}>();
  newUsername: string = '';
  newPassword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewUser = () => {
    this.createdUser.emit({
      username: this.newUsername,
      password: this.newPassword
    })
  }

}
