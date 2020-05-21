import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardOneComponent } from './pages/card-one/card-one.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardTwoComponent } from './pages/card-two/card-two.component';
import { CardThreeComponent } from './pages/card-three/card-three.component';
import { MultiLayerComponent } from './pages/multi-layer/multi-layer.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { WarningComponent } from './pages/warning/warning.component';


const routes: Routes = [
  {path: '', redirectTo: '/card', pathMatch: 'full'},
  {path:"cards", component: CardsComponent},
  {path:"card-one", component: CardOneComponent},
  {path:"card-two", component: CardTwoComponent},
  {path:"card-three", component: CardThreeComponent},
  {path:"multi-layer", component: MultiLayerComponent},
  {path:"introduction", component: IntroductionComponent},
  {path:"warning", component: WarningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
