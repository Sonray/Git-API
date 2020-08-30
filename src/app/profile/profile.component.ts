import { Component, OnInit } from '@angular/core';
import { UserProfileService }from '../user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  repos:any;
  username:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
