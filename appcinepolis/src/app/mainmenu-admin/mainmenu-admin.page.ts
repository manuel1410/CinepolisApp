import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-mainmenu-admin',
  templateUrl: './mainmenu-admin.page.html',
  styleUrls: ['./mainmenu-admin.page.scss'],
})
export class MainmenuAdminPage implements OnInit {

  allPeliculas: any;
  peliculas: Array<any>;
  pelicula: any;
  constructorFlag: boolean;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {
    this.constructorFlag = false; 
    //console.log('constructor');
    const peliculasRef = this.dataService.getPeliculas();
    this.peliculas = [];
    if(this.constructorFlag == false){
      peliculasRef.subscribe(res => {
        this.allPeliculas = res;
        //console.log(this.allPeliculas);
        if(this.constructorFlag == false){
          for(let pelicula of this.allPeliculas){
            //console.log(pelicula);
            if(pelicula.deleted == false && this.constructorFlag == false){
              this.peliculas.push(pelicula);
            }
          }
          this.constructorFlag = true;
        }
        
      })
    }
  }

  ngOnInit() {
  }

  modificar(index){
    this.dataService.setPeliculaLocal(this.peliculas[index]);
    this.router.navigateByUrl('/modificar-detalles-pelicula', { replaceUrl: true});
  }

  agregarPelicula(){
    this.router.navigateByUrl('/agregar-pelicula', { replaceUrl: true});
  }

  clientes(){
    this.router.navigateByUrl('/clientes-menu-admin', { replaceUrl: true});
  }

  alimentos(){
    this.router.navigateByUrl('/alimentos-menu-admin', { replaceUrl: true});
  }

  eliminarPelicula(index){
    this.actualizarEliminacionPelicula(index);
    this.peliculas.splice(index,1);
  }

  actualizarEliminacionPelicula(index){
    this.dataService.deletePelicula(this.peliculas[index]);
  }

  regresar(){
    this.router.navigateByUrl('/admin-login', { replaceUrl: true});
  }

}
