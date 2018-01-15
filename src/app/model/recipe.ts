import {Ingredient} from './ingredient';
import {Instruction} from './instruction';

export class Recipe {

  constructor(public title: string,
              public description: string,
              public ingredients: Ingredient[],
              public instruction: Instruction[],
              public coverphoto: string) {
  }
}
