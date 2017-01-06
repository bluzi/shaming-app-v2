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
    @ViewChild('name') name;
    friends: Friend[];

    constructor(private friendsService: FriendsService) {
        this.friends = [];
        this.friendsService.getNextFriend().then(friend => this.friends.push(friend));
        this.friendsService.getNextFriend().then(friend => this.friends.push(friend));        
    }

    onSlideChanged() {
        let currentIndex = this.slider.getActiveIndex();
        
        //if (currentIndex === this.friends.length - 1) {
            if (this.name.value) { console.log("there's a value in the input")
                this.friendsService.getFriendsByName(this.name.value).then(friends => {this.friends = friends; console.log(friends)});
            }
            else { console.log("the input is empty")
                this.friendsService.getNextFriend().then(friend => this.friends.push(friend));
            }
        //}
    }

    resetSlideIndex() {
        this.slider.slideTo(0, 200);
    }

    checkSlideStatus() {
        if (this.slider.slider.slides.length < 2 && !this.name.value)
            this.friendsService.getNextFriend().then(friend => this.friends.push(friend));
    }
}