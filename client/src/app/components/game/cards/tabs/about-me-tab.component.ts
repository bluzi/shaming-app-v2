import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'about-me-tab.html'
})
export class AboutMeTabComponent {
    constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    // console.log(this.nav.id)
  }
}