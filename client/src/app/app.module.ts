import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GameComponent } from './components/game/game.component'

import { AboutMeTabComponent } from './components/game/tabs/about-me-tab.component';
import { AboutThemTabComponent } from './components/game/tabs/about-them-tab.component';
import { AboutThemCardDetailsComponent } from './components/game/cards/about-them-card-details.component';
import { CardsSliderComponent } from './components/game/cards-slider/cards-slider.component';



@NgModule({
  declarations: [
    MyApp,
    GameComponent,
    AboutMeTabComponent,
    AboutThemTabComponent,
    AboutThemCardDetailsComponent,
    CardsSliderComponent
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
    AboutThemCardDetailsComponent,
    CardsSliderComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
