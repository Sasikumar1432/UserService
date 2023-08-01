import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'UserService';

  users: { name: string; status: string }[] = [];

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.users = this.userservice.users;
    this.myObservable.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        alert('observable has complete emmiting values');
      }
    );
  }
  array1 = [1, 2, 3, 4];
  array2 = ['a', 'b', 'c', 'd'];
  myObservables = of(this.array1, this.array2);
  myObservable = new Observable((observer) => {
    console.log('observable starts');
    //observer.next("1")
    //observer.next("2")
    //observer.next("3")
    //observer.next("4")
    //observer.next("5")
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    //setTimeout(() => {
    // observer.error(new Error('something went wrong! please try again'))
    //}, 1000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.complete();
    }, 5000);
  });
}
