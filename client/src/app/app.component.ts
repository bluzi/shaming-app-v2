import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk';
import { GameComponent } from './game/game.component';

@Component({
  templateUrl: 'app.html',
  providers: [FacebookService]
})
export class MyApp implements OnInit{
  rootPage = GameComponent;

  constructor(private fb: FacebookService, platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    this.initFacebookApi();
  }

  private initFacebookApi() {
      let fbParams: FacebookInitParams = {
                              appId: '1346620645394325',
                              xfbml: true,
                              version: 'v2.6'
                              };
      this.fb.init(fbParams);
  }

  private fbLogin() {
    this.fb.login().then(
    (response: FacebookLoginResponse) => console.log(response),
    (error: any) => console.error(error));
  }

    ngOnInit() {
      this.fb.getLoginStatus().then(fbResponse => {
        let isConnected = fbResponse.status === "connected";
        
        console.log(isConnected);

        if (!isConnected)
          this.fbLogin();
      });
    }
}
