import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {FacebookService, FacebookLoginResponse, FacebookInitParams, FacebookLoginOptions} from 'ng2-facebook-sdk';
import { GameComponent } from './components/game/game.component';

@Component({
  templateUrl: 'app.html',
  providers: [FacebookService]
})
export class MyApp implements OnInit{
  rootPage = null;

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
    let fbOptions: FacebookLoginOptions = {
      scope: 'user_friends'
    };

    this.fb.login(fbOptions).then(
    (response: FacebookLoginResponse) => this.rootPage = GameComponent,
    (error: any) => console.error(error));
  }

    ngOnInit() {
      this.fb.getLoginStatus().then(fbResponse => {
        let isConnected = fbResponse.status === "connected";
        
        console.log(isConnected);

        if (!isConnected)
          this.fbLogin();
        else
          this.rootPage = GameComponent;
      });
    }
}
