import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from '@Enums/routes.enum';

import { ChatComponent } from './chat/chat.component';
import { FindRecipesComponent } from './find-recipes/find-recipes.component';
import { HomeComponent } from './home/home.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: AppRoutes.Home,
    component: HomeComponent,
  },
  {
    path: AppRoutes.Recipes,
    component: RecipesComponent,
  },
  {
    path: AppRoutes.MyRecipes,
    component: MyRecipesComponent,
  },
  {
    path: AppRoutes.FindRecipes,
    component: FindRecipesComponent,
  },
  {
    path: AppRoutes.Chat,
    component: ChatComponent,
  },
  {
    path: AppRoutes.Empty,
    redirectTo: AppRoutes.Home,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.Other,
    redirectTo: AppRoutes.NotFound,
  },
  {
    path: AppRoutes.NotFound,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
