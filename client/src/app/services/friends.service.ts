import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Friend} from '../models/friend';
import * as FacebookResponse from '../models/facebook-friends-response';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';

@Injectable()
export class FriendsService {
    friends: Friend[];
    currentFriendIndex: number;
    getFriendsPromise: Promise<any>;

    constructor(private fb: FacebookService, private http: Http) {
        this.friends = [];
        this.currentFriendIndex = 0;

        this.getFriendsPromise = this.fb.api('/me/taggable_friends', "get", {
            fields: 'name,picture.width(200).height(200)'
        })
        .then(response => {
            let facebookResponse = (<FacebookResponse.FacebookFriendsResponse>response);
            this.addFriends(facebookResponse);
        });
    }

    private addFriends(facebookResponse: FacebookResponse.FacebookFriendsResponse) {
        facebookResponse.data.forEach(friend => {
            let friendToAdd: Friend = {
                name: friend.name,
                picture: friend.picture.data.url,
            }
            this.friends.push(friendToAdd);
        });

        if (facebookResponse.paging.next) {
            this.http.get(facebookResponse.paging.next).map(response => response.json()).subscribe(jsonResponse => {
                this.addFriends(jsonResponse);
            });
        }
    }

    getNextFriend(): Promise<Friend> {
        return this.getFriendsPromise.then(() => {
            if (this.currentFriendIndex >= this.friends.length) 
                this.currentFriendIndex = 0;

            return this.friends[this.currentFriendIndex++];
        });
    }
}