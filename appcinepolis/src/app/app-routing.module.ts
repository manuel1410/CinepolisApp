import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'mainmenu',
    loadChildren: () => import('./mainmenu/mainmenu.module').then( m => m.MainmenuPageModule)
  },
  {
    path: 'detalles-pelicula',
    loadChildren: () => import('./detalles-pelicula/detalles-pelicula.module').then( m => m.DetallesPeliculaPageModule)
  },
  {
    path: 'alimentos-menu',
    loadChildren: () => import('./alimentos-menu/alimentos-menu.module').then( m => m.AlimentosMenuPageModule)
  },
  {
    path: 'detalles-alimentos',
    loadChildren: () => import('./detalles-alimentos/detalles-alimentos.module').then( m => m.DetallesAlimentosPageModule)
  },
  {
    path: 'compra-entradas',
    loadChildren: () => import('./compra-entradas/compra-entradas.module').then( m => m.CompraEntradasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
