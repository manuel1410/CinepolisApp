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
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'mainmenu-admin',
    loadChildren: () => import('./mainmenu-admin/mainmenu-admin.module').then( m => m.MainmenuAdminPageModule)
  },
  {
    path: 'modificar-detalles-pelicula',
    loadChildren: () => import('./modificar-detalles-pelicula/modificar-detalles-pelicula.module').then( m => m.ModificarDetallesPeliculaPageModule)
  },
  {
    path: 'agregar-pelicula',
    loadChildren: () => import('./agregar-pelicula/agregar-pelicula.module').then( m => m.AgregarPeliculaPageModule)
  },
  {
    path: 'alimentos-menu-admin',
    loadChildren: () => import('./alimentos-menu-admin/alimentos-menu-admin.module').then( m => m.AlimentosMenuAdminPageModule)
  },
  {
    path: 'modificar-alimento',
    loadChildren: () => import('./modificar-alimento/modificar-alimento.module').then( m => m.ModificarAlimentoPageModule)
  },
  {
    path: 'agregar-alimento',
    loadChildren: () => import('./agregar-alimento/agregar-alimento.module').then( m => m.AgregarAlimentoPageModule)
  },
  {
    path: 'clientes-menu-admin',
    loadChildren: () => import('./clientes-menu-admin/clientes-menu-admin.module').then( m => m.ClientesMenuAdminPageModule)
  },
  {
    path: 'modificar-cliente',
    loadChildren: () => import('./modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)
  },
  {
    path: 'agregar-cliente',
    loadChildren: () => import('./agregar-cliente/agregar-cliente.module').then( m => m.AgregarClientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
