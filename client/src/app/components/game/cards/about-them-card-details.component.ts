import { Component } from '@angular/core';
import { Friend, Gender } from '../../../models/friend';
import {FriendsService} from '../../../services/friends.service';

@Component({
    templateUrl: 'about-them-card-details.html',
    selector: 'card-details',
    providers: [FriendsService]
})

export class AboutThemCardDetailsComponent {
    friend: Friend;
    constructor(private friendsService: FriendsService) {
        friendsService.getNextFriend().then((friend) => {
            this.friend = friend;
        });
    }
}