import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('title1', 'description1', null, null, 'https://pbs.twimg.com/profile_images/588139522249990144/jFumDdaH_400x400.jpg'),
      new Recipe('title2', 'description2', null, null, 'https://tindrumasiankitchen.com/wp-content/uploads/2017/08/teriyaki.png'),
      new Recipe('title3', 'description3', null, null, 'https://pbs.twimg.com/profile_images/663780322891427840/lqKac9tI.jpg'),
      new Recipe('title4', 'description4', null, null, 'http://thischickcooks.net/wp-content/uploads/2018/01/1-256x256.jpeg')
    ];
  }

  ngOnInit() {
  }

}
