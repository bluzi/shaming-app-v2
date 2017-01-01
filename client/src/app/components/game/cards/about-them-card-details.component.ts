import { Component } from '@angular/core';
import { Friend, Gender } from '../../../models/friend';

@Component({
    templateUrl: 'about-them-card-details.html',
    selector: 'card-details'
})

export class AboutThemCardDetailsComponent {
    friend: Friend;
    friendGenderStr: string;

    constructor() {
        //dummy data for now..
        this.friend = {
            name: 'Bill Gates',
            age: 50,
            gender: Gender.Male
        };
        this.friendGenderStr = this.friend.gender == Gender.Male ? 'him' : 'her'; //disgusting
    }
}