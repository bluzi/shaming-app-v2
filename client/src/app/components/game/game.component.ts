import { Component } from '@angular/core';
import { AboutMeTabComponent } from './tabs/about-me-tab.component';
import { AboutThemTabComponent } from './tabs/about-them-tab.component';

@Component({
    selector: '<game></game>',
    templateUrl: 'game.html'
})
export class GameComponent {
    aboutMeTab: any;
    aboutThemTab: any;

    constructor() {
        this.aboutMeTab = AboutMeTabComponent;
        this.aboutThemTab = AboutThemTabComponent;
    }    
}