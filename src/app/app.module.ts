import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapseBtnComponent } from './shared/collapse-btn/collapse-btn.component';
import { PayCardComponent } from './shared/pay-card/pay-card.component';
import { DescriptionCardComponent } from './shared/description-card/description-card.component';
import { DescriptionCardLiteComponent } from './shared/description-card-lite/description-card-lite.component';
import { ButtonPayCardComponent } from './shared/button-pay-card/button-pay-card.component';
import { CardOneComponent } from './pages/card-one/card-one.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardTwoComponent } from './pages/card-two/card-two.component';
import { CardThreeComponent } from './pages/card-three/card-three.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';
import { MultiLayerComponent } from './pages/multi-layer/multi-layer.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { CollapseBtn2Component } from './shared/collapse-btn2/collapse-btn2.component';
import { WarningComponent } from './pages/warning/warning.component';
import { NoRepeatComponent } from './shared/no-repeat/no-repeat.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseBtnComponent,
    PayCardComponent,
    DescriptionCardComponent,
    DescriptionCardLiteComponent,
    ButtonPayCardComponent,
    CardOneComponent,
    CardsComponent,
    CardTwoComponent,
    CardThreeComponent,
    LoginFormComponent,
    MultiLayerComponent,
    IntroductionComponent,
    CollapseBtn2Component,
    WarningComponent,
    NoRepeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
