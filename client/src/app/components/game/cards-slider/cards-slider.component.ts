import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { FriendsService } from '../../../services/friends.service';
import { Friend } from '../../../models/friend';

@Component({
    templateUrl: 'cards-slider.component.html',
    selector: 'card-slider',
    providers: [FriendsService]
})
export class CardsSliderComponent {
    @ViewChild('slider') slider: Slides;
    friends: Friend[];

    constructor(private friendsService: FriendsService) {
        this.friends = [];
        this.friendsService.getNextFriend().then(friend => this.friends.push(friend));
        this.friendsService.getNextFriend().then(friend => this.friends.push(friend));        
    }

    onSlideChanged() {
        let currentIndex = this.slider.getActiveIndex();
        
        if (currentIndex === this.friends.length - 1)
            this.friendsService.getNextFriend().then(friend => this.friends.push(friend));
    }
}