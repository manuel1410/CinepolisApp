import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  allPeliculas: any;
  peliculas: Array<any>;
  pelicula: any;


  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {
    this.dataService.setCarritoLocalUsuario();
    const peliculasRef = this.dataService.getPeliculas();
    this.peliculas = [];
    peliculasRef.subscribe(res => {
      this.allPeliculas = res;
      //console.log(this.allPeliculas);
      for(let pelicula of this.allPeliculas){
        //console.log(pelicula);
        if(pelicula.salaFlag == true && pelicula.deleted == false){
          this.peliculas.push(pelicula);
        }
      }
    })


  }

  ngOnInit() {
  }

  regresar() {
    this.router.navigateByUrl('/home', { replaceUrl: true});
  }

  detallesPelicula(item) {
    this.pelicula = item;
    this.dataService.setPeliculaLocal(item);
    this.router.navigateByUrl('/detalles-pelicula', { replaceUrl: true});
  }

  alimentos(){
    this.router.navigateByUrl('/alimentos-menu', { replaceUrl: true});
  }

  carrito() {
    this.router.navigateByUrl('/carrito', { replaceUrl: true});
  }

}
