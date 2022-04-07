import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingrdients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
    ];

    getIngredients(){
        return this.ingrdients.slice()
    }
    addIngredient(ingredient: Ingredient){
        this.ingrdients.push(ingredient)
        this.ingredientsChanged.emit(this.ingrdients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingrdients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingrdients.slice())
    }
}