import { Component } from '@angular/core';
import { Keyboard } from 'ionic-native';
import { Friend } from '../../../models/friend';

@Component({
    templateUrl: 'about-them-card-details.html',
    selector: 'card-details'
})

export class AboutThemCardDetailsComponent {
    friend: Friend;

    constructor() {
        //dummy data for now..
        this.friend = {
            name: 'Bill Gates',
            age: 50
        };
    }
}