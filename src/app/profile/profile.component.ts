import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userlist: Array<{ username: string, password: string}> = [
    { username: 'RezaNrzdh', password: '123456' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  NewUserAdded = (user: {username: string, password: string}) => {
    this.userlist.push({
      username: user.username,
      password: user.password
    });
  }

}
