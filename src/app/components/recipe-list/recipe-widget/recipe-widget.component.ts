import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../model/recipe';

@Component({
  selector: 'app-recipe-widget',
  templateUrl: './recipe-widget.component.html',
  styleUrls: ['./recipe-widget.component.css']
})
export class RecipeWidgetComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
