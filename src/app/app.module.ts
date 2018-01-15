import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import {RecipeWidgetComponent} from './components/recipe-list/recipe-widget/recipe-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
