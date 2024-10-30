import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from '@Enums/routes.enum';

const routes: Routes = [
  {
    path: AppRoutes.Empty,
    loadComponent: () => import('./home/home.component').then((x) => x.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: AppRoutes.Home,
    loadComponent: () => import('./home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: AppRoutes.Recipes,
    loadComponent: () => import('./recipes/recipes.component').then((x) => x.RecipesComponent),
  },
  {
    path: AppRoutes.MyRecipes,
    loadComponent: () => import('./my-recipes/my-recipes.component').then((x) => x.MyRecipesComponent),
  },
  {
    path: AppRoutes.FindRecipes,
    loadComponent: () => import('./find-recipes/find-recipes.component').then((x) => x.FindRecipesComponent),
  },
  {
    path: AppRoutes.Chat,
    loadComponent: () => import('./chat/chat.component').then((x) => x.ChatComponent),
  },
  {
    path: AppRoutes.Login,
    loadComponent: () => import('./login/login.component').then((x) => x.LoginComponent),
  },
  {
    path: AppRoutes.Other,
    loadComponent: () => import('./shared/pages/not-found/not-found.component').then((x) => x.NotFoundComponent),
  },
  {
    path: AppRoutes.NotFound,
    loadComponent: () => import('./shared/pages/not-found/not-found.component').then((x) => x.NotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
