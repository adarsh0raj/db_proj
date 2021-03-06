import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        console.log(this.currentUser);
    }

    ngOnInit() {
        // todo : load all systems available to this user 
        // todo : load all processes available to those systems
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }

    // private loadAllUsers() {
    //     this.userService.getAll()
    //         .pipe(first())
    //         .subscribe(users => this.users = users);
    // }
}