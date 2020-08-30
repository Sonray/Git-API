import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private username:string;
  private client_id = "4b1a2fadefdfd945db5d";
  private client_secret ="d1c3716ce71eeab26a8f8b5aa9f090638b129cce";
  
  constructor() { 
    
  }
}
