import { Component, Input } from '@angular/core';
import { Friend } from '../../../models/friend';

@Component({
    templateUrl: 'about-them-card-details.html',
    selector: 'card-details',
})
export class AboutThemCardDetailsComponent {
    @Input()
    friend: Friend;
}