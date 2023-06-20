import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //providers:[UserService]
})
export class AdduserComponent {

  username:string='';
  status:string='active';
constructor(private userservice:UserService){

}
AddUser(){
  this.userservice.addnewuser(this.username,this.status);
  console.log(this.userservice.users);
}
}
