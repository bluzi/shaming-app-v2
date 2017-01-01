import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GameComponent } from './game/game.component'

import { AboutMeTabComponent } from './game/tabs/about-me-tab.component';
import { AboutThemTabComponent } from './game/tabs/about-them-tab.component';
import { AboutThemCardDetailsComponent } from './game/cards/about-them-card-details.component';



@NgModule({
  declarations: [
    MyApp,
    GameComponent,
    AboutMeTabComponent,
    AboutThemTabComponent,
    AboutThemCardDetailsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GameComponent,
    AboutMeTabComponent,
    AboutThemTabComponent,
    AboutThemCardDetailsComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
