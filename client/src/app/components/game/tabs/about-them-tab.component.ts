import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutThemCardDetailsComponent } from '../cards/about-them-card-details.component';

@Component({
  templateUrl: 'about-them-tab.html',
  providers: [AboutThemCardDetailsComponent]
})
export class AboutThemTabComponent {
    constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    // console.log(this.nav.id)
  }
}