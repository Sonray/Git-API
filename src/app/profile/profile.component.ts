import { Component, OnInit } from '@angular/core';
import { UserProfileService }from '../user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profil:any;
  repos:any;
  username:string;

  constructor(private userProfile:UserProfileService ) { 
    
    this.userProfile.updateProfile(this.username);
    this.userProfile.getUserInfo().subscribe(profile => {
      this.profil = profile;
    });
  
    this.userProfile.getUserInfo().subscribe(repos => {
      this.repos = repos;
    });
  }
  findProfile(){
    this.userProfile.updateProfile(this.username);
    this.userProfile.getUserInfo().subscribe(profile => {
      this.profil = profile;
    });
  
    this.userProfile.getRepo().subscribe(repos => {
      this.repos = repos;
    })
  }

  ngOnInit(): void {

    this.userProfile.updateProfile('');
    this.userProfile.getUserInfo().subscribe(profile => this.profil = profile);
    this.userProfile.getRepo().subscribe(repos =>  this.repos = repos);
    
  }

}
