import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

    createUser(email: string, password: string) {
        return this.af.auth
            .createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.af.auth
            .signInWithEmailAndPassword(email, password);
    }

    constructor(
        private af: AngularFireAuth
    ) { }

}
