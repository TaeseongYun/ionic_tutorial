import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipes.module";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
  title = "Recipes";

  message = "Recipes Component is working!";

  recipes: Recipe[] = [
    {
      id: "apple",
      description: "sweet",
      imageUrl: "../../assets/fruits/KakaoTalk_20190725_054106321.jpg",
      ingredients: ["AnyThings", "Meat", "Salad"]
    },
    {
      id: "watermelon",
      description: "yummy",
      imageUrl: "../../assets/fruits/KakaoTalk_20190725_054104686.jpg",
      ingredients: ["AnyThings", "Meat", "Salad"]
    },
    {
      id: "grape",
      description: "sweet",
      imageUrl: "../../assets/fruits/KakaoTalk_20190725_054107416.jpg",
      ingredients: ["AnyThings", "Meat", "Salad"]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
